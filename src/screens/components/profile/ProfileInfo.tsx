/**
 * Created by leon<silenceace@gmail.com> on 22/04/01.
 */
import React from 'react'
import { View, ViewStyle, TextStyle, TouchableOpacity, Image } from 'react-native'

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
  /**
   * container style
   */
  containerStyle?: ViewStyle
  /**
   * card style
   */
  styleType?: 'simple' | 'full'
  /**
   * profile info
   */
  profile?: V2exObject.Member
  /**
   * with right arrow
   */
  withArrow?: boolean
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({
  profile,
  containerStyle,
  styleType = 'simple',
  withArrow = false
}: ProfileInfoProps) => {
  const { theme } = useTheme()

  const renderContent = () => {
    return (
      <View style={[styles.container(theme), SylCommon.Card.container(theme), containerStyle]}>
        <View style={styles.infoItem(theme)}>
          <View style={styles.baseAvatar(theme)}>
            <Avatar
              size={60}
              source={profile?.avatar_normal ? { uri: profile?.avatar_normal } : undefined}
              username={profile?.username}
            />
          </View>
          <View style={styles.baseRightBox(theme)}>
            <View style={styles.baseRightInfo(theme)}>
              <Text
                style={[
                  styles.baseRightItem(theme),
                  theme.typography.subheadingText,
                  { color: theme.colors.secondary }
                ]}>
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
            {withArrow && profile && (
              <TouchableOpacity
                onPress={() => NavigationService.navigate(ROUTES.Profile, { username: profile?.username })}
                style={styles.baseRightArrow(theme)}>
                <Image source={theme.assets.images.icons.table.rightArrow} style={{ width: 14, height: 14 }} />
              </TouchableOpacity>
            )}
          </View>
        </View>
        {styleType === 'full' && (
          <>
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
                  press={() => {
                    NavigationService.navigate(ROUTES.WebViewer, { url: profile.website })
                  }}
                  style={{ marginRight: theme.spacing.small }}
                  text={profile?.website}
                  icon={theme.assets.images.icons.profile.urlschme}
                />
              )}
            </View>
            <View style={styles.infoItem(theme)}>
              {profile?.github && (
                <TextWithIconPress
                  press={() => {
                    NavigationService.navigate(ROUTES.WebViewer, { url: `https://github.com/${profile.twitter}` })
                  }}
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
                  press={() => {
                    NavigationService.navigate(ROUTES.WebViewer, { url: `https://twitter.com/${profile.twitter}` })
                  }}
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
          </>
        )}
      </View>
    )
  }

  return renderContent()
}

const styles = {
  container: (theme: ITheme): ViewStyle => ({
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column'
  }),
  infoItem: (theme: ITheme): ViewStyle => ({
    paddingBottom: theme.spacing.medium,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%'
  }),
  baseAvatar: (theme: ITheme): ViewStyle => ({
    width: 60,
    height: 60,
    marginRight: theme.spacing.medium
  }),
  baseRightBox: (theme: ITheme): ViewStyle => ({
    display: 'flex',
    flexDirection: 'row',
    flex: 1
  }),
  baseRightInfo: (theme: ITheme): ViewStyle => ({
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    alignItems: 'flex-start'
  }),
  baseRightArrow: (theme: ITheme): ViewStyle => ({
    width: 14,
    display: 'flex',
    justifyContent: 'center'
  }),
  baseRightItem: (theme: ITheme): ViewStyle => ({
    paddingBottom: theme.spacing.tiny
  })
}

export default ProfileInfo
