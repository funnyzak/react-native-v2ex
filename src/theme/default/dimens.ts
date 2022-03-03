import { Dimensions } from 'react-native'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

import { IThemeDimen } from './types'

const dimens: IThemeDimen = {
  /**
   * App level constants
   */
  WINDOW_WIDTH: screenWidth,
  WINDOW_HEIGHT: screenHeight,
  headerButtonSize: 23,
  headerHeight: 50,
  borderRadius: 2,
  badgeSize: 18,
  defaultButtonWidth: screenWidth * 0.9,
  defaultButtonHeight: 40,
  defaultInputBoxHeight: 40,

  /**
   * avatar witth
   */
  avatarSize: 60
}

export default dimens
