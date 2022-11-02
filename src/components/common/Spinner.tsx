import { ITheme, useTheme } from '@src/theme'
import React from 'react'
import { ActivityIndicator, StyleProp, TextStyle, View, ViewStyle } from 'react-native'
import { Text } from './Text'

const Spinner = ({
  size = 'large',
  style,
  text,
  mask = false
}: {
  size?: 'small' | 'large' | undefined
  style?: StyleProp<ViewStyle>
  mask?: boolean
  text?: string
}) => {
  const { theme } = useTheme()

  return (
    <View
      style={[
        styles.containerStyle(theme),
        mask
          ? {
              flex: 1,
              position: 'absolute',
              zIndex: 10,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(255,255,255, 0.8)'
            }
          : {},
        style
      ]}>
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
    paddingVertical: _theme.spacing.large,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  }),
  textStyle: (_theme: ITheme): TextStyle => ({
    ..._theme.typography.bodyText,
    marginTop: _theme.spacing.small
  })
}
