/**
 * Created by leon<silenceace@gmail.com> on 22/04/01.
 */
import React from 'react'
import {
  View,
  ViewStyle,
  TextStyle,
  StyleProp,
  ImageSourcePropType,
  ImageStyle,
  Image,
  TouchableOpacity
} from 'react-native'

import { Text, Button, Spinner, Placeholder } from '@src/components'
import { ITheme, SylCommon, useTheme } from '@src/theme'
import { translate } from '@src/i18n'
import { NavigationService, ROUTES } from '@src/navigation'
import { V2exObject } from '@src/types'

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
  icon?: ImageSourcePropType

  /**
   * Row title
   */
  title: string

  /**
   * Row description
   */
  description?: string

  /**
   * Row right arrow icon
   */
  withArrow?: boolean

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
        {data.icon && <Image source={data.icon} style={rowStyles.icon(theme)} />}
        <View style={rowStyles.textBox(theme)}>
          <Text style={rowStyles.title(theme)}>{data.title}</Text>
          {data.description && <Text style={rowStyles.description(theme)}>{data.description}</Text>}
        </View>
      </View>
      <View style={rowStyles.right(theme)}>
        {data.rightText && <Text style={rowStyles.rightText(theme)}>{data.rightText}</Text>}
        <Image source={theme.assets.images.icons.table.rightArrow} style={rowStyles.arrow(theme)} />
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
        <Text style={tableStyles.title(theme)}>{data.title}</Text>
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
  icon: (theme: ITheme): ImageStyle => ({
    height: 21,
    width: 21,
    marginRight: theme.spacing.small
  }),
  textBox: (theme: ITheme): ViewStyle => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }),
  title: (theme: ITheme): TextStyle => ({
    ...theme.typography.labelText
  }),
  description: (theme: ITheme): TextStyle => ({}),
  right: (theme: ITheme): ViewStyle => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: theme.spacing.medium
  }),
  rightText: (theme: ITheme): TextStyle => ({
    ...theme.typography.captionText
  }),
  arrow: (theme: ITheme): ImageStyle => ({
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
