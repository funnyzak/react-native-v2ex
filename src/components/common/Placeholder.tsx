import React from 'react'
import { View, ViewStyle, TextStyle, ImageSourcePropType, Image, StyleProp } from 'react-native'
import { useTheme, ITheme } from '@src/theme'
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
  containerStyle: (_theme: ITheme): ViewStyle => ({
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingVertical: _theme.spacing.small,
    marginBottom: _theme.spacing.large
  }),
  iconStyle: (_theme: ITheme): ViewStyle => ({}),
  iconTextStyle: (_theme: ITheme): TextStyle => ({
    fontSize: 48,
    color: _theme.colors.captionText
  }),
  textStyle: (_theme: ITheme): TextStyle => ({
    paddingTop: _theme.spacing.small,
    ..._theme.typography.bodyText,
    color: _theme.colors.captionText
  }),
  buttonContainer: (_theme: ITheme): ViewStyle => ({
    marginTop: _theme.spacing.small
  })
}

export { Placeholder }
