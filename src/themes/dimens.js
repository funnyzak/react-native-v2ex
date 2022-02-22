import { Dimensions } from 'react-native'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

export default {
  /**
   * App level constants
   */
  WINDOW_WIDTH: screenWidth,
  WINDOW_HEIGHT: screenHeight,
  headerButtonSize: 23,
  borderRadius: 2,
  defaultButtonWidth: screenWidth * 0.7,
  defaultButtonHeight: 40,
  defaultInputBoxHeight: 40,

  /**
   * avatar witth
   */
  avatarSize: 60
}
