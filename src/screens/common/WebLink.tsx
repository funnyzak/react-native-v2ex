import React, { useEffect } from 'react'
import { View } from 'react-native'
import { WebView } from 'react-native-webview'

import { useTheme, SylCommon } from '@src/theme'
import { WebLinkScreenProps as ScreenProps } from '@src/navigation/routes'
import { Spinner } from '@src/components'

const WebLink = ({ route, navigation }: ScreenProps) => {
  const { theme } = useTheme()
  const [loading, setLoading] = React.useState(true)

  useEffect(() => {
    if (route.params.title) {
      navigation.setOptions({ title: route.params.title })
    }
  }, [])

  return (
    <View style={[SylCommon.Layout.fill, SylCommon.View.background(theme)]}>
      {loading && <Spinner style={{ height: '100%', marginTop: '50%', marginBottom: 10000 }} />}
      <WebView
        originWhitelist={['*']}
        source={{ uri: route.params.url }}
        onLoad={(syntheticEvent) => {
          const { nativeEvent } = syntheticEvent
        }}
        onError={(syntheticEvent) => {
          const { nativeEvent } = syntheticEvent
          setLoading(false)
          console.warn('WebView error: ', nativeEvent)
        }}
        onLoadEnd={(syntheticEvent) => {
          // update component to be aware of loading status
          const { nativeEvent } = syntheticEvent
          setLoading(false)

          if (!route.params.title) {
            navigation.setOptions({
              title: nativeEvent.title
            })
          }
        }}
      />
    </View>
  )
}

export default WebLink
