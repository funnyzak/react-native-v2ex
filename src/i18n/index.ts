import i18n from './i18n'
export * from './translate'

export type LanguageTagType = 'en' | 'zh'

export function changeLocale(language: LanguageTagType) {
  i18n.locale = language
}
