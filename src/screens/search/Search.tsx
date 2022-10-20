import React, { useState } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, ViewStyle, TextStyle } from 'react-native'

import { translate } from '@src/i18n'
import { useTheme, SylCommon } from '@src/theme'
import { IState, ITheme, AppObject } from '@src/types'
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

/**
 * @description styles Searchs
 */
const styles = {
  container: (theme: ITheme): ViewStyle => ({
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
