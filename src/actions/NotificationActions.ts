/**
 * Created by Leon<silenceace@gmail.com> at 2022-02-22 19:58:57.
 * Last modified at 2022-02-28 13:33:51
 */

import { APP_NOTIFICATION_LATEST, APP_NOTIFICATION_REMOVE } from './types'
export const notificationList = () => async (dispatch: any) => {
  dispatch({
    type: APP_NOTIFICATION_LATEST,
    payload: {}
  })
}
export const notificationRemove = () => async (dispatch: any) => {
  dispatch({
    type: APP_NOTIFICATION_REMOVE,
    payload: {}
  })
}
