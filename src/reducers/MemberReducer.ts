import { Action, IState, APP_AUTH, MEMBER_PROFILE, APP_LOGOUT } from '../types'
const INITIAL_STATE: IState.MemberState = {
  loginState: {
    logined: false
  },
  refreshing: false
}

export default (state: IState.MemberState = INITIAL_STATE, action: Action): IState.MemberState => {
  switch (action.type) {
    case APP_AUTH:
      return { ...state, token: action.payload }
    case APP_LOGOUT:
      return { ...state, token: undefined }
    case MEMBER_PROFILE:
      return { ...state, profile: action.payload }
    default:
      return state
  }
}
