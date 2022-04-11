import { Platform } from 'react-native'
import { IThemeTypography } from '../types'
import colors from './colors'

const fontFamily = Platform.select({ android: 'sans-serif', ios: 'Helvetica' })
const fontWeightRegular = 'normal'
const fontWeightSemiBold = '600'
const fontWeightBold = 'bold'

const appbarTitleTextColor = colors.appbarTint
const titleTextColor = colors.titleText
const bodyTextColor = colors.bodyText
const captionTextColor = colors.captionText

const typographys: IThemeTypography = {
  /**
   * Title is reserved for the title of a screen(Toolbar)
   * and the titles of Modal dialogs.
   */
  titleText: {
    fontFamily,
    color: appbarTitleTextColor,
    fontSize: 18,
    lineHeight: 30,
    fontStyle: 'normal',
    fontWeight: fontWeightRegular
  },
  titleTextSemiBold: {
    fontFamily,
    color: appbarTitleTextColor,
    fontSize: 18,
    lineHeight: 30,
    fontStyle: 'normal',
    fontWeight: fontWeightSemiBold
  },
  /**
   * Use the Heading style for card titles.
   */
  headingText: {
    fontFamily,
    color: titleTextColor,
    fontSize: 17,
    lineHeight: 24,
    fontStyle: 'normal',
    fontWeight: fontWeightRegular
  },
  headingTextBold: {
    fontFamily,
    color: titleTextColor,
    fontSize: 17,
    lineHeight: 24,
    fontStyle: 'normal',
    fontWeight: fontWeightBold
  },
  /**
   * Use the Subheading style to denote new sections within cards.
   */
  subheadingText: {
    fontFamily,
    color: titleTextColor,
    fontSize: 16,
    lineHeight: 22,
    fontStyle: 'normal',
    fontWeight: fontWeightRegular
  },
  subheadingTextBold: {
    fontFamily,
    color: titleTextColor,
    fontSize: 16,
    lineHeight: 22,
    fontStyle: 'normal',
    fontWeight: fontWeightBold
  },
  /**
   * The Body text style is used widely throughout the UI.
   * Any text that isn’t a title, heading, subheading, label
   * or caption would generally use the Body style.
   */
  bodyText: {
    fontFamily,
    color: bodyTextColor,
    fontSize: 15,
    lineHeight: 21,
    fontStyle: 'normal',
    fontWeight: fontWeightRegular
  },
  bodyTextBold: {
    fontFamily,
    color: bodyTextColor,
    fontSize: 15,
    lineHeight: 21,
    fontStyle: 'normal',
    fontWeight: fontWeightBold
  },
  /**
   * Use labels with form field and input elements to
   * signify the element’s function to the user.
   */
  labelText: {
    fontFamily,
    color: titleTextColor,
    fontSize: 14,
    lineHeight: 18,
    fontStyle: 'normal',
    fontWeight: fontWeightRegular
  },
  labelTextBold: {
    fontFamily,
    color: titleTextColor,
    fontSize: 14,
    lineHeight: 18,
    fontStyle: 'normal',
    fontWeight: fontWeightBold
  },
  /**
   * Use the Caption style for help/hint text.
   * It’s used with some form fields which require a description,
   * and can also be used stand-alone within a card when necessary.
   */
  captionText: {
    fontFamily,
    color: captionTextColor,
    fontSize: 12,
    lineHeight: 16,
    fontStyle: 'normal',
    fontWeight: fontWeightRegular
  },
  captionTextBold: {
    fontFamily,
    color: captionTextColor,
    fontSize: 12,
    lineHeight: 16,
    fontStyle: 'normal',
    fontWeight: fontWeightBold
  },
  /**
   * Use this style to change <Input /> element text style
   */
  inputText: {
    fontFamily,
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 18,
    color: colors.titleText
  }
}

export default typographys
