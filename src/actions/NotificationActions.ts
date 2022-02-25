/**
 * Created by leon<silenceace@gmail.com> on 22/2/22.
 */
import { NOTIFICATION_LATEST, NOTIFICATION_REMOVE } from '@types'

export const notificationList = () => async (dispatch: any) => {
  dispatch({
    type: NOTIFICATION_LATEST,
    payload: {}
  })
}

export const notificationRemove = () => async (dispatch: any) => {
  dispatch({
    type: NOTIFICATION_REMOVE,
    payload: {}
  })
}
