import { IMemberState, V2EX_CURRNET_TOKEN, V2EX_CURRNET_PROFILE, StoreAction } from '../actions/types'

export default (state: IMemberState, action: StoreAction) => {
  switch (action.type) {
    case V2EX_CURRNET_TOKEN:
      return { ...state, token: action.payload }
    case V2EX_CURRNET_PROFILE:
      return { ...state, profile: action.payload }
    default:
      return state
  }
}
