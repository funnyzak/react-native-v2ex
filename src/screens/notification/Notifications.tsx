/**
 * Created by Leon<silenceace@gmail.com> at 2022-04-01 17:54:02.
 * Last modified at 2022-10-20 18:07:33
 */

import { NotificationsScreenProps as ScreenProps } from '@src/navigation/routes'
import { AppObject } from '@src/types'
import React from 'react'
import { connect } from 'react-redux'
import { NotificationList } from '../components'
const Notification = ({
  route,
  navigation,
  profile
}: ScreenProps & {
  profile?: AppObject.Member
}) => {
  return <NotificationList containerStyle={[]} />
}
export default connect()(Notification)
