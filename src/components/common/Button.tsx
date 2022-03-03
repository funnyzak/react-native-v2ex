import React from 'react'
import { TouchableOpacity, ViewPropTypes, TouchableOpacityProps as NativeTouchableOpacityProps, ViewStyle, TextStyle } from 'react-native'
import PropTypes from 'prop-types'
import { Text } from './Text'
import { useTheme } from '@src/theme'
import { ITheme } from '@src/types'

export interface TouchableOpacityProps extends NativeTouchableOpacityProps {
  disabled: boolean
}

const Button = ({ onPress, children, style, disabled }: TouchableOpacityProps) => {
  const { theme } = useTheme()
  const { buttonStyle, buttonTitle } = styles
  return (
    <TouchableOpacity onPress={onPress} style={[buttonStyle(theme, disabled), style]} disabled={disabled}>
      <Text style={buttonTitle(theme, disabled)}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = {
  buttonStyle: (_theme: ITheme, disabled: boolean): ViewStyle => ({
    borderWidth: 1,
    backgroundColor: disabled ? _theme.colors.disabled : _theme.colors.secondary,
    borderColor: disabled ? _theme.colors.disabledDark : _theme.colors.secondaryDark,
    width: _theme.dimens.defaultButtonWidth,
    height: _theme.dimens.defaultButtonHeight,
    justifyContent: 'center'
  }),
  buttonTitle: (_theme: ITheme, disabled: boolean): TextStyle => ({
    color: disabled ? _theme.colors.disabledDark : _theme.colors.white,
    alignSelf: 'center'
  })
}

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  style: ViewPropTypes.style,
  disabled: PropTypes.bool
}

Button.defaultProps = {
  style: {},
  disabled: false
}

export { Button }
