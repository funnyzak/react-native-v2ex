/**
 * Created by leon<silenceace@gmail.com> on 22/04/01.
 */
import React from 'react'
import { View, ViewStyle, TextStyle, StyleProp, ImageSourcePropType, ImageStyle, Image } from 'react-native'

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
  onPress: () => void
}

const TableRow: React.FC<TableRowProps> = (data: TableRowProps) => {
  const { theme } = useTheme()

  return (
    <View style={[data.containerStyle, rowStyles.container(theme)]}>
      <View style={rowStyles.left(theme)}>
        {data.icon && <Image source={data.icon} style={rowStyles.icon(theme)} />}
        <View style={rowStyles.textBox(theme)}>
          <Text style={rowStyles.title(theme)}>{data.title}</Text>
          {data.description && <Text style={rowStyles.description(theme)}>{data.description}</Text>}
        </View>
        <View style={rowStyles.right(theme)}>
          {data.rightText && <Text style={rowStyles.rightText(theme)}>{data.rightText}</Text>}
          <Image source={theme.assets.images.icons.table.rightArrow} style={rowStyles.arrow(theme)} />
        </View>
      </View>
    </View>
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

  /**
   * Table row list
   */
  list?: Array<TableRowProps>
}

const TableList: React.FC<TableListProps> = (data: TableListProps) => {
  const { theme } = useTheme()
  const renderContent = () => {
    return (
      <View style={[tableStyles.container(theme), data.containerStyle]}>
        <Text style={tableStyles.title(theme)}>Hello World, TableList.</Text>
        <View style={tableStyles.list(theme)}>
          {data.list && data.list.map((item, index) => <TableRow key={index} {...item} />)}
        </View>
      </View>
    )
  }

  return renderContent()
}

const rowStyles = {
  container: (theme: ITheme): ViewStyle => ({
    flex: 1
  }),
  left: (theme: ITheme): ViewStyle => ({}),
  icon: (theme: ITheme): ImageStyle => ({}),
  textBox: (theme: ITheme): ViewStyle => ({}),
  title: (theme: ITheme): TextStyle => ({}),
  description: (theme: ITheme): TextStyle => ({}),
  right: (theme: ITheme): ViewStyle => ({}),
  rightText: (theme: ITheme): TextStyle => ({}),
  arrow: (theme: ITheme): ImageStyle => ({})
}

const tableStyles = {
  container: (theme: ITheme): ViewStyle => ({
    flex: 1
  }),
  title: (theme: ITheme): TextStyle => ({}),
  list: (theme: ITheme): ViewStyle => ({})
}

export { TableList, TableRow }
