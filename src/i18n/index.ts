/**
 * Created by Leon<silenceace@gmail.com> at 2022-02-21 21:25:15.
 * Last modified at 2022-04-11 20:06:11
 */

import i18n, { LanguageTagType, translationTitle } from './i18n'
export * from './translate'
export { i18n, translationTitle }
export type { LanguageTagType }
export function changeLocale(language: LanguageTagType) {
  i18n.locale = language === 'auto' ? i18n.currentLocale() : language
}

export function getLocale() {
  return i18n.locale
}
