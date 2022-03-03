import React, { useContext } from 'react'
import { ITheme } from './types'
import themes, { ThemeType } from './themes'

export interface ThemeContextProps {
  theme: ITheme
  themeName: ThemeType
  setTheme: (theme: ThemeType) => void
}

const ThemeContext = React.createContext<ThemeContextProps>({
  theme: themes.light,
  themeName: 'light',
  setTheme: () => {}
})

export default ThemeContext

export const useTheme = () => useContext(ThemeContext)
