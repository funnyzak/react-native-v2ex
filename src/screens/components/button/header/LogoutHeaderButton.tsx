/**
 * Created by leon<silenceace@gmail.com> on 22/05/5.
 */
import { logout as actionLogout } from '@src/actions'
import { useAppDispatch } from '@src/hooks'
import { useSession } from '@src/hooks/useSession'
import { NavigationService, ROUTES } from '@src/navigation'
import { useTheme } from '@src/theme'
import { V2exObject } from '@src/types'
import React from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import { HeaderButton } from '../../common'

/**
 * Logout Header Button
 * @param {
 *   text,
 *   buttonText,
 *   buttonPress
 * }
 * @returns
 */
const LogoutHeaderButton = ({
  containerStyle,
  member
}: {
  containerStyle?: StyleProp<ViewStyle>
  member: V2exObject.Member
}) => {
  const { theme } = useTheme()
  const { logined, profile } = useSession()
  const dispatch = useAppDispatch()

  const buttonPress = () => {
    if (logined) {
      dispatch(actionLogout() as any)
      NavigationService.navigate(ROUTES.SignIn)
    }
  }

  return member && profile && member.id === profile.id ? (
    <HeaderButton
      source={theme.assets.images.icons.header.logout}
      onPress={buttonPress}
      containerStyle={containerStyle}
    />
  ) : null
}

export default LogoutHeaderButton
