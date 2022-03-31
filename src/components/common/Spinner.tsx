import React from 'react'
import { View, StyleProp, ViewStyle, ActivityIndicator, TextStyle } from 'react-native'
import { Text } from './Text'
import { ITheme, useTheme } from '@src/theme'

const Spinner = ({
  size = 'large',
  style,
  text
}: {
  size: number | 'small' | 'large' | undefined
  style: StyleProp<ViewStyle>
  text?: string
}) => {
  const { theme } = useTheme()

  return (
    <View style={[styles.containerStyle(theme), style]}>
      <ActivityIndicator size={size} color={theme.colors.secondary} />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text adjustsFontSizeToFit={true} style={styles.textStyle(theme)}>
          {text}
        </Text>
      </View>
    </View>
  )
}

export { Spinner }

const styles = {
  containerStyle: (_theme: ITheme): ViewStyle => ({
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  }),
  textStyle: (_theme: ITheme): TextStyle => ({
    ..._theme.typography.captionText,
    marginTop: _theme.spacing.small,
    color: _theme.colors.secondary
  })
}
