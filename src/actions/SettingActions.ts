import { APP_SETTING_LOCALES, APP_SETTING_THEME } from '../types'
import { ThemeType } from '@src/theme/themes'

export const setLocales = (languageTag: string) => ({
  type: APP_SETTING_LOCALES,
  payload: { languageTag }
})

export const setTheme = (theme: ThemeType) => ({
  type: APP_SETTING_THEME,
  payload: { theme }
})
