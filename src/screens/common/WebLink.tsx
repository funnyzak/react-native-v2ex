import React, { useEffect } from 'react'
import { View } from 'react-native'
import { WebView } from 'react-native-webview'

import { useTheme, SylCommon } from '@src/theme'
import { WebLinkScreenProps as ScreenProps } from '@src/navigation/routes'

const WebLink = ({ route, navigation }: ScreenProps) => {
  const { theme } = useTheme()

  useEffect(() => {
    if (route.params.title) {
      navigation.setOptions({ title: route.params.title })
    }
  }, [])

  return (
    <View style={[SylCommon.Layout.fill, SylCommon.View.background(theme)]}>
      <WebView originWhitelist={['*']} source={{ uri: route.params.url }} />
    </View>
  )
}

export default WebLink
