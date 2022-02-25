import { SETTING_LOCALES } from '@types'

export const setLocales = (languageTag: string) => ({
  type: SETTING_LOCALES,
  payload: { languageTag }
})
