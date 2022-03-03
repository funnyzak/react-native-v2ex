import { StatusBar, StyleSheet, View } from 'react-native'
import React from 'react'

import { Logo } from '../atoms'
import { theme } from '@src/theme'

const Header = ({ headerRight }: { headerRight: React.ReactNode }) => {
  return (
    <View style={styles.header}>
      <StatusBar backgroundColor="#fff" barStyle={'dark-content'} />
      <Logo width={42 * 1.5} height={24 * 1.5} />
      <View style={styles.headerRight}>{headerRight}</View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  header: {
    backgroundColor: theme.colors.white,
    paddingHorizontal: 16,
    paddingVertical: 8
  },
  headerRight: {
    position: 'absolute',
    right: 16,
    top: 4
  }
})
