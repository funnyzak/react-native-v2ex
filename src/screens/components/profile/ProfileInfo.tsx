/**
 * Created by leon<silenceace@gmail.com> on 22/04/01.
 */
import { Avatar, Text } from '@src/components'
import { translate } from '@src/i18n'
import { NavigationService, ROUTES } from '@src/navigation'
import { ITheme, SylCommon, useTheme } from '@src/theme'
import { V2exObject } from '@src/types'
import dayjs from 'dayjs'
import React, { useMemo } from 'react'
import { Image, StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native'
import { TextWithIconPress } from '../common'

/**
 * ProfileInfo props
 */
export interface ProfileInfoProps {
  /**
   * container style
   */
  containerStyle?: StyleProp<ViewStyle>
  /**
   * card style
   */
  styleType?: 'simple' | 'full'
  /**
   * profile info
   */
  info?: V2exObject.Member
  /**
   * with right arrow
   */
  withArrow?: boolean
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({
  info,
  containerStyle,
  styleType = 'simple',
  withArrow = false
}: ProfileInfoProps) => {
  const { theme } = useTheme()
  const isLogin = useMemo(() => info && info.username, [info])

  const renderContent = () => {
    return (
      <View style={[styles.container(theme), containerStyle]}>
        <TouchableOpacity
          onPress={() =>
            !withArrow
              ? undefined
              : isLogin
              ? NavigationService.navigate(ROUTES.Profile, { username: info?.username })
              : NavigationService.navigate(ROUTES.SignIn)
          }
          style={styles.infoItem(theme)}>
          <View style={styles.baseAvatar(theme)}>
            <Avatar
              size={60}
              source={info?.avatar_normal ? { uri: info?.avatar_normal } : undefined}
              username={info?.username}
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
                {info?.username ?? translate('label.goLogin')}
              </Text>
              {!isLogin || (isLogin && info?.tagline) ? (
                <Text style={[styles.baseRightItem(theme), theme.typography.bodyText]}>
                  {info?.tagline ?? translate('label.loginTips')}
                </Text>
              ) : null}
              {info?.last_modified ? (
                <Text style={[styles.baseRightItem(theme), theme.typography.captionText]}>
                  {translate('label.profileLastModified').replace(
                    '$',
                    dayjs(info?.last_modified * 1000).format('YYYY-MM-DD HH:mm:ss')
                  )}
                </Text>
              ) : null}
            </View>
            {withArrow && (
              <View style={styles.baseRightArrow(theme)}>
                <Image source={theme.assets.images.icons.table.rightArrow} style={{ width: 14, height: 14 }} />
              </View>
            )}
          </View>
        </TouchableOpacity>
        {styleType === 'full' && (
          <>
            {info?.bio ? <Text style={[styles.infoItem(theme), theme.typography.bodyText]}>{info?.bio}</Text> : null}
            <View style={styles.infoItem(theme)}>
              {info?.location ? (
                <TextWithIconPress
                  containerStyle={{ marginRight: theme.spacing.small }}
                  text={info?.location}
                  icon={theme.assets.images.icons.profile.location}
                />
              ) : null}
              {info?.website ? (
                <TextWithIconPress
                  onPress={() => {
                    NavigationService.navigate(ROUTES.WebViewer, { url: info.website })
                  }}
                  containerStyle={{ marginRight: theme.spacing.small }}
                  text={info?.website}
                  icon={theme.assets.images.icons.profile.urlschme}
                />
              ) : null}
            </View>
            <View style={styles.infoItem(theme)}>
              {info?.github ? (
                <TextWithIconPress
                  onPress={() => {
                    NavigationService.navigate(ROUTES.WebViewer, { url: `https://github.com/${info.twitter}` })
                  }}
                  containerStyle={{ marginRight: theme.spacing.small }}
                  text={info?.github}
                  icon={theme.assets.images.icons.profile.github}
                />
              ) : null}
              {info?.telegram ? (
                <TextWithIconPress
                  containerStyle={{ marginRight: theme.spacing.small }}
                  text={info?.telegram}
                  icon={theme.assets.images.icons.profile.telegram}
                />
              ) : null}
              {info?.twitter ? (
                <TextWithIconPress
                  onPress={() => {
                    NavigationService.navigate(ROUTES.WebViewer, { url: `https://twitter.com/${info.twitter}` })
                  }}
                  containerStyle={{ marginRight: theme.spacing.small }}
                  text={info?.twitter}
                  icon={theme.assets.images.icons.profile.twitter}
                />
              ) : null}
            </View>
            {info?.created ? (
              <Text style={[styles.infoItem(theme), theme.typography.captionText]}>
                {translate('label.joinV2exSinceTime')
                  .replace('$', info?.id.toString())
                  .replace('$', dayjs(info?.created * 1000).format())}
              </Text>
            ) : null}
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
    paddingBottom: theme.spacing.small
  })
}

export default ProfileInfo
