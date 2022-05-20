import { Text, Placeholder, useToast } from '@src/components'
import { translate } from '@src/i18n'
import { NotificationsScreenProps as ScreenProps, ROUTES } from '@src/navigation/routes'
import { RootState } from '@src/store'
import { SylCommon, useTheme } from '@src/theme'
import { V2exObject } from '@src/types'
import React, { useState } from 'react'
import { View, ViewStyle } from 'react-native'
import { connect } from 'react-redux'

const Notification = ({ route, navigation }: ScreenProps) => {
  const { theme } = useTheme()
  const [refreshing, setRefreshing] = useState<boolean>(false)
  const [list, setList] = useState<V2exObject.Notification[] | undefined>(undefined)
  const { showMessage } = useToast()

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
 * default props
 */
Notification.defaultProps = {
  loading: false
}

const mapStateToProps = ({ member: { profile } }: RootState) => {
  return { profile }
}

export default connect(mapStateToProps)(Notification)
