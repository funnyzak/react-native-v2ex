/**
 * Created by Leon<silenceace@gmail.com> at 2022-02-25 15:45:37.
 * Last modified at 2022-03-10 00:13:59
 */

import { LanguageTagType, APP_SETTING_LOCALES, APP_SETTING_THEME, Action, IState } from '../types'
import { i18n } from '@src/i18n'
const INITIAL_STATE: IState.SettingState = {
  languageTag: i18n.currentLocale() as LanguageTagType,
  openLinkInApp: true,
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
