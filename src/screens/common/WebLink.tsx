import React, { useEffect, useLayoutEffect, useMemo, useRef } from 'react'
import { WebView } from 'react-native-webview'

import { Spinner } from '@src/components'
import { translate } from '@src/i18n'
import { WebViewerScreenProps as ScreenProps } from '@src/navigation/routes'
import { SylCommon, useTheme } from '@src/theme'
import { linking } from '@src/utils'
import { HeaderButton } from '../components'

const WebLink = ({ route, navigation }: ScreenProps) => {
  const { theme } = useTheme()
  const webViewRef = useRef<WebView>(null)
  const [loading, setLoading] = React.useState(true)
  const url = useMemo(
    () => (!route.params.url.startsWith('http') ? `http://${route.params.url}` : route.params.url),
    [route]
  )

  useEffect(() => {
    if (loading) {
      navigation.setOptions({ title: translate('placeholder.loading') })
    }
  }, [])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <>
          <HeaderButton
            containerStyle={[{ marginRight: theme.spacing.medium }]}
            source={theme.assets.images.icons.header.refresh}
            onPress={() => {
              setLoading(true)
              webViewRef.current?.reload()
            }}
          />
          <HeaderButton
            source={theme.assets.images.icons.header.link}
            onPress={() => {
              linking(url)
            }}
          />
        </>
      )
    })
  }, [navigation])

  return (
    <>
      {loading && <Spinner text={translate('placeholder.loading')} style={SylCommon.Layout.fill} />}
      <WebView
        ref={webViewRef}
        originWhitelist={['*']}
        source={{ uri: url }}
        onLoad={(syntheticEvent) => {
          const { nativeEvent } = syntheticEvent
        }}
        onError={(syntheticEvent) => {
          const { nativeEvent } = syntheticEvent
          setLoading(false)
          navigation.setOptions({ title: translate('errors.error') })

          console.warn('WebView error: ', nativeEvent)
        }}
        onLoadEnd={(syntheticEvent) => {
          const { nativeEvent } = syntheticEvent
          setLoading(false)

          navigation.setOptions({
            title: !route.params.title ? nativeEvent.title : route.params.title
          })
        }}
      />
    </>
  )
}

export default WebLink
