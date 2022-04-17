import { Text, Placeholder } from '@src/components'
import { translate } from '@src/i18n'
import { NotificationsScreenProps as ScreenProps, ROUTES } from '@src/navigation/routes'
import { SylCommon, useTheme } from '@src/theme'
import { IState, ITheme } from '@src/types'
import React from 'react'
import { View, ViewStyle } from 'react-native'
import { connect } from 'react-redux'

const Notification = ({ route, navigation, loading }: ScreenProps) => {
  const { theme } = useTheme()
  return (
    <View style={[SylCommon.Layout.fill, SylCommon.View.background(theme)]}>
      <Placeholder
        displayType="icon"
        icon={theme.assets.images.icons.placeholder.construction}
        placeholderText={translate(`router.${ROUTES.Notifications}`) + translate('label.underConstruction')}
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

/**
 * default props
 */
Notification.defaultProps = {
  loading: false
}

const mapStateToProps = ({ ui: { login } }: { ui: IState.UIState }) => {
  const { error, success, loading } = login
  return { error, success, loading }
}

export default connect(mapStateToProps)(Notification)
