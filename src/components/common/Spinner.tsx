import React from 'react'
import { View, StyleProp, ViewStyle, ActivityIndicator } from 'react-native'
import { useTheme } from '@src/theme'

const Spinner = ({
  size = 'large',
  style
}: {
  size: number | 'small' | 'large' | undefined
  style: StyleProp<ViewStyle>
}) => {
  const { theme } = useTheme()

  return (
    <View
      style={[
        {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        },
        style
      ]}>
      <ActivityIndicator size={size} color={theme.colors.secondary} />
    </View>
  )
}

export { Spinner }
