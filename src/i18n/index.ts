import i18n, { LanguageTagType } from './i18n'
export * from './translate'

export { i18n }

export type { LanguageTagType }

export function changeLocale(language: LanguageTagType) {
  i18n.locale = language

  console.log('changeLocale', language)
}
