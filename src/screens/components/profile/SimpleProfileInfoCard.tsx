/**
 * Created by leon<silenceace@gmail.com> on 22/05/27.
 */
import { Avatar, Text } from '@src/components'
import { translate } from '@src/i18n'
import { NavigationService, ROUTES } from '@src/navigation'
import { ITheme, useTheme } from '@src/theme'
import { V2exObject } from '@src/types'
import dayjs from 'dayjs'
import React from 'react'
import { Image, StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native'
import { ProfileInfoStyle } from './profile'

/**
 * SimpleProfileInfoCard props
 */
export interface SimpleProfileInfoCardProps {
  /**
   * container style
   */
  containerStyle?: StyleProp<ViewStyle>
  /**
   * profile info
   */
  info?: V2exObject.Member
  /**
   * with right arrow
   */
  withArrow?: boolean
}

const SimpleProfileInfoCard: React.FC<SimpleProfileInfoCardProps> = ({
  info,
  containerStyle,
  withArrow = true
}: SimpleProfileInfoCardProps) => {
  const { theme } = useTheme()

  const renderContent = () => {
    return (
      <View style={[ProfileInfoStyle.container(theme), containerStyle]}>
        <TouchableOpacity
          onPress={() => {
            if (withArrow) NavigationService.navigate(ROUTES.Profile, { username: info?.username })
          }}
          style={ProfileInfoStyle.infoItem(theme)}>
          <View style={ProfileInfoStyle.baseAvatar(theme)}>
            <Avatar
              size={60}
              source={info?.avatar_normal ? { uri: info?.avatar_normal } : undefined}
              username={info?.username}
            />
          </View>
          <View style={ProfileInfoStyle.baseRightBox(theme)}>
            <View style={ProfileInfoStyle.baseRightInfo(theme)}>
              <Text
                style={[
                  ProfileInfoStyle.baseRightItem(theme),
                  styles.baseRightItem(theme),
                  theme.typography.subheadingText,
                  { color: theme.colors.secondary }
                ]}>
                {info?.username}
              </Text>
              {info?.tagline ? (
                <Text
                  style={[
                    ProfileInfoStyle.baseRightItem(theme),
                    styles.baseRightItem(theme),
                    theme.typography.bodyText
                  ]}>
                  {info.tagline}
                </Text>
              ) : null}
              {info ? (
                <Text
                  style={[
                    ProfileInfoStyle.baseRightItem(theme),
                    styles.baseRightItem(theme),
                    theme.typography.captionText
                  ]}>
                  {translate('label.v2exNumber').replace('$', info?.id.toString())}
                </Text>
              ) : null}
              {info?.created ? (
                <Text style={[ProfileInfoStyle.infoItem(theme), theme.typography.captionText]}>
                  {translate('label.joinSinceTime').replace('$', dayjs(info?.created * 1000).format())}
                </Text>
              ) : null}
            </View>
            {withArrow && (
              <View style={ProfileInfoStyle.baseRightArrow(theme)}>
                <Image source={theme.assets.images.icons.table.rightArrow} style={{ width: 14, height: 14 }} />
              </View>
            )}
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  return renderContent()
}

const styles = {
  baseRightItem: (theme: ITheme): ViewStyle => ({
    paddingBottom: theme.spacing.tiny
  })
}

export default SimpleProfileInfoCard
