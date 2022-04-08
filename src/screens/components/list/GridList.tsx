/**
 * Created by leon<silenceace@gmail.com> on 22/04/01.
 */
import { Text } from '@src/components'
import { ITheme } from '@src/theme'
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
  container: (theme: ITheme): ViewStyle => ({
    flex: 1
  })
}

export default GridList
