import { IThemeColor } from '../types'

const colors: IThemeColor = {
  /**
   * ========================= V2EX Logo color =========================
   */
  v2exLight: '#FBFBFB',
  v2exDark: '#222223',

  /**
   * ========================= Primary color : (Brand color) =========================
   * primaryDark: color for the status bar and for dark tint
   * primary: to be used as a background color for appbar(toolbar)
   * appBarTintColor: to be used for appbar title text, appbar icons color and for back button
   *
   * Example: If primary color is dark, make appbarTintColor light
   */
  primaryDark: '#000',
  primary: '#FFF',

  tabBarBackground: '#000',
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
   * A helper for making something see-thru. Use sparingly as many layers of transparency
   * can cause older AndroiddisabledDark devices to slow down due to the excessive compositing required
   * by their under-powered GPUs.
   */
  transparent: 'transparent',

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
  captionText: '#A6A6A6',

  /**
   * Success messages and icons.
   */
  success: '#52c41a',

  /**
   * Error messages and icons.
   */
  error: '#ff190c',

  /**
   * Warning messages and icons.
   */
  warning: '#E6A23C',

  /**
   * Info messages and icons.
   */
  info: '#4F4D4D',

  black: '#000000',
  white: '#ffffff',
  lightGrey: '#F5F6FA'
}

export default colors
