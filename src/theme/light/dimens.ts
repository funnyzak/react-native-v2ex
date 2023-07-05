/**
 * Created by Leon<silenceace@gmail.com> at 2022-03-03 21:32:14.
 * Last modified at 2022-04-19 17:04:45
 */

import { Dimensions as _Dimensions } from 'react-native'
const screenWidth = _Dimensions.get('window').width
const screenHeight = _Dimensions.get('window').height
import { Dimensions } from '../types'
const layoutContainerHorizontalMargin = 15
const dimens: Dimensions = {
  WINDOW_WIDTH: screenWidth,
  WINDOW_HEIGHT: screenHeight,
  layoutContainerWidth: screenWidth - layoutContainerHorizontalMargin * 2,
  layoutContainerHorizontalMargin: layoutContainerHorizontalMargin,
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
