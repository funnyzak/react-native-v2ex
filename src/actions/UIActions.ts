import { APP_LOCALES } from './types'

export const setLocales = (languageTag: string) => ({
  type: APP_LOCALES,
  payload: { languageTag }
})
