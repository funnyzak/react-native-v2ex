import React, { useState } from 'react'
import PropTypes from 'prop-types'
import ThemeContext from './ThemeContext'
import themes, { ThemeType } from './themes'
import { store } from '@src/store'

type Props = {
  children?: JSX.Element
}

const ThemeProvider = ({ children }: Props) => {
  const [themeName, setTheme] = useState<ThemeType>((store.getState() as any).setting.theme)

  return <ThemeContext.Provider value={{ theme: themes[themeName], themeName, setTheme }}>{children}</ThemeContext.Provider>
}

ThemeProvider.propTypes = {
  children: PropTypes.element.isRequired
}

ThemeProvider.defaultProps = {}

export default ThemeProvider
