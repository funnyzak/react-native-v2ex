import lightColors from '../light/colors'
import { IThemeColor } from '../types'

const colors: IThemeColor = {
  /**
   * base on light theme colors
   */
  ...lightColors,

  primaryDark: '#161921',

  headerBackground: '#161921',

  tabBarBackground: '#161921',
  tabBarIconInactive: '#898B8B',
  tabBarIconActive: '#025DC9',
  appbarTint: '#fff',

  tabShadowColor: '#000000',
  tabActiveTintColor: '#025DC9',
  tabInactiveTintColor: '#898B8B',

  /**
   * ========================= Secondary color =========================
   * secondaryLight: to be used for hover state
   * secondary: to be used as default button, checkbox, spinner, radio button and other component color
   * secondaryDark: to be used for active state
   */
  secondaryLight: '#417BBF',
  secondary: '#0477FF',
  secondaryDark: '#0667DA',

  /**
   * disabled: To be used for disabled component background
   * disabledDark: To be used for disabled component border and text color
   */
  disabled: '#9A9A9A',
  disabledDark: '#8F8F8F',

  /**
   * The screen background.
   */
  background: '#0D1014',

  /**
   * To be used as a default background for all components, like Card, CardSection, List etc
   */
  surface: '#161921',

  /**
   * Use it for card border
   */
  border: '#222222',

  /**
   * The default color of text in many components.
   * To be used for heading, subheading, label text
   */
  titleText: '#FFFFFF',

  /**
   * To be used for normal text like paragraph
   */
  bodyText: '#FBFBFB',

  /**
   * To be used for hint text component
   */
  captionText: '#A6A6A6'
}

export default colors
