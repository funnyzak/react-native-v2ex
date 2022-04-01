/**
 * Created by leon<silenceace@gmail.com> on 22/04/01.
 */
import React from 'react'
import { View, ViewStyle, TextStyle } from 'react-native'

import { Text, Button, Spinner, Placeholder } from '@src/components'
import { ITheme, SylCommon, useTheme } from '@src/theme'
import { translate } from '@src/i18n'
import { NavigationService, ROUTES } from '@src/navigation'

/**
 * // TODO: NodeTopicTabList
 * NodeTopicTabList props
 */
export interface NodeTopicTabListProps {
  /**
   * NodeTopicTabList width
   */
  width?: number | string

  /**
   * NodeTopicTabList height
   */
  height?: number | string
}

const NodeTopicTabList: React.FC<NodeTopicTabListProps> = ({ width, height }: NodeTopicTabListProps) => {
  const readerContent = () => {
    return (
      <View>
        <Text>Hello World, NodeTopicTabList.</Text>
      </View>
    )
  }

  return readerContent()
}

const styles = {
  container: (theme: ITheme): ViewStyle => ({
    flex: 1
  })
}

export default NodeTopicTabList
