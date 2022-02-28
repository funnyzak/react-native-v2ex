/**
 * Created by leon<silenceace@gmail.com> on 22/2/22.
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
