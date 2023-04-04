/**
 * Created by Leon<silenceace@gmail.com> at 2022-03-03 21:32:14.
 * Last modified at 2022-03-03 21:32:14
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
