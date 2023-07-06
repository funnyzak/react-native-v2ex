/**
 * Created by Leon<silenceace@gmail.com> at 2022-04-01 14:00:14.
 * Last modified at 2022-04-08 20:22:59
 */

import { Text } from '@src/components'
import { Theme } from '@src/theme'
import React from 'react'
import { View, ViewStyle } from 'react-native'
/**
 * GridList props
 */
export interface GridListProps {
  /**
   * GridList width
   */
  width?: number | string
  /**
   * GridList height
   */
  height?: number | string
}
const GridList: React.FC<GridListProps> = ({ width, height }: GridListProps) => {
  const renderContent = () => {
    return (
      <View>
        <Text>Hello World, GridList.</Text>
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
export default GridList
