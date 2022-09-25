import { Dimensions, Platform, StatusBar, PixelRatio } from 'react-native'

/**
 * 判断是否为 iPhone X
 * @returns {boolean}
 */
export function isIphoneX() {
  const X_WIDTH = 375
  const X_HEIGHT = 812
  return Platform.OS === IOS && screenHeight === X_HEIGHT && screenWidth === X_WIDTH
}

/**
 * 返回状态栏的高度
 * @returns {number}
 */
export function getStatusBarHeight() {
  let statusBarHeight = 20

  if (Platform.OS === ANDROID) {
    statusBarHeight = StatusBar.currentHeight || 20
  }

  if (isIphoneX()) {
    statusBarHeight = 44
  }

  return statusBarHeight
}

// 设计稿的宽度和高度
const designWidth = 375
const designHeight = 667

export const screenWidth = Dimensions.get('window').width
export const screenHeight = Dimensions.get('window').height

export const unitWidth = screenWidth / designWidth
export const unitHeight = screenHeight / designHeight

export const statusBarHeight = getStatusBarHeight()
export const safeAreaViewHeight = isIphoneX() ? 34 : 0

// 标题栏的高度
export const titleHeight = unitWidth * 100 + statusBarHeight

// 字体缩放比例，一般情况下不用考虑。
// 当应用中的字体需要根据手机设置中字体大小改变的话需要用到缩放比例
export const fontscale = PixelRatio.getFontScale()

export const ANDROID = 'android'
export const IOS = 'ios'
