/**
 * Created by leon<silenceace@gmail.com> on 22/04/06.
 */
import { Text } from '@src/components'
import { ITheme, useTheme } from '@src/theme'
import React from 'react'
import { Image, ImageSourcePropType, ImageStyle, TextStyle, TouchableOpacity, ViewStyle } from 'react-native'

/**
 * TextWithIconPress props
 */
export interface TextWithIconPressProps {
  text: string
  icon?: ImageSourcePropType
  style?: ViewStyle
  press?: () => void
}

const TextWithIconPress: React.FC<TextWithIconPressProps> = ({ text, icon, style, press }: TextWithIconPressProps) => {
  const { theme } = useTheme()

  const renderContent = () => {
    return (
      <TouchableOpacity style={[styles.textWithIconPress.container(theme), style]} onPress={press}>
        {icon && <Image source={icon} style={styles.textWithIconPress.icon(theme)} />}
        <Text style={styles.textWithIconPress.text(theme)}>{text}</Text>
      </TouchableOpacity>
    )
  }

  return renderContent()
}

const styles = {
  textWithIconPress: {
    container: (theme: ITheme): ViewStyle => ({
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start'
    }),
    item: (theme: ITheme): ViewStyle => ({
      marginRight: 3,
      flex: 1
    }),
    icon: (theme: ITheme): ImageStyle => ({
      marginRight: 3,
      width: 15,
      height: 15
    }),
    text: (theme: ITheme): TextStyle => ({
      ...theme.typography.captionText,
      color: theme.colors.captionText
    })
  }
}

export { TextWithIconPress }
