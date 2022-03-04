import React, { useState } from 'react'
import { StyleSheet, View, ViewStyle, TextStyle } from 'react-native'

import { connect } from 'react-redux'
import { IState, ITheme, V2exObject } from '@src/types'
import { TopicTabList } from '../components'
import { HomeScreenProps as ScreenProps, HOME_NODES, NODE_TAB_TYPE } from '@src/navigation'

const Home = ({ route, navigation, theme, loading }: ScreenProps) => {
  return (
    <View>
      <TopicTabList />
    </View>
  )
}

/**
 * @description styles settings
 */
const styles = {
  container: (theme: ITheme): ViewStyle => ({
    flex: 1
  })
}

/**
 * default props
 */
Home.defaultProps = {
  loading: false
}

const mapStateToProps = ({ ui: { login } }: { ui: IState.UIState }) => {
  const { error, success, loading } = login
  return { error, success, loading }
}

export default connect(mapStateToProps)(Home)
