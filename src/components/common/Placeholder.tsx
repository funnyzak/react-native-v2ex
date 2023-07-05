/**
 * Created by Leon<silenceace@gmail.com> at 2022-04-07 09:12:34.
 * Last modified at 2022-05-27 20:58:00
 */

import React from 'react'
import { View, ViewStyle, TextStyle, ImageSourcePropType, Image, StyleProp } from 'react-native'
import { useTheme, Theme } from '@src/theme'
import { Text, Button } from '.'
import { translate } from '@src/i18n'
const Placeholder = ({
  containerStyle,
  displayType = 'none',
  icon,
  placeholderText,
  buttonText = undefined,
  buttonPress
}: {
  containerStyle?: StyleProp<ViewStyle>
  displayType?: 'icon' | 'text' | 'none'
  icon?: ImageSourcePropType
  placeholderText?: string
  buttonText?: string
  buttonPress?: () => void
}) => {
  const { theme } = useTheme()
  const renderIcon = () => {
    if (displayType === 'none') return null
    return (
      <View style={styles.iconStyle(theme)}>
        {displayType === 'text' || !icon ? (
          <Text style={styles.iconTextStyle(theme)}>(;-;)</Text>
        ) : (
          <Image source={icon} style={{ width: 60, height: 60 }} />
        )}
      </View>
    )
  }
  return (
    <View style={[styles.containerStyle(theme), containerStyle]}>
      {renderIcon()}
      <Text style={styles.textStyle(theme)}>{placeholderText ?? translate('placeholder.empty')}</Text>
      {buttonText && (
        <Button style={styles.buttonContainer(theme)} disabled={false} type="small" onPress={buttonPress}>
          {buttonText}
        </Button>
      )}
    </View>
  )
}
const styles = {
  containerStyle: (_theme: Theme): ViewStyle => ({
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingVertical: _theme.spacing.small,
    marginBottom: _theme.spacing.large
  }),
  iconStyle: (_theme: Theme): ViewStyle => ({}),
  iconTextStyle: (_theme: Theme): TextStyle => ({
    fontSize: 48,
    color: _theme.colors.captionText
  }),
  textStyle: (_theme: Theme): TextStyle => ({
    paddingTop: _theme.spacing.small,
    ..._theme.typography.bodyText,
    color: _theme.colors.captionText
  }),
  buttonContainer: (_theme: Theme): ViewStyle => ({
    marginTop: _theme.spacing.small
  })
}
export { Placeholder }
