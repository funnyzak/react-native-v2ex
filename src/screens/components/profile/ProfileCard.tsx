/**
 * Created by leon<silenceace@gmail.com> on 22/04/01.
 */
import React from 'react'
import ProfileGrid, { ProfileGridProps } from './ProfileGrid'
import ProfileInfo, { ProfileInfoProps } from './ProfileInfo'

/**
 * ProfileCard props
 */
export interface ProfileCardProps {
  info: ProfileInfoProps
  stat: ProfileGridProps
}

const ProfileCard: React.FC<ProfileCardProps> = ({ info, stat }: ProfileCardProps) => {
  const renderContent = () => {
    return (
      <>
        <ProfileInfo {...info} />
        <ProfileGrid {...stat} />
      </>
    )
  }

  return renderContent()
}

export default ProfileCard
