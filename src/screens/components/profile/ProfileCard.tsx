/**
 * Created by leon<silenceace@gmail.com> on 22/04/01.
 */
import React from 'react'
import ProfileGrid, { ProfileGridProps } from './ProfileGrid'
import ProfileInfo, { ProfileInfoProps } from './ProfileInfo'
import { BorderLine } from '../common'
import { SylCommon, useTheme } from '@src/theme'
import { View, ViewStyle } from 'react-native'

/**
 * ProfileCard props
 */
export interface ProfileCardProps {
  containerStyle?: ViewStyle
  info: ProfileInfoProps
  stat: ProfileGridProps
}

const ProfileCard: React.FC<ProfileCardProps> = ({ info, stat, containerStyle }: ProfileCardProps) => {
  const { theme } = useTheme()
  const renderContent = () => {
    return (
      <View
        style={[
          {
            backgroundColor: theme.colors.surface,
            paddingTop: theme.spacing.medium
          },
          containerStyle
        ]}>
        <ProfileInfo {...info} containerStyle={SylCommon.Card.container(theme)} />
        <BorderLine />
        <ProfileGrid
          {...stat}
          containerStyle={[SylCommon.Card.container(theme), { paddingTop: theme.spacing.small }]}
        />
      </View>
    )
  }
  return renderContent()
}

export default ProfileCard
