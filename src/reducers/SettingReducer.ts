import { APP_SETTING_LOCALES, Action, IState } from '../types'

const INITIAL_STATE: IState.SettingState = {
  languageTag: 'zh'
}

export default (state: IState.SettingState = INITIAL_STATE, action: Action): IState.SettingState => {
  switch (action.type) {
    case APP_SETTING_LOCALES:
      return { ...state, languageTag: action.payload }
    default:
      return state
  }
}
