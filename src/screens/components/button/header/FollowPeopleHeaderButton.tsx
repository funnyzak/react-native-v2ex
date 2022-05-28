/**
 * Created by leon<silenceace@gmail.com> on 22/05/27.
 */
import { followPeople, interestNode, unFollowPeople, unInterestNode } from '@src/actions'
import { useAppDispatch, useAppSelector } from '@src/hooks'
import { useSession } from '@src/hooks/useSession'
import { translate } from '@src/i18n'
import { NavigationService, ROUTES } from '@src/navigation'
import { useTheme } from '@src/theme'
import { V2exObject } from '@src/types'
import React, { useMemo } from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import { HeaderButton } from '../../common'

/**
 * Follow People Button
 * @param {
 *   text,
 *   buttonText,
 *   buttonPress
 * }
 * @returns
 */
const FollowPeopleHeaderButton = ({
  containerStyle,
  member
}: {
  containerStyle?: StyleProp<ViewStyle>
  member: V2exObject.Member
}) => {
  const { theme } = useTheme()
  const { logined } = useSession()
  const { followPeoples } = useAppSelector((RootState) => RootState.member)
  const dispatch = useAppDispatch()
  const isInterest = useMemo(
    () => (logined ? followPeoples && followPeoples.findIndex((v) => v.id === member.id) >= 0 : false),
    [followPeoples]
  )

  const buttonPress = () => {
    if (!logined) {
      NavigationService.navigate(ROUTES.SignIn)
    } else {
      if (isInterest) {
        dispatch(unFollowPeople(member) as any)
      } else {
        dispatch(followPeople(member) as any)
      }
    }
  }

  return (
    <HeaderButton
      text={translate(`common.${isInterest ? 'cancel' : 'follow'}`)}
      textColor={isInterest ? theme.colors.captionText : theme.colors.secondary}
      onPress={buttonPress}
      containerStyle={containerStyle}
    />
  )
}

export default FollowPeopleHeaderButton
