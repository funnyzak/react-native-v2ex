/**
 * Created by leon<silenceace@gmail.com> on 22/04/01.
 */
import { Text } from '@src/components'
import { ITheme, useTheme } from '@src/theme'
import React from 'react'
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle
} from 'react-native'

/**
 * Table Row Item Props
 */
export interface TableRowProps {
  /**
   * container style
   */
  containerStyle?: StyleProp<ViewStyle>

  /**
   * Optional
   */
  leftIcon?: ImageSourcePropType

  /**
   * Row title
   */
  title: string

  /**
   * highlight title
   */
  highlightTitle?: boolean

  /**
   * Row description
   */
  description?: string

  /**
   * value
   */
  value?: string
  /**
   * Row right arrow icon
   */
  withArrow?: boolean

  /**
   * custom right icon
   */
  rightIcon?: ImageSourcePropType

  /**
   * Row right text
   */
  rightText?: string

  /**
   * press callback
   */
  onPress?: () => void
}

const TableRow: React.FC<TableRowProps> = (data: TableRowProps) => {
  const { theme } = useTheme()

  return (
    <TouchableOpacity onPress={data.onPress} style={[data.containerStyle, rowStyles.container(theme)]}>
      <View style={rowStyles.left(theme)}>
        {data.leftIcon && <Image source={data.leftIcon} style={rowStyles.leftIcon(theme)} />}
        <View style={rowStyles.textBox(theme)}>
          <Text style={rowStyles.title(theme, data.highlightTitle ?? false)}>{data.title}</Text>
          {data.description && <Text style={rowStyles.description(theme)}>{data.description}</Text>}
        </View>
        {data.value && (
          <Text
            style={{ ...theme.typography.bodyText, color: theme.colors.captionText, marginLeft: theme.spacing.large }}>
            {data.value}
          </Text>
        )}
      </View>
      <View style={rowStyles.right(theme)}>
        {data.rightText && <Text style={rowStyles.rightText(theme)}>{data.rightText}</Text>}
        {data.withArrow && (
          <Image source={theme.assets.images.icons.table.rightArrow} style={rowStyles.rightIcon(theme)} />
        )}
        {data.rightIcon && <Image source={data.rightIcon} style={rowStyles.rightIcon(theme)} />}
      </View>
    </TouchableOpacity>
  )
}

/**
 * TableList props
 */
export interface TableListProps {
  /**
   * container style
   */
  containerStyle?: StyleProp<ViewStyle>

  /**
   * Table group title
   */
  title?: string

  children?: React.ReactNode
}

const TableList: React.FC<TableListProps> = (data: TableListProps) => {
  const { theme } = useTheme()
  const renderContent = () => {
    return (
      <View style={[tableStyles.container(theme), data.containerStyle]}>
        {data.title && <Text style={tableStyles.title(theme)}>{data.title}</Text>}
        <View style={tableStyles.list(theme)}>{data.children}</View>
      </View>
    )
  }

  return renderContent()
}

const rowStyles = {
  container: (theme: ITheme): ViewStyle => ({
    display: 'flex',
    flexDirection: 'row',
    height: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.3,
    borderColor: theme.colors.border
  }),
  left: (theme: ITheme): ViewStyle => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  }),
  leftIcon: (theme: ITheme): ImageStyle => ({
    height: 21,
    width: 21,
    marginRight: theme.spacing.small
  }),
  textBox: (theme: ITheme): ViewStyle => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }),
  title: (theme: ITheme, highlightTitle: boolean): TextStyle => ({
    ...theme.typography.labelText,
    color: highlightTitle ? theme.colors.secondary : theme.colors.bodyText
  }),
  description: (theme: ITheme): TextStyle => ({
    ...theme.typography.captionText
  }),
  right: (theme: ITheme): ViewStyle => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: theme.spacing.medium
  }),
  rightText: (theme: ITheme): TextStyle => ({
    ...theme.typography.captionText
  }),
  rightIcon: (theme: ITheme): ImageStyle => ({
    width: 16,
    height: 16
  })
}

const tableStyles = {
  container: (theme: ITheme): ViewStyle => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: theme.spacing.extraLarge
  }),
  title: (theme: ITheme): TextStyle => ({
    ...theme.typography.captionText,
    paddingLeft: theme.spacing.medium,
    marginBottom: theme.spacing.small
  }),
  list: (theme: ITheme): ViewStyle => ({
    display: 'flex',
    paddingLeft: theme.spacing.medium,
    flexDirection: 'column',
    backgroundColor: theme.colors.surface,
    width: '100%'
  })
}

export { TableList, TableRow }
