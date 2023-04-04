/**
 * Created by Leon<silenceace@gmail.com> at 2022-02-28 16:15:21.
 * Last modified at 2022-04-12 19:50:05
 */

import { useTheme } from '@src/theme'
import React from 'react'
import { Image, ImageStyle, StyleProp, View } from 'react-native'
interface IProps {
  style?: StyleProp<ImageStyle>
  width?: number
  height?: number
  resizeMode?: 'contain' | 'cover' | 'stretch' | 'repeat' | 'center'
}
const Logo = ({ width = 42, height = 42, style, resizeMode = 'center' }: IProps) => {
  const { theme } = useTheme()
  return (
    <View style={{ width, height }}>
      <Image
        style={[styles.logo, { borderRadius: width * 0.3 }, style]}
        resizeMode={resizeMode}
        source={theme.assets.images.icons.app.icon}
      />
    </View>
  )
}
export default Logo
const styles = {
  logo: {
    width: '100%',
    height: '100%'
  }
}
