/**
 * Created by leon<silenceace@gmail.com> on 22/2/21.
 */
export interface IThemeColor {
  primaryDark: string
  primary: string
  tabBarBackground: string
  tabBarIconInactive: string
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
}

export interface IThemeDimen {
  /**
   * App level constants
   */
  WINDOW_WIDTH: number
  WINDOW_HEIGHT: number
  headerButtonSize: number
  borderRadius: number
  defaultButtonWidth: number
  defaultButtonHeight: number
  defaultInputBoxHeight: number

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

export interface IThemeTypographyProps {
  fontFamily: string
  color: string
  fontSize: number
  fontStyle: 'normal' | 'italic' | undefined
  fontWeight: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | undefined
}

export interface IThemeTypography {
  /**
   * Title is reserved for the title of a screen(Toolbar)
   * and the titles of Modal dialogs.
   */
  titleText: IThemeTypographyProps
  titleTextSemiBold: IThemeTypographyProps
  /**
   * Use the Heading style for card titles.
   */
  headingText: IThemeTypographyProps
  headingTextBold: IThemeTypographyProps
  /**
   * Use the Subheading style to denote new sections within cards.
   */
  subheadingText: IThemeTypographyProps
  subheadingTextBold: IThemeTypographyProps
  /**
   * The Body text style is used widely throughout the UI.
   * Any text that isn’t a title, heading, subheading, label
   * or caption would generally use the Body style.
   */
  bodyText: IThemeTypographyProps
  bodyTextBold: IThemeTypographyProps
  /**
   * Use labels with form field and input elements to
   * signify the element’s function to the user.
   */
  labelText: IThemeTypographyProps
  labelTextBold: IThemeTypographyProps
  /**
   * Use the Caption style for help/hint text.
   * It’s used with some form fields which require a description,
   * and can also be used stand-alone within a card when necessary.
   */
  captionText: IThemeTypographyProps
  captionTextBold: IThemeTypographyProps
  /**
   * Use this style to change <Input /> element text style
   */
  inputText: IThemeTypographyProps
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
  colors: IThemeColor
  spacing: IThemeSpacing
  dimens: IThemeDimen
  typography: IThemeTypography
  assets: IThemeAssets
}
