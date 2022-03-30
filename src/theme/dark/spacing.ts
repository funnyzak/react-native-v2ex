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
import lightSpacing from '../light/spacing'

const spacing: IThemeSpacing = {
  /**
   * base on light theme spacing
   */
  ...lightSpacing
}

export default spacing
