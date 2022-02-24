import { V2EX_INIT, V2EX_INIT_ERROR, StoreAction, IState } from '@src/actions/types'

const INITIAL_STATE = {
  v2ex: null
}

export default (state: IState.IV2exState, action: StoreAction) => {
  switch (action.type) {
    case V2EX_INIT:
      return { ...state, v2ex: action.payload }
    case V2EX_INIT_ERROR:
      return { ...state, errorMessage: action.payload.errorMessage }
    default:
      return state
  }
}
