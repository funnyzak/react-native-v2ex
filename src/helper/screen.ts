/**
 * Created by leon<silenceace@gmail.com> on 22/04/03.
 */

import { useFocusEffect } from '@react-navigation/native'
import { useTheme } from '@src/theme'
import { StatusBar } from 'react-native'

export const useFocusStatusBarColor = (backgroundColor?: string) => {
  const { theme } = useTheme()

  useFocusEffect(() => {
    StatusBar.setBackgroundColor(
      backgroundColor ?? (theme.name === 'dark' ? theme.colors.primaryDark : theme.colors.primary)
    )
  })
}
