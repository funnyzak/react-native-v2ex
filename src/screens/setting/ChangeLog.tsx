/**
 * Created by Leon<silenceace@gmail.com> at 2022-03-30 22:08:54.
 * Last modified at 2022-10-20 18:07:33
 */

import React, { useState } from 'react'
import { connect } from 'react-redux'
import { View, ViewStyle, TouchableOpacity } from 'react-native'
import * as Actions from '@src/actions'
import { translate } from '@src/i18n'
import { useTheme, SylCommon } from '@src/theme'
import { IState, ITheme, AppObject } from '@src/types'
import * as CompS from '../components'
import { Text, Spinner, Placeholder } from '@src/components'
import { ChangeLogScreenProps as ScreenProps, ROUTES } from '@src/navigation'
const ChangeLog = ({ route, navigation, loading }: ScreenProps) => {
  const { theme } = useTheme()
  return (
    <Placeholder
      displayType="icon"
      icon={theme.assets.images.icons.placeholder.construction}
      placeholderText={translate(`router.${ROUTES.ChangeLog}`) + translate('label.underConstruction')}
    />
  )
}
const styles = {
  container: (theme: ITheme): ViewStyle => ({
    flex: 1
  })
}
const mapStateToProps = ({ ui: { login } }: { ui: IState.UIState }) => {
  const { error, success, loading } = login
  return { error, success, loading }
}
export default connect(mapStateToProps)(ChangeLog)
