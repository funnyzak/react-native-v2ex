import { APP_SETTING_LOCALES, APP_SETTING_THEME, Action, IState } from '../types'

const INITIAL_STATE: IState.SettingState = {
  languageTag: 'zh',
  theme: 'light'
}

export default (state: IState.SettingState = INITIAL_STATE, action: Action): IState.SettingState => {
  switch (action.type) {
    case APP_SETTING_LOCALES:
      return { ...state, languageTag: action.payload }
    case APP_SETTING_THEME:
      return { ...state, theme: action.payload }
    default:
      return state
  }
}
