import { V2EX_LOCALES, StoreAction } from '../actions/types'

const INITIAL_STATE = {
  languageTag: 'zh'
}

export default (state = INITIAL_STATE, action: StoreAction) => {
  switch (action.type) {
    case V2EX_LOCALES:
      return { ...state, languageTag: action.payload }
    default:
      return state
  }
}
