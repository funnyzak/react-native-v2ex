/**
 * Created by leon<silenceace@gmail.com> on 22/04/01.
 */
import { translate } from '@src/i18n'
import { NavigationService, ROUTES } from '@src/navigation'
import React, { useMemo } from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'
import { TextGrid } from '../common'

/**
 * ProfileGrid props
 */
export interface ProfileGridProps {
  /**
   * container style
   */
  containerStyle?: StyleProp<ViewStyle>
  topics?: number
  favorites?: number
  following?: number
  history?: number
}

const ProfileGrid: React.FC<ProfileGridProps> = ({
  containerStyle,
  topics,
  favorites,
  following,
  history
}: ProfileGridProps) => {
  const list = useMemo(
    () => [
      {
        text: translate('router.MyTopics'),
        count: topics,
        press: () => NavigationService.navigate(ROUTES.MyTopics)
      },
      {
        text: translate('router.FavoriteTopics'),
        count: favorites,
        press: () => NavigationService.navigate(ROUTES.FavoriteTopics)
      },
      {
        text: translate('router.Following'),
        count: following,
        press: () => NavigationService.navigate(ROUTES.Following)
      },
      {
        text: translate('router.History'),
        count: history,
        press: () => NavigationService.navigate(ROUTES.History)
      }
    ],
    [topics, favorites, following, history]
  )
  const renderContent = () => {
    return (
      <View style={containerStyle}>
        <TextGrid list={list} columnNum={4} />
      </View>
    )
  }

  return renderContent()
}

export default ProfileGrid
