/**
 * Created by Leon<silenceace@gmail.com> at 2022-02-24 10:13:44.
 * Last modified at 2022-03-09 18:31:19
 */

import themes, { ThemeType, light, dark } from './themes'
import ThemeContext, { useTheme } from './ThemeContext'
import ThemeProvider from './ThemeProvider'
export type { ThemeType }
export { ThemeProvider, ThemeContext, themes, useTheme }
export * from './types'
export * as SylCommon from './common'

export { light, dark }
