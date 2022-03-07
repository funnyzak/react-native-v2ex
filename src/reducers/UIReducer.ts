import {
  APP_AUTH_SUCCESS,
  FEEDBACKING,
  FEEDBACK_DONE,
  Action,
  IState,
  APP_AUTH_LOADING,
  APP_AUTH_ERROR,
  APP_LOGOUT,
  APP_HOME_ERROR,
  APP_HOME_LOAD_MORE_TOPICS,
  APP_HOME_SWITCH_NODE,
  APP_HOME_REFRESH,
  APP_HOME_SUCCESS
} from '../types'
import { translate } from '@src/i18n'
import { HOME_NODES } from '@src/navigation'

const INITIAL_STATE: IState.UIState = {
  login: {
    tokenGeneratedLink: 'https://v2ex.com/settings/tokens',

    error: null,
    success: null,
    loading: false
  },
  home: {
    error: null,
    success: null,
    refreshing: false,
    currentTab: HOME_NODES[0]
  },
  feedback: {
    processing: false
  }
}

export default (state: IState.UIState = INITIAL_STATE, action: Action): IState.UIState => {
  switch (action.type) {
    case APP_LOGOUT:
      return { ...state }
    case APP_AUTH_LOADING:
      return { ...state, login: { ...state.login, loading: true, error: '', success: '' } }
    case APP_AUTH_ERROR:
      return { ...state, login: { ...state.login, loading: false, error: action.payload, success: '' } }
    case APP_AUTH_SUCCESS:
      return { ...state, login: { ...state.login, loading: false, error: '', success: translate('tips.authSuccess') } }
    case APP_HOME_SWITCH_NODE:
      return { ...state, home: { ...state.home, error: '', success: '', currentTab: action.payload, list: undefined, refreshing: true } }
    case APP_HOME_ERROR:
      return { ...state, home: { ...state.home, error: action.payload, success: '', refreshing: false } }
    case APP_HOME_LOAD_MORE_TOPICS:
      return { ...state, home: { ...state.home, error: '', success: '', refreshing: true } }
    case APP_HOME_REFRESH:
      return { ...state, home: { ...state.home, error: '', success: '', list: undefined, refreshing: true } }
    case APP_HOME_SUCCESS:
      return { ...state, home: { ...state.home, error: '', success: '', list: (state.home.list || []).concat(action.payload), refreshing: false } }
    case FEEDBACKING:
      return { ...state, feedback: { processing: true } }
    case FEEDBACK_DONE:
      return { ...state, feedback: { processing: false } }
    default:
      return state
  }
}
