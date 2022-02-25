import { APP_SETTING_LOCALES } from '@types'

export const setLocales = (languageTag: string) => ({
  type: APP_SETTING_LOCALES,
  payload: { languageTag }
})
