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
 * // TODO: ProfileCard
 * ProfileCard props
 */
export interface ProfileCardProps {
  /**
   * ProfileCard width
   */
  width?: number | string

  /**
   * ProfileCard height
   */
  height?: number | string
}

const ProfileCard: React.FC<ProfileCardProps> = ({ width, height }: ProfileCardProps) => {
  const readerContent = () => {
    return (
      <View>
        <Text>Hello World, ProfileCard.</Text>
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

export default ProfileCard
