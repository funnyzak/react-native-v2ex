import { APP_INIT, APP_INIT_ERROR, APP_SITE_INFO, APP_LATEST_VERSION, APP_SITE_STAT, Action, IState } from '@types'
import { aboutUs } from '@src/config/v2ex'

const INITIAL_STATE: IState.AppState = {
  aboutUs,
  version: {
    version: '1.0.0'
  }
}

export default (state: IState.AppState, action: Action): IState.AppState => {
  switch (action.type) {
    case APP_INIT:
      return { ...INITIAL_STATE, ...state, ...action.payload }
    case APP_LATEST_VERSION:
      return { ...INITIAL_STATE, ...state, latestVersion: action.payload }
    case APP_SITE_INFO:
      return { ...INITIAL_STATE, ...state, siteInfo: action.payload }
    case APP_SITE_STAT:
      return { ...INITIAL_STATE, ...state, siteStat: action.payload }
    case APP_INIT_ERROR:
      return { ...INITIAL_STATE, ...state, errorMessage: action.payload }
    default:
      return state
  }
}
