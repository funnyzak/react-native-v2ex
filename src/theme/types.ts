/**
 * Created by leon<silenceace@gmail.com> on 22/2/21.
 */

import { TextStyle } from 'react-native'
export interface IThemeColor {
  primaryDark: string
  primary: string
  tabBarBackground: string
  tabBarIconInactive: string
  tabBarIconActive: string
  appbarTint: string
  secondaryLight: string
  secondary: string
  secondaryDark: string
  disabled: string
  disabledDark: string
  transparent: string
  background: string
  surface: string
  border: string
  success: string
  error: string
  titleText: string
  bodyText: string
  captionText: string
  black: string
  white: string
  modalBackground: string
}

export interface IThemeDimen {
  /**
   * App level constants
   */
  WINDOW_WIDTH: number
  WINDOW_HEIGHT: number
  headerHeight: number
  headerButtonSize: number
  badgeSize: number
  borderRadius: number
  defaultButtonWidth: number
  defaultButtonHeight: number
  defaultInputBoxHeight: number
  topicListItemInBetweenSpace: number

  /**
   * avatar witth
   */
  avatarSize: number
}

export interface IThemeSpacing {
  tiny: number
  small: number
  medium: number
  large: number
  extraLarge: number
}

export interface IThemeTypography {
  /**
   * Title is reserved for the title of a screen(Toolbar)
   * and the titles of Modal dialogs.
   */
  titleText: TextStyle
  titleTextSemiBold: TextStyle
  /**
   * Use the Heading style for card titles.
   */
  headingText: TextStyle
  headingTextBold: TextStyle
  /**
   * Use the Subheading style to denote new sections within cards.
   */
  subheadingText: TextStyle
  subheadingTextBold: TextStyle
  /**
   * The Body text style is used widely throughout the UI.
   * Any text that isn’t a title, heading, subheading, label
   * or caption would generally use the Body style.
   */
  bodyText: TextStyle
  bodyTextBold: TextStyle
  /**
   * Use labels with form field and input elements to
   * signify the element’s function to the user.
   */
  labelText: TextStyle
  labelTextBold: TextStyle
  /**
   * Use the Caption style for help/hint text.
   * It’s used with some form fields which require a description,
   * and can also be used stand-alone within a card when necessary.
   */
  captionText: TextStyle
  captionTextBold: TextStyle
  /**
   * Use this style to change <Input /> element text style
   */
  inputText: TextStyle
}

export interface IThemeAssets {
  images: {
    icons: {
      logo: string
      icon: string
      home: string
      homeInactive: string
      discovery: string
      discoveryInactive: string
      notification: string
      notificationInactive: string
      profile: string
      profileInactive: string
      moreCycleGrey: string
      timeCycleGrey: string
      heartGrey: string
      heartRed: string
      gold: string
      silver: string
      bronze: string
      arrowRightGrey: string
      send: string
      starOutline: string
      starFilled: string
      chatGrey: string
    }
  }
}

export interface ITheme {
  name: string
  colors: IThemeColor
  spacing: IThemeSpacing
  dimens: IThemeDimen
  typography: IThemeTypography
  assets: IThemeAssets
}
