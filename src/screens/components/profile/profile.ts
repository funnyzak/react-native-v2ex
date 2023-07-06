/**
 * Created by Leon<silenceace@gmail.com> at 2022-05-27 21:34:46.
 * Last modified at 2022-05-27 21:34:46
 */

import { Theme } from '@src/theme'
import { ViewStyle } from 'react-native'
export const ProfileInfoStyle = {
  container: (theme: Theme): ViewStyle => ({
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column'
  }),
  infoItem: (theme: Theme): ViewStyle => ({
    paddingBottom: theme.spacing.medium,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%'
  }),
  baseAvatar: (theme: Theme): ViewStyle => ({
    width: 60,
    height: 60,
    marginRight: theme.spacing.medium
  }),
  baseRightBox: (theme: Theme): ViewStyle => ({
    display: 'flex',
    flexDirection: 'row',
    flex: 1
  }),
  baseRightInfo: (theme: Theme): ViewStyle => ({
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    alignItems: 'flex-start'
  }),
  baseRightArrow: (theme: Theme): ViewStyle => ({
    width: 14,
    display: 'flex',
    justifyContent: 'center'
  }),
  baseRightItem: (theme: Theme): ViewStyle => ({
    paddingBottom: theme.spacing.small
  })
}
