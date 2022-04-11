import i18n, { LanguageTagType, translationTitle } from './i18n'
export * from './translate'

export { i18n, translationTitle }

export type { LanguageTagType }

export function changeLocale(language: LanguageTagType) {
  i18n.locale = language === 'auto' ? i18n.currentLocale() : language
  console.log('changeLocale', language)
}
