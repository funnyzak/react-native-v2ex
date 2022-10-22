import { IThemeColor } from '../types'

const colors: IThemeColor = {
  /**
   * ========================= V2EX Logo color =========================
   */
  AppLight: '#FBFBFB',
  AppDark: '#222223',

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

  headerBackground: '#FFF',

  tabBarBackground: '#FFFFFF',
  tabBarIconActive: '#025DC9',
  tabBarIconInactive: '#898B8B',
  appbarTint: '#43474A',

  tabShadowColor: '#666666',
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
  background: '#F6F6F6',

  /**
   * To be used as a default background for all components, like Card, CardSection, List etc
   */
  surface: '#FFFFFF',

  /**
   * Use it for card border
   */
  border: '#E9E9E9',

  /**
   * The default color of text in many components.
   * To be used for heading, subheading, label text
   */
  titleText: '#43474A',

  /**
   * To be used for normal text like paragraph
   */
  bodyText: '#5A5F63',

  /**
   * To be used for hint text component
   */
  captionText: '#A4A4A4',

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

  grey: '#999',
  lightGrey: '#F5F6FA',
  darkGrey: '#666'
}

export default colors
