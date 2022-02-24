import React from 'react'
import { ITheme } from './types'
import theme from './theme'

const ThemeContext = React.createContext<ITheme>(theme)

export default ThemeContext
