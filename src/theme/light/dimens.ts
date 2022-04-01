import { Dimensions } from 'react-native'
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

import { IThemeDimen } from '../types'

const dimens: IThemeDimen = {
  /**
   * App level constants
   */
  WINDOW_WIDTH: screenWidth,
  WINDOW_HEIGHT: screenHeight,

  layoutContainerWidth: screenWidth - 30,

  headerButtonSize: 23,
  headerHeight: 50,

  borderRadius: 2,

  badgeSize: 18,

  defaultButtonWidth: screenWidth - 60,
  defaultButtonHeight: 42,
  defaultButtonRadius: 5,

  defaultLineWidth: 0.3,

  defaultInputBoxHeight: 40
}

export default dimens
