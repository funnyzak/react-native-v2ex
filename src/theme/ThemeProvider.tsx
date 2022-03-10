import React, { useState, useMemo } from 'react'
import ThemeContext from './ThemeContext'
import themes, { ThemeType } from './themes'
import { store } from '@src/store'

type Props = {
  children?: JSX.Element
}

const isDayTime = () => {
  const hours = new Date().getHours()
  return hours > 6 && hours < 20
}

const ThemeProvider = ({ children }: Props) => {
  const [themeName, resetTheme] = useState<ThemeType>((store.getState() as any).setting.theme)
  const theme = useMemo(() => (themeName === 'auto' ? themes[isDayTime() ? 'light' : 'dark'] : themes[themeName]), [themeName])

  return <ThemeContext.Provider value={{ theme: theme, themeName, resetTheme }}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
