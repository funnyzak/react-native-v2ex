import {
  APP_INIT,
  APP_INIT_ERROR,
  APP_SITE_INFO,
  APP_LOGOUT,
  APP_LATEST_VERSION,
  APP_SITE_STAT,
  Action,
  IState,
  APP_ALL_NODE_INFO
} from '../types'
import { aboutUs } from '@src/config/v2ex'

const INITIAL_STATE: IState.AppState = {
  aboutUs,
  version: {
    version: '1.0.0'
  }
}

export default (state: IState.AppState = INITIAL_STATE, action: Action): IState.AppState => {
  switch (action.type) {
    case APP_INIT:
      return { ...state, ...action.payload }
    case APP_LATEST_VERSION:
      return { ...state, latestVersion: action.payload }
    case APP_SITE_INFO:
      return { ...state, siteInfo: action.payload }
    case APP_SITE_STAT:
      return { ...state, siteStat: action.payload }
    case APP_ALL_NODE_INFO:
      return { ...state, allNode: action.payload }
    case APP_INIT_ERROR:
      return { ...state, errorMessage: action.payload }
    case APP_LOGOUT:
      return { ...INITIAL_STATE }
    default:
      return state
  }
}
