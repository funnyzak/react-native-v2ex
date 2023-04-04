/**
 * Created by Leon<silenceace@gmail.com> at 2022-04-14 17:36:16.
 * Last modified at 2022-04-14 17:50:01
 */

import { useFocusEffect } from '@react-navigation/native'
import { useTheme } from '@src/theme'
import { useCallback } from 'react'
import { Platform, StatusBar } from 'react-native'
// set statusbar if the screen is currently focused.
// https://reactnavigation.org/docs/use-focus-effect/
export const SetStatusBar = ({ backgroundColor }: { backgroundColor?: string }) => {
  const { theme, themeName } = useTheme()
  useFocusEffect(
    useCallback(() => {
      if (Platform.OS === 'android') {
        StatusBar.setBackgroundColor(
          backgroundColor ?? (theme.name === 'dark' ? theme.colors.primaryDark : theme.colors.primary)
        )
      }
      return () => null
    }, [backgroundColor, themeName])
  )
  return null
}
export default SetStatusBar
