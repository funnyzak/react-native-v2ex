import React from 'react'
import { ITheme } from './types'
import theme from './themes'

const ThemeContext = React.createContext<ITheme>(theme.light)

export default ThemeContext
