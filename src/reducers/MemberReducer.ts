import { Action, IState, MEMBER_TOKEN, MEMBER_PROFILE } from '@types'

const INIT_STATE: IState.MemberState = {
  loginState: {
    logined: false
  },
  refreshing: false
}

export default (state: IState.MemberState, action: Action): IState.MemberState => {
  switch (action.type) {
    case MEMBER_TOKEN:
      return { ...INIT_STATE, ...state, token: action.payload }
    case MEMBER_PROFILE:
      return { ...INIT_STATE, ...state, profile: action.payload }
    default:
      return state
  }
}
