/**
 * Created by leon<silenceace@gmail.com> on 22/05/5.
 */
import { interestNode, unInterestNode } from '@src/actions'
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
 * Like Node Button
 * @param {
 *   text,
 *   buttonText,
 *   buttonPress
 * }
 * @returns
 */
const LikeNodeHeaderButton = ({
  containerStyle,
  node
}: {
  containerStyle?: StyleProp<ViewStyle>
  node: V2exObject.Node
}) => {
  const { theme } = useTheme()
  const { logined } = useSession()
  const { interestNodes } = useAppSelector((RootState) => RootState.member)
  const dispatch = useAppDispatch()
  const isInterest = useMemo(
    () => (logined ? interestNodes && interestNodes.findIndex((v) => v.id === node.id) >= 0 : false),
    [interestNodes]
  )

  const buttonPress = () => {
    if (!logined) {
      NavigationService.navigate(ROUTES.SignIn)
    } else {
      if (isInterest) {
        dispatch(unInterestNode(node) as any)
      } else {
        dispatch(interestNode(node) as any)
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

export default LikeNodeHeaderButton
