import { Action, IState, MEMBER_TOKEN, MEMBER_PROFILE } from '../types'
const INITIAL_STATE: IState.MemberState = {
  loginState: {
    logined: false
  },
  refreshing: false
}

export default (state: IState.MemberState = INITIAL_STATE, action: Action): IState.MemberState => {
  switch (action.type) {
    case MEMBER_TOKEN:
      return { ...state, token: action.payload }
    case MEMBER_PROFILE:
      return { ...state, profile: action.payload }
    default:
      return state
  }
}
