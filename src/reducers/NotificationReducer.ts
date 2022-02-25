import { APP_NOTIFICATION_PULL, APP_NOTIFICATION_LATEST, APP_NOTIFICATION_REMOVE, Action, IState } from '@types'

const INITIAL_STATE: IState.NotificationState = {
  refreshing: false
}

export default (state: IState.NotificationState, action: Action): IState.NotificationState => {
  const _merge = { ...INITIAL_STATE, ...state }
  switch (action.type) {
    case APP_NOTIFICATION_PULL:
      return { ..._merge, list: undefined, refreshing: true }
    case APP_NOTIFICATION_LATEST:
      return { ..._merge, list: action.payload, refreshing: false }
    case APP_NOTIFICATION_REMOVE:
      return { ..._merge, list: action.payload, refreshing: false }
    default:
      return state
  }
}
