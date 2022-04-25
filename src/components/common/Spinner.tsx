import React from 'react'
import { View, StyleProp, ViewStyle, ActivityIndicator, TextStyle } from 'react-native'
import { Text } from './Text'
import { ITheme, SylCommon, useTheme } from '@src/theme'

const Spinner = ({
  size = 'large',
  style,
  text
}: {
  size?: 'small' | 'large' | undefined
  style?: StyleProp<ViewStyle>
  text?: string
}) => {
  const { theme } = useTheme()

  return (
    <View style={[styles.containerStyle(theme), style]}>
      <ActivityIndicator size={size} color={theme.colors.secondary} />
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
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
    marginVertical: _theme.spacing.large,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  }),
  textStyle: (_theme: ITheme): TextStyle => ({
    ..._theme.typography.bodyText,
    marginTop: _theme.spacing.small
  })
}
