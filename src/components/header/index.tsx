import Colors from '@src/theme/colors'
import React from 'react'
import { StatusBar, StyleSheet, View } from 'react-native'
import { Logo } from '../atoms'

interface IProps {
  headerRight?: React.ReactNode
}

const Header = ({ headerRight }: IProps) => {
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
    backgroundColor: Colors.white,
    paddingHorizontal: 16,
    paddingVertical: 8
  },
  headerRight: {
    position: 'absolute',
    right: 16,
    top: 4
  }
})
