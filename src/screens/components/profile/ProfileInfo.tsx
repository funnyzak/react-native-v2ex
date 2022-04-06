/**
 * Created by leon<silenceace@gmail.com> on 22/04/01.
 */
import React from 'react'
import { View, ViewStyle, TextStyle, TouchableOpacity } from 'react-native'

import { Text, Button, Spinner, Placeholder, Avatar } from '@src/components'
import { TextWithIconPress } from '../common'
import { ITheme, SylCommon, useTheme } from '@src/theme'
import { translate } from '@src/i18n'
import { NavigationService, ROUTES } from '@src/navigation'
import { V2exObject } from '@src/types'
/**
 * // TODO: ProfileInfo
 * ProfileInfo props
 */
export interface ProfileInfoProps {
  style: 'simple' | 'full'
  profile?: V2exObject.Member
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({ profile }: ProfileInfoProps) => {
  const { theme } = useTheme()

  const renderContent = () => {
    return (
      <TouchableOpacity style={[SylCommon.Layout.fullWidth, SylCommon.Layout.row, styles.baseInfo(theme)]}>
        <Avatar source={profile?.avatar_normal ? { uri: profile?.avatar_normal } : undefined} size={60} />
        <View style={styles.userInfo(theme)}>
          <Text style={styles.username(theme)}>{profile?.username}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  return renderContent()
}

const styles = {
  container: (theme: ITheme): ViewStyle => ({
    flex: 1,
    backgroundColor: theme.colors.surface
  }),
  infoItem: (theme: ITheme): ViewStyle => ({
    paddingBottom: theme.spacing.medium
  }),
  baseInfo: (theme: ITheme): ViewStyle => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start'
  }),
  baseAvatar: (theme: ITheme): ViewStyle => ({
    width: 60,
    height: 60,
    marginRight: theme.spacing.medium,
    flexGrow: 0
  }),
  baseRightBox: (theme: ITheme): ViewStyle => ({
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    alignItems: 'flex-start'
  }),

  userInfo: (theme: ITheme): ViewStyle => ({
    marginLeft: 12,
    flex: 1,
    justifyContent: 'center'
  }),
  username: (theme: ITheme): TextStyle => ({
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4
  })
}

export default ProfileInfo
