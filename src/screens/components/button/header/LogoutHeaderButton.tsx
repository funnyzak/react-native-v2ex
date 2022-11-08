/**
 * Created by leon<silenceace@gmail.com> on 22/05/5.
 */
import { logout as actionLogout } from '@src/actions'
import { useAppDispatch } from '@src/hooks'
import { useSession } from '@src/hooks/useSession'
import { translate } from '@src/i18n'
import { NavigationService, ROUTES } from '@src/navigation'
import { useTheme } from '@src/theme'
import { AppObject } from '@src/types'
import React from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import { SheetManager } from 'react-native-actions-sheet'
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
  member: AppObject.Member
}) => {
  const { theme } = useTheme()
  const { profile } = useSession()
  const dispatch = useAppDispatch()

  return member && profile && member.id === profile.id ? (
    <>
      <HeaderButton
        source={theme.assets.images.icons.header.logout}
        onPress={() =>
          SheetManager.show('confirm-sheet', {
            onClose: (data: any) => {
              if (data === true) {
                dispatch(actionLogout() as any)
                NavigationService.navigate(ROUTES.SignIn)
              }
            },
            payload: {
              description: translate('confirm.logout')
            }
          })
        }
        containerStyle={containerStyle}
      />
    </>
  ) : null
}

export default LogoutHeaderButton
