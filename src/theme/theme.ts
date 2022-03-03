import { ITheme } from './types'

import default_colors from './default/colors'
import default_spacing from './default/spacing'
import default_dimens from './default/dimens'
import default_typography from './default/typography'
import default_assets from './default/assets'

import dark_colors from './dark/colors'
import dark_spacing from './dark/spacing'
import dark_dimens from './dark/dimens'
import dark_typography from './dark/typography'
import dark_assets from './dark/assets'

export const defaultTheme: ITheme = {
  colors: default_colors,
  spacing: default_spacing,
  dimens: default_dimens,
  typography: default_typography,
  assets: default_assets
}

export const darkTheme: ITheme = {
  colors: dark_colors,
  spacing: dark_spacing,
  dimens: dark_dimens,
  typography: dark_typography,
  assets: dark_assets
}

export default defaultTheme
