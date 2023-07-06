/**
 * Created by Leon<silenceace@gmail.com> at 2022-03-01 16:42:43.
 * Last modified at 2022-05-28 23:04:37
 */

import React from 'react'
import {
  TouchableOpacity,
  TouchableOpacityProps as NativeTouchableOpacityProps,
  ViewStyle,
  TextStyle,
  ActivityIndicator
} from 'react-native'
import { Text } from './Text'
import { useTheme, Theme } from '@src/theme'
export interface TouchableOpacityProps extends NativeTouchableOpacityProps {
  loading?: boolean
  disabled?: boolean
  textColor?: string
  type?: 'large' | 'small'
}
const Button = ({
  onPress,
  children,
  style,
  textColor,
  loading = false,
  disabled = false,
  type = 'large'
}: TouchableOpacityProps) => {
  const { theme } = useTheme()
  return (
    <TouchableOpacity onPress={onPress} style={[styles.buttonStyle(theme, type, disabled), style]} disabled={disabled}>
      {loading && (
        <ActivityIndicator size={'small'} color={theme.colors.white} style={{ marginRight: theme.spacing.tiny }} />
      )}
      <Text style={styles.buttonTitle(theme, type, disabled, textColor)}>{children}</Text>
    </TouchableOpacity>
  )
}
const styles = {
  buttonStyle: (_theme: Theme, type: 'large' | 'small', disabled: boolean): ViewStyle =>
    type === 'large'
      ? {
          borderWidth: 1,
          backgroundColor: disabled ? _theme.colors.secondaryLight : _theme.colors.secondary,
          borderColor: disabled ? _theme.colors.secondaryLight : _theme.colors.secondary,
          width: _theme.dimensions.defaultButtonWidth,
          height: _theme.dimensions.defaultButtonHeight,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          borderRadius: _theme.dimensions.defaultButtonRadius
        }
      : {
          borderWidth: 1,
          borderColor: disabled ? _theme.colors.disabled : _theme.colors.secondary,
          paddingHorizontal: 14,
          paddingVertical: 0,
          height: 24,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: _theme.dimensions.defaultButtonRadius
        },
  buttonTitle: (_theme: Theme, type: 'large' | 'small', disabled: boolean, textColor?: string): TextStyle =>
    type === 'large'
      ? {
          ..._theme.typography.subheadingText,
          color: textColor ?? _theme.colors.white,
          alignSelf: 'center'
        }
      : {
          ..._theme.typography.bodyText,
          color: textColor ?? disabled ? _theme.colors.disabled : _theme.colors.secondary,
          alignSelf: 'center'
        }
}
export { Button }
