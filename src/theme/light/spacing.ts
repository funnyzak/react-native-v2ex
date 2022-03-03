/**
 * NOTE:
 *
 * Spacing should be consistent and whitespace thought of as a first class technique up
 * there with color and typefaces.
 *
 * To scale or shrink overall spacing, change @param baseSpacing value.
 *
 * Feel free to delete this block.
 */
import { IThemeSpacing } from '../types'

const baseSpacing = 10

const spacing: IThemeSpacing = {
  tiny: baseSpacing * 0.4,
  small: baseSpacing * 0.8,
  medium: baseSpacing * 1.2,
  large: baseSpacing * 1.6,
  extraLarge: baseSpacing * 2.4
}

export default spacing
