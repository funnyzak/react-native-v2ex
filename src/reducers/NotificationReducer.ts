import { APP_NOTIFICATION_PULL, APP_NOTIFICATION_LATEST, APP_NOTIFICATION_REMOVE, Action, IState } from '../types'

const INITIAL_STATE: IState.NotificationState = {
  refreshing: false
}

export default (state: IState.NotificationState = INITIAL_STATE, action: Action): IState.NotificationState => {
  switch (action.type) {
    case APP_NOTIFICATION_PULL:
      return { ...state, list: undefined, refreshing: true }
    case APP_NOTIFICATION_LATEST:
      return { ...state, list: action.payload, refreshing: false }
    case APP_NOTIFICATION_REMOVE:
      return { ...state, list: action.payload, refreshing: false }
    default:
      return state
  }
}
