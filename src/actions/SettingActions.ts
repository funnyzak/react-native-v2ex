import { APP_SETTING_LOCALES, APP_SETTING_THEME } from '../types'

export const setLocales = (languageTag: string) => ({
  type: APP_SETTING_LOCALES,
  payload: { languageTag }
})

export const setTheme = (theme: string) => ({
  type: APP_SETTING_THEME,
  payload: { theme }
})
