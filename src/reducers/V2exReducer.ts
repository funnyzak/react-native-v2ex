import { IV2exState, V2EX_INIT, V2EX_INIT_ERROR, StoreAction } from '../actions/types'

const INITIAL_STATE = {
  v2ex: null
}

export default (state: IV2exState = INITIAL_STATE, action: StoreAction) => {
  switch (action.type) {
    case V2EX_INIT:
      return { ...state, v2ex: action.payload }
    case V2EX_INIT_ERROR:
      return { ...state, errorMessage: action.payload.errorMessage }
    default:
      return state
  }
}
