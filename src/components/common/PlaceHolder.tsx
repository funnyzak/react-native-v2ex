import React from 'react'
import { View, ViewStyle, TextStyle, ImageSourcePropType, Image } from 'react-native'
import { useTheme, ITheme } from '@src/theme'
import { Text, Button } from './'

const PlaceHolder = ({
  style = 'none',
  icon,
  placeholderText,
  buttonText = undefined,
  buttonPress
}: {
  style?: 'icon' | 'text' | 'none'
  icon?: ImageSourcePropType
  placeholderText: string
  buttonText?: string
  buttonPress?: () => void
}) => {
  const { theme } = useTheme()

  const renderIcon = () => {
    if (style === 'none') return null
    return (
      <View style={styles.iconStyle(theme)}>
        {style === 'text' || !icon ? (
          <Text style={styles.iconTextStyle(theme)}>(;-;)</Text>
        ) : (
          <Image source={icon} style={{ width: 60, height: 60 }} />
        )}
      </View>
    )
  }

  return (
    <View style={styles.containerStyle(theme)}>
      {renderIcon()}
      <Text style={styles.textStyle(theme)}>{placeholderText}</Text>

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
    flexDirection: 'column'
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

export { PlaceHolder }
