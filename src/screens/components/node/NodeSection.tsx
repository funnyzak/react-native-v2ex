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
 * // TODO: NodeSection
 * NodeSection props
 */
export interface NodeSectionProps {
  /**
   * NodeSection width
   */
  width?: number | string

  /**
   * NodeSection height
   */
  height?: number | string
}

const NodeSection: React.FC<NodeSectionProps> = ({ width, height }: NodeSectionProps) => {
  const readerContent = () => {
    return (
      <View>
        <Text>Hello World, NodeSection.</Text>
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

export default NodeSection
