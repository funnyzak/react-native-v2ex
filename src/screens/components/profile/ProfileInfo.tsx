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
 * // TODO: ProfileInfo
 * ProfileInfo props
 */
export interface ProfileInfoProps {
  /**
   * ProfileInfo width
   */
  width?: number | string

  /**
   * ProfileInfo height
   */
  height?: number | string
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({ width, height }: ProfileInfoProps) => {
  const readerContent = () => {
    return (
      <View>
        <Text>Hello World, ProfileInfo.</Text>
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

export default ProfileInfo
