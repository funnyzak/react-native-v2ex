import {
  APP_AUTH_SUCCESS,
  FEEDBACKING,
  FEEDBACK_DONE,
  Action,
  IState,
  APP_AUTH_RESET,
  APP_AUTH_LOADING,
  APP_AUTH_ERROR,
  APP_LOGOUT
} from '../types'
import { translate } from '@src/i18n'

const INITIAL_STATE: IState.UIState = {
  login: {
    tokenGeneratedLink: 'https://v2ex.com/settings/tokens',

    error: null,
    success: null,
    loading: false
  },
  feedback: {
    processing: false
  }
}

export default (state: IState.UIState = INITIAL_STATE, action: Action): IState.UIState => {
  switch (action.type) {
    case APP_AUTH_RESET:
      return { ...state, login: { ...state.login, loading: false, error: '', success: '' } }
    case APP_AUTH_LOADING:
      return { ...state, login: { ...state.login, loading: true, error: '', success: '' } }
    case APP_AUTH_ERROR:
      return { ...state, login: { ...state.login, loading: false, error: action.payload, success: '' } }
    case APP_AUTH_SUCCESS:
      return { ...state, login: { ...state.login, loading: false, error: '', success: translate('tips.authSuccess') } }
    case APP_LOGOUT:
      return { ...state, login: { ...state.login, loading: false, error: '', success: '' } }
    case FEEDBACKING:
      return { ...state, feedback: { processing: true } }
    case FEEDBACK_DONE:
      return { ...state, feedback: { processing: false } }
    default:
      return state
  }
}
