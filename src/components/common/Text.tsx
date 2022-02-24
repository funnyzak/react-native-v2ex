import React, { useContext } from 'react'
import { Text as RNText, StyleSheet, StyleProp, ViewStyle } from 'react-native'
import PropTypes from 'prop-types'
import { ThemeContext } from '../../theme'
import { ITheme, IThemeTypographyProps } from '../../theme/types'

// Possible value for prop "type" for Text
const HEADING = 'heading'
const SUB_HEADING = 'subheading'
const BODY = 'body'
const LABEL = 'label'
const CAPTION = 'caption'

type TextType = 'heading' | 'subheading' | 'body' | 'label' | 'caption'

interface TextProps {
  type: TextType
  bold: boolean
  style?: StyleProp<ViewStyle>
}

const Text = ({
  /**
   * @type prop helps style Text with pre default styling define in
   * typography.ts. Possible value of type can be:
   * 1. 'heading'
   * 2. 'subheading'
   * 3. 'body'
   * 4. 'label'
   * 5. 'caption'
   *
   * default value: 'body'
   */
  type,
  /**
   * @bold prop is a boolean, if enabled will use bold version of the
   * type mentioned.
   */
  bold,
  /**
   * @style prop will overwrite the predefined styling for Text defined by
   * @type prop
   *
   * default value: false
   */
  style,
  ...props
}: TextProps) => {
  const theme = useContext(ThemeContext)
  return <RNText style={StyleSheet.flatten([styles.text(type, bold, theme), style])} {...props} />
}

const getTextStyle = (type: TextType, bold: boolean, theme: ITheme): IThemeTypographyProps => {
  let style = ''
  switch (type) {
    case HEADING:
      style = 'headingText'
      break
    case SUB_HEADING:
      style = 'subheadingText'
      break
    case LABEL:
      style = 'labelText'
      break
    case CAPTION:
      style = 'captionText'
      break
    default:
      style = 'bodyText'
  }
  if (bold) {
    style += 'Bold'
  }

  if (style === 'bodyText') {
    return theme.typography[style]
  }
  return theme.typography.bodyText
}

const styles = {
  text: (type: TextType, bold: boolean, theme: ITheme) => ({
    ...getTextStyle(type, bold, theme)
  })
}

Text.propTypes = {
  type: PropTypes.oneOf([HEADING, SUB_HEADING, BODY, LABEL, CAPTION]),
  bold: PropTypes.bool,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}

Text.defaultProps = {
  type: BODY,
  bold: false,
  style: {}
}

export { Text }
