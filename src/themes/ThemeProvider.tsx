import React from 'react'
import PropTypes from 'prop-types'
import { ITheme } from './types'
import ThemeContext from './ThemeContext'

type Props = {
  theme: ITheme
  children?: JSX.Element
}

const ThemeProvider = ({ theme, children }: Props) => <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>

ThemeProvider.propTypes = {
  theme: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired
}

ThemeProvider.defaultProps = {}

export default ThemeProvider
