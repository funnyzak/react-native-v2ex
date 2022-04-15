import React, { useState } from 'react'
import { connect } from 'react-redux'
import { View, ViewStyle, TouchableOpacity } from 'react-native'

import * as Actions from '@src/actions'
import { translate } from '@src/i18n'
import { useTheme, SylCommon } from '@src/theme'
import { IState, ITheme, V2exObject } from '@src/types'
import * as CompS from '../components'
import { Text, Spinner, Placeholder } from '@src/components'
import { CacheSettingScreenProps as ScreenProps, ROUTES } from '@src/navigation'

const CacheSetting = ({ route, navigation, loading }: ScreenProps) => {
  const { theme } = useTheme()
  return (
    <View style={[SylCommon.Layout.fill, SylCommon.View.background(theme)]}>
      <Placeholder
        displayType="icon"
        icon={theme.assets.images.icons.placeholder.construction}
        placeholderText={translate(`router.${ROUTES.CacheSetting}`) + translate('label.underConstruction')}
      />
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

export default connect(mapStateToProps)(CacheSetting)
