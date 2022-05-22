/**
 * Created by leon<silenceace@gmail.com> on 22/04/28.
 */
import { Avatar } from '@src/components'
import { translate } from '@src/i18n'
import { NavigationService, ROUTES } from '@src/navigation'
import { ITheme, useTheme } from '@src/theme'
import { V2exObject } from '@src/types'
import dayjs from 'dayjs'
import React, { useMemo } from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'
import { BorderLine, RenderHTML, TextWithIconPress } from '../common'

/**
 * TopicReplayItem props
 */
export interface TopicReplayItemProps {
  containerStyle?: StyleProp<ViewStyle>

  info: V2exObject.TopicReply
}

const TopicReplayItem: React.FC<TopicReplayItemProps> = ({ containerStyle, info }: TopicReplayItemProps) => {
  const { theme } = useTheme()
  const avatar_link = useMemo(() => (info.member ? info.member.avatar || info.member.avatar_normal : undefined), [info])
  return (
    <View style={[styles.container(theme), containerStyle]}>
      <View style={styles.infoContainer(theme)}>
        <Avatar size={40} source={{ uri: avatar_link }} username={info.member?.username} style={styles.avatar(theme)} />

        <View style={styles.infoMain(theme)}>
          <View style={styles.infoMainItem(theme)}>
            <TextWithIconPress
              text={info.member?.username ?? 'none'}
              textStyle={[{ color: theme.colors.secondary }]}
              onPress={() => {
                NavigationService.navigate(ROUTES.Profile, { username: info.member?.username })
              }}
            />
            <TextWithIconPress
              text={translate('label.replyedTime').replace('$', dayjs(info.created * 1000).fromNow())}
            />
          </View>
          <View style={styles.infoMainItem(theme)}>
            <RenderHTML
              htmlString={info.content_rendered}
              contentWidth={theme.dimens.layoutContainerWidth - 40 - theme.spacing.large}
            />
          </View>
        </View>
      </View>
      <BorderLine width={0.4} />
    </View>
  )
}

const styles = {
  container: (theme: ITheme): ViewStyle => ({
    paddingTop: theme.spacing.medium,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  }),
  infoContainer: (theme: ITheme): ViewStyle => ({
    flexDirection: 'row',
    marginBottom: theme.spacing.small
  }),
  avatar: (theme: ITheme): ViewStyle => ({
    width: 40,
    marginRight: theme.spacing.large
  }),
  infoMain: (theme: ITheme): ViewStyle => ({
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'column'
  }),
  infoMainItem: (theme: ITheme): ViewStyle => ({
    flexDirection: 'row',
    marginBottom: theme.spacing.small,
    justifyContent: 'space-between'
  })
}

export default TopicReplayItem
