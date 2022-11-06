import * as React from 'react'
import { StatusBar, StatusBarProps } from 'react-native'
import { useIsFocused } from '@react-navigation/native'

/*
If using a tab or drawer navigator, it's a bit more complex because all of the screens in the navigator might be rendered at once and kept rendered - that means that the last StatusBar config you set will be used (likely on the final tab of your tab navigator, not what the user is seeing).

Usage: <FocusAwareStatusBar barStyle="light-content" backgroundColor="#6a51ae" />
*/
export const FocusAwareStatusBar = (props: StatusBarProps) => {
  const isFocused = useIsFocused()

  return isFocused ? <StatusBar {...props} /> : null
}
