import { APP_LOCALES } from '../actions/types'

const INITIAL_STATE = {
  languageTag: 'zh'
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case APP_LOCALES:
      return { ...state, languageTag: action.payload }
    default:
      return state
  }
}
