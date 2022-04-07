/**
 * Created by leon<silenceace@gmail.com> on 22/04/01.
 */
import { translate } from '@src/i18n'
import { NavigationService, ROUTES } from '@src/navigation'
import { SylCommon, useTheme } from '@src/theme'
import React, { useMemo } from 'react'
import { View } from 'react-native'
import { TextGrid } from '../common'

/**
 * ProfileGrid props
 */
export interface ProfileGridProps {
  topics?: number
  favorites?: number
  following?: number
  history?: number
}

const ProfileGrid: React.FC<ProfileGridProps> = ({ topics, favorites, following, history }: ProfileGridProps) => {
  const { theme } = useTheme()

  const list = useMemo(
    () => [
      {
        text: translate('router.MyTopics'),
        count: topics,
        press: () => NavigationService.navigate(ROUTES.MyTopics)
      },
      {
        text: translate('router.FavoriteTopics'),
        count: topics,
        press: () => NavigationService.navigate(ROUTES.FavoriteTopics)
      },
      {
        text: translate('router.Following'),
        count: topics,
        press: () => NavigationService.navigate(ROUTES.Following)
      },
      {
        text: translate('router.History'),
        count: topics,
        press: () => NavigationService.navigate(ROUTES.History)
      }
    ],
    [topics, favorites, following, history]
  )
  const renderContent = () => {
    return <TextGrid list={list} columnNum={4} />
  }

  return renderContent()
}

export default ProfileGrid
