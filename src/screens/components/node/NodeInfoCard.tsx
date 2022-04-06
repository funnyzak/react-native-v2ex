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
 * // TODO: NodeInfoCard
 * NodeInfoCard props
 */
export interface NodeInfoCardProps {
  /**
   * NodeInfoCard width
   */
  width?: number | string

  /**
   * NodeInfoCard height
   */
  height?: number | string
}

const NodeInfoCard: React.FC<NodeInfoCardProps> = ({ width, height }: NodeInfoCardProps) => {
  const readerContent = () => {
    return (
      <View>
        <Text>Hello World, NodeInfoCard.</Text>
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

export default NodeInfoCard
