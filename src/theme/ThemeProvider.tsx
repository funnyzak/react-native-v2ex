/**
 * Created by Leon<silenceace@gmail.com> at 2022-02-24 10:13:44.
 * Last modified at 2022-09-25 16:13:58
 */

import { store } from '@src/store'
import React, { useMemo, useState } from 'react'
import { useColorScheme } from 'react-native'
import ThemeContext from './ThemeContext'
import themes, { ThemeType } from './themes'
type Props = {
  children?: JSX.Element
}

const ThemeProvider = ({ children }: Props) => {
  const [themeName, resetTheme] = useState<ThemeType>((store.getState() as any).setting.theme)
  const colorScheme = useColorScheme()

  const theme = useMemo(
    () => (themeName === 'auto' ? themes[colorScheme !== 'dark' ? 'light' : 'dark'] : themes[themeName]),
    [themeName]
  )
  return <ThemeContext.Provider value={{ theme: theme, themeName, resetTheme }}>{children}</ThemeContext.Provider>
}
export default ThemeProvider
