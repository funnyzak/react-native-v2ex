/**
 * Created by leon<silenceace@gmail.com> on 22/04/01.
 */
import React from 'react'
import ProfileGrid, { ProfileGridProps } from './ProfileGrid'
import ProfileInfo, { ProfileInfoProps } from './ProfileInfo'
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
          SylCommon.Card.container(theme),
          { backgroundColor: theme.colors.surface, paddingTop: theme.spacing.small },
          containerStyle
        ]}>
        <ProfileInfo {...info} />
        <ProfileGrid {...stat} />
      </View>
    )
  }
  return renderContent()
}

export default ProfileCard
