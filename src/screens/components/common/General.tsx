/**
 * Created by leon<silenceace@gmail.com> on 22/04/06.
 */
import { Text } from '@src/components'
import { ITheme, useTheme } from '@src/theme'
import React from 'react'
import {
  Image,
  View,
  ImageSourcePropType,
  ImageStyle,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
  Pressable
} from 'react-native'

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

/**
 * TextGrid props
 */
export interface TextGridProps {
  columnNum?: number
  list: {
    count?: number
    text: string
    press?: () => void
  }[]
}

const TextGrid: React.FC<TextGridProps> = ({ list, columnNum }: TextGridProps) => {
  const { theme } = useTheme()

  const renderContent = () => {
    return (
      <View style={styles.textGrid.container(theme)}>
        {list.map((item, index) => {
          return (
            <TouchableOpacity key={index} style={styles.textGrid.item(theme, columnNum)} onPress={item.press}>
              <Text style={styles.textGrid.count(theme)}>{item.count ?? 0}</Text>
              <Text style={styles.textGrid.item(theme)}>{item.text}</Text>
            </TouchableOpacity>
          )
        })}
      </View>
    )
  }

  return renderContent()
}

const BorderLine = () => {
  const { theme } = useTheme()
  return <View style={styles.borderLine(theme)} />
}

const HeaderButton = ({ source, onPress }: { source: ImageSourcePropType; onPress: () => void }) => {
  return (
    <Pressable onPress={onPress}>
      <Image source={source} width={24} />
    </Pressable>
  )
}
const styles = {
  borderLine: (theme: ITheme) => ({
    width: '100%',
    height: 0.3,
    backgroundColor: theme.colors.border
  }),
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
  },
  textGrid: {
    container: (theme: ITheme): ViewStyle => ({
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap',
      justifyContent: 'space-between'
    }),
    item: (theme: ITheme, columnNum?: number): ViewStyle => ({
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      paddingVertical: theme.spacing.small
    }),
    count: (theme: ITheme): TextStyle => ({
      alignSelf: 'center',
      ...theme.typography.subheadingTextBold
    }),
    text: (theme: ITheme): TextStyle => ({
      alignSelf: 'center',
      ...theme.typography.bodyText
    })
  }
}

export { TextWithIconPress, TextGrid, BorderLine, HeaderButton }
