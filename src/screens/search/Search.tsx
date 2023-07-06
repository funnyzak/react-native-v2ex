/**
 * Created by Leon<silenceace@gmail.com> at 2022-04-01 17:54:02.
 * Last modified at 2022-10-20 18:07:33
 */

import React, { useState } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, ViewStyle, TextStyle } from 'react-native'
import { translate } from '@src/i18n'
import { useTheme, SylCommon } from '@src/theme'
import { IState, Theme, AppObject } from '@src/types'
import * as CompS from '../components'
import { Text, Spinner } from '@src/components'
import { SearchScreenProps as ScreenProps } from '@src/navigation/routes'
import { RootState } from '@src/store'
const Search = ({ route, navigation, loading }: ScreenProps) => {
  const { theme } = useTheme()
  return (
    <View style={SylCommon.Layout.fill}>
      <Text>Hello, Search.</Text>
    </View>
  )
}
const styles = {
  container: (theme: Theme): ViewStyle => ({
    flex: 1
  })
}
/**
 * default props
 */
Search.defaultProps = {
  loading: false
}
const mapStateToProps = (state: RootState) => {
  return { loading: state.member }
}
export default connect(mapStateToProps)(Search)
