/**
 * Created by Leon<silenceace@gmail.com> at 2022-02-24 10:13:44.
 * Last modified at 2022-03-10 09:46:27
 */

import React, { useContext } from 'react'
import { ITheme } from './types'
import themes, { ThemeType } from './themes'
export interface ThemeContextProps {
  theme: ITheme
  themeName: ThemeType
  resetTheme: (theme: ThemeType) => void
}
const ThemeContext = React.createContext<ThemeContextProps>({
  theme: themes.light,
  themeName: 'light',
  resetTheme: (themeName: string) => {}
})
export default ThemeContext
export const useTheme = () => useContext(ThemeContext)
