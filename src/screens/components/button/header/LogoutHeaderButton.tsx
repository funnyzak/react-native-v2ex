/**
 * Created by leon<silenceace@gmail.com> on 22/05/5.
 */
import { logout as actionLogout } from '@src/actions'
import { useAppDispatch } from '@src/hooks'
import { useSession } from '@src/hooks/useSession'
import { translate } from '@src/i18n'
import { NavigationService, ROUTES } from '@src/navigation'
import { useTheme } from '@src/theme'
import { V2exObject } from '@src/types'
import React, { useState } from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import { SheetManager } from 'react-native-actions-sheet'
import { ConfirmActionSheet } from '../../actionsheet'
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
  const [confirmSheetId] = useState<string>('action_logout')
  const { theme } = useTheme()
  const { profile } = useSession()
  const dispatch = useAppDispatch()

  return member && profile && member.id === profile.id ? (
    <>
      <HeaderButton
        source={theme.assets.images.icons.header.logout}
        onPress={() => SheetManager.show(confirmSheetId)}
        containerStyle={containerStyle}
      />
      <ConfirmActionSheet
        sheetId={confirmSheetId}
        title={translate('brand.name')}
        text={translate('confirm.logout')}
        confirmText={translate('common.confirm')}
        cancelText={translate('common.cancel')}
        confirmAction={(yes: boolean) => {
          if (yes) {
            dispatch(actionLogout() as any)
            NavigationService.navigate(ROUTES.SignIn)
          }
        }}
      />
    </>
  ) : null
}

export default LogoutHeaderButton
