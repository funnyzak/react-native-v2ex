/**
 * Created by leon<silenceace@gmail.com> on 22/04/06.
 */
import { Text } from '@src/components'
import { ITheme, useTheme } from '@src/theme'
import { useAppSelector } from '@src/hooks'
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
import { IState } from '@src/types'
import { translate } from '@src/i18n'

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

const HeaderButton = ({
  source,
  onPress,
  text,
  textColor
}: {
  source?: ImageSourcePropType
  text?: string
  textColor?: string
  onPress: () => void
}) => {
  const { theme } = useTheme()

  return (
    <Pressable onPress={onPress}>
      {source && <Image source={source} width={24} />}
      {text && <Text style={styles.headerText(theme, textColor)}>{text}</Text>}
    </Pressable>
  )
}

const Footer = () => {
  const { theme } = useTheme()
  const app = useAppSelector((_state: IState.State) => _state.app)

  return (
    <View style={styles.footer(theme)}>
      <Text style={styles.footerItem(theme)}>
        {translate('brand.name')} {app.version.version}({app.version.buildId})
      </Text>
      <Text style={styles.footerItem(theme)}>
        {app.siteInfo?.title} - {app.siteInfo?.description}
      </Text>
    </View>
  )
}

const styles = {
  headerText: (theme: ITheme, textColor?: string): TextStyle => ({
    ...theme.typography.subheadingText,
    color: textColor ?? theme.colors.secondary
  }),
  footer: (theme: ITheme): ViewStyle => ({
    marginVertical: theme.spacing.extraLarge,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }),
  footerItem: (theme: ITheme): TextStyle => ({
    marginBottom: theme.spacing.small,
    ...theme.typography.captionText
  }),
  borderLine: (theme: ITheme): ViewStyle => ({
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

export { TextWithIconPress, TextGrid, BorderLine, HeaderButton, Footer }
