/**
 * Created by Leon<silenceace@gmail.com> at 2022-02-21 21:25:15.
 * Last modified at 2022-02-28 21:31:48
 */

import i18n from 'i18n-js'
export function translate(key: string, options?: i18n.TranslateOptions) {
  return key ? i18n.t(key, options) : key
}
