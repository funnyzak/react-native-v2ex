import React, { useState } from 'react'
import { connect } from 'react-redux'
import { View, ViewStyle, TouchableOpacity } from 'react-native'

import * as Actions from '@src/actions'
import { translate } from '@src/i18n'
import { useTheme, SylCommon } from '@src/theme'
import { IState, ITheme, AppObject } from '@src/types'
import * as CompS from '../components'
import { Text, Spinner } from '@src/components'
import { PrivacyPolicyScreenProps as ScreenProps } from '@src/navigation/routes'

const Privacy = ({ route, navigation, loading }: ScreenProps) => {
  const { theme } = useTheme()
  return (
    <View style={SylCommon.Layout.fill}>
      <Text>Hello, Privacy.</Text>
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

const mapStateToProps = ({ ui: { login } }: { ui: IState.UIState }) => {
  const { error, success, loading } = login
  return { error, success, loading }
}

export default connect(mapStateToProps)(Privacy)
