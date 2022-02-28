import Assets from '@src/theme/assets'
import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

interface IProps {
  width?: number | string
  height?: number | string
  resizeMode?: 'contain' | 'cover' | 'stretch' | 'repeat' | 'center'
}

const Logo = ({ width = 42, height = 24, resizeMode = 'contain' }: IProps) => {
  return (
    <View style={{ width, height }}>
      <Image style={styles.logo} resizeMode={resizeMode} source={Assets.images.icons.logo} />
    </View>
  )
}

export default Logo

const styles = StyleSheet.create({
  logo: {
    width: '100%',
    height: '100%'
  }
})
