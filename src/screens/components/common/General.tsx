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
export interface TextWithIconPress {
  text: string
  icon?: ImageSourcePropType
  press?: () => void
}

const TextWithIconPress: React.FC<TextWithIconPress> = ({ text, icon, press }: TextWithIconPress) => {
  const { theme } = useTheme()

  const renderContent = () => {
    return (
      <TouchableOpacity style={styles.textWithIconPress.container(theme)} onPress={press}>
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
      flex: 1,
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
