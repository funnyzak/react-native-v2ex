/**
 * Created by Leon<silenceace@gmail.com> at 2022-04-01 14:00:14.
 * Last modified at 2022-05-22 13:09:37
 */

import { Text } from '@src/components'
import { ITheme } from '@src/theme'
import React from 'react'
import { View, ViewStyle } from 'react-native'
/**
 * SettingSection props
 */
export interface SettingSectionProps {
  /**
   * SettingSection width
   */
  width?: number | string
  /**
   * SettingSection height
   */
  height?: number | string
}
const SettingSection: React.FC<SettingSectionProps> = ({ width, height }: SettingSectionProps) => {
  const renderContent = () => {
    return (
      <View>
        <Text>Hello World, SettingSection.</Text>
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
export default SettingSection
