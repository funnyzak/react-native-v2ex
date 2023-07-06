/**
 * Created by Leon<silenceace@gmail.com> at 2022-04-01 14:00:14.
 * Last modified at 2022-10-20 18:07:33
 */

import React from 'react'
import { View, ViewStyle, TextStyle } from 'react-native'
import { Text, Button, Spinner, Placeholder } from '@src/components'
import { Theme, SylCommon, useTheme } from '@src/theme'
import { translate } from '@src/i18n'
import { NavigationService, ROUTES } from '@src/navigation'
import { AppObject } from '@src/types'
/**
 * // TODO: NodeList
 * NodeList props
 */
export interface NodeListProps {
  /**
   * NodeList width
   */
  width?: number | string
  /**
   * NodeList height
   */
  height?: number | string
}
const NodeList: React.FC<NodeListProps> = ({ width, height }: NodeListProps) => {
  const renderContent = () => {
    return (
      <View>
        <Text>Hello World, NodeList.</Text>
      </View>
    )
  }
  return renderContent()
}
const styles = {
  container: (theme: Theme): ViewStyle => ({
    flex: 1
  })
}
export default NodeList
