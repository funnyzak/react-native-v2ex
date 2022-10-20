import { NotificationsScreenProps as ScreenProps } from '@src/navigation/routes'
import { APPDataObject } from '@src/types'
import React from 'react'
import { connect } from 'react-redux'
import { NotificationList } from '../components'

const Notification = ({
  route,
  navigation,
  profile
}: ScreenProps & {
  profile?: APPDataObject.Member
}) => {
  return <NotificationList containerStyle={[]} />
}

export default connect()(Notification)
