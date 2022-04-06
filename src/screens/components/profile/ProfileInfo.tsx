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
import dayjs from 'dayjs'

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
      <View style={styles.container(theme)}>
        <View style={styles.infoItem(theme)}>
          <View style={styles.baseAvatar(theme)}>
            <Avatar
              size={60}
              source={profile?.avatar_normal ? { uri: profile?.avatar_normal } : undefined}
              username={profile?.username}
            />
          </View>
          <View style={styles.baseRightBox(theme)}>
            <Text
              style={[styles.baseRightItem(theme), theme.typography.subheadingText, { color: theme.colors.secondary }]}>
              {profile?.username}
            </Text>
            {profile?.tagline && (
              <Text style={[styles.baseRightItem(theme), theme.typography.bodyText]}>{profile?.tagline}</Text>
            )}
            {profile?.last_modified && (
              <Text style={[styles.baseRightItem(theme), theme.typography.captionText]}>
                {translate('label.activeLatest').replace(
                  '$',
                  dayjs(profile?.last_modified * 1000).format('YYYY-MM-DD HH:mm:ss')
                )}
              </Text>
            )}
          </View>
        </View>
        {profile?.bio && <Text style={[styles.infoItem(theme), theme.typography.bodyText]}>{profile?.bio}</Text>}
        <View style={styles.infoItem(theme)}>
          {profile?.location && (
            <TextWithIconPress
              style={{ marginRight: theme.spacing.small }}
              text={profile?.location}
              icon={theme.assets.images.icons.profile.location}
            />
          )}
          {profile?.website && (
            <TextWithIconPress
              style={{ marginRight: theme.spacing.small }}
              text={profile?.website}
              icon={theme.assets.images.icons.profile.urlschme}
            />
          )}
        </View>
        <View style={styles.infoItem(theme)}>
          {profile?.github && (
            <TextWithIconPress
              style={{ marginRight: theme.spacing.small }}
              text={profile?.github}
              icon={theme.assets.images.icons.profile.github}
            />
          )}
          {profile?.telegram && (
            <TextWithIconPress
              style={{ marginRight: theme.spacing.small }}
              text={profile?.telegram}
              icon={theme.assets.images.icons.profile.telegram}
            />
          )}
          {profile?.twitter && (
            <TextWithIconPress
              style={{ marginRight: theme.spacing.small }}
              text={profile?.twitter}
              icon={theme.assets.images.icons.profile.twitter}
            />
          )}
        </View>
        {profile?.created && (
          <Text style={[styles.infoItem(theme), theme.typography.captionText]}>
            {translate('label.joinV2exSinceTime').replace('$', dayjs(profile?.created * 1000).format())}
          </Text>
        )}
      </View>
    )
  }

  return renderContent()
}

const styles = {
  container: (theme: ITheme): ViewStyle => ({
    backgroundColor: theme.colors.surface,
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column'
  }),
  infoItem: (theme: ITheme): ViewStyle => ({
    paddingBottom: theme.spacing.medium,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
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
  baseRightItem: (theme: ITheme): ViewStyle => ({
    paddingBottom: theme.spacing.small
  })
}

export default ProfileInfo
