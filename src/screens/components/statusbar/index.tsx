/**
 * Created by leon<silenceace@gmail.com> on 22/04/03.
 */

import { useFocusEffect } from '@react-navigation/native'
import { useTheme } from '@src/theme'
import { useCallback } from 'react'
import { Platform, StatusBar } from 'react-native'

// set statusbar if the screen is currently focused.
// https://reactnavigation.org/docs/use-focus-effect/
export const SetStatusBar = ({ backgroundColor }: { backgroundColor?: string }) => {
  const { theme } = useTheme()

  useFocusEffect(
    useCallback(() => {
      if (Platform.OS === 'android') {
        StatusBar.setBackgroundColor(
          backgroundColor ?? (theme.name === 'dark' ? theme.colors.primaryDark : theme.colors.primary)
        )
      }
      return () => null
    }, [backgroundColor])
  )

  return null
}

export default SetStatusBar
