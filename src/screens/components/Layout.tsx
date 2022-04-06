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
 * // TODO: Layout
 * Layout props
 */
export interface LayoutProps {
  /**
   * layout width
   */
  width?: number | string

  /**
   * layout height
   */
  height?: number | string
}

const Layout: React.FC<LayoutProps> = ({ width, height }: LayoutProps) => {
  const readerContent = () => {
    return (
      <View>
        <Text>Hello World, Layout.</Text>
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

export default Layout