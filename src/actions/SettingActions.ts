import { APP_SETTING_LOCALES, APP_SETTING_THEME, ThemeType, LanguageTagType } from '../types'

export const setLocales = (languageTag: LanguageTagType) => ({
  type: APP_SETTING_LOCALES,
  payload: { languageTag }
})

export const setTheme = (theme: ThemeType) => ({
  type: APP_SETTING_THEME,
  payload: { theme }
})
