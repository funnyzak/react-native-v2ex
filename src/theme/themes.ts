import { ITheme } from './types'

import light_colors from './light/colors'
import light_spacing from './light/spacing'
import light_dimens from './light/dimens'
import light_typography from './light/typography'
import light_assets from './light/assets'

import dark_colors from './dark/colors'
import dark_spacing from './dark/spacing'
import dark_dimens from './dark/dimens'
import dark_typography from './dark/typography'
import dark_assets from './dark/assets'

export const light: ITheme = {
  name: 'light',
  colors: light_colors,
  spacing: light_spacing,
  dimens: light_dimens,
  typography: light_typography,
  assets: light_assets
}

export const dark: ITheme = {
  name: 'dark',
  colors: dark_colors,
  spacing: dark_spacing,
  dimens: dark_dimens,
  typography: dark_typography,
  assets: dark_assets
}

export const auto = undefined

const themes = {
  auto,
  light,
  dark
} as const

/**
 * @description 主题类型
 */
export type ThemeType = keyof typeof themes

export default themes
