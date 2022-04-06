/**
 * Created by leon<silenceace@gmail.com> on 22/04/01.
 */
import React from 'react'
import { View, ViewStyle, TextStyle } from 'react-native'

import { Text, Button, Spinner, Placeholder } from '@src/components'
import { ITheme, SylCommon, useTheme } from '@src/theme'
import { translate } from '@src/i18n'
import { NavigationService, ROUTES } from '@src/navigation'
import { V2exObject } from '@src/types'

/**
 * // TODO: TableList
 * TableList props
 */
export interface TableListProps {
  /**
   * TableList width
   */
  width?: number | string

  /**
   * TableList height
   */
  height?: number | string
}

const TableList: React.FC<TableListProps> = ({ width, height }: TableListProps) => {
  const renderContent = () => {
    return (
      <View>
        <Text>Hello World, TableList.</Text>
      </View>
    )
  }

  return renderContent()
}

const styles = {
  container: (theme: ITheme): ViewStyle => ({
    flex: 1
  })
}

export default TableList
