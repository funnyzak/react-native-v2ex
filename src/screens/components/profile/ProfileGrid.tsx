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
 * // TODO: ProfileGrid
 * ProfileGrid props
 */
export interface ProfileGridProps {
  /**
   * ProfileGrid width
   */
  width?: number | string

  /**
   * ProfileGrid height
   */
  height?: number | string
}

const ProfileGrid: React.FC<ProfileGridProps> = ({ width, height }: ProfileGridProps) => {
  const readerContent = () => {
    return (
      <View>
        <Text>Hello World, ProfileGrid.</Text>
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

export default ProfileGrid
