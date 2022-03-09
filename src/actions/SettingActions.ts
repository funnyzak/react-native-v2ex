import { Dispatch } from 'redux'

import { APP_SETTING_LOCALES, APP_SETTING_THEME, ThemeType, LanguageTagType } from '../types'
import { changeLocale } from '@src/i18n'

export const setLocales = (languageTag: LanguageTagType) => {
  changeLocale(languageTag)

  return async (dispatch: Dispatch) => {
    dispatch({
      type: APP_SETTING_LOCALES,
      payload: languageTag
    })
  }
}

export const setTheme = (theme: ThemeType) => ({
  type: APP_SETTING_THEME,
  payload: theme
})
