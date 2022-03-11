import * as React from 'react'
import { View, TouchableOpacity, Image, Text, ImageStyle, ViewStyle, TextStyle, Pressable } from 'react-native'
import { ITheme, V2exObject } from '@src/types'
import { useTheme } from '@src/theme'
import { Avatar } from '@src/components'
import dayjs from 'dayjs'
import { NavigationService, ROUTES } from '@src/navigation'

const TopicItem = ({
  topic,
  onRowPress,
  containerStyle: containerStyle
}: {
  topic: V2exObject.Topic
  onRowPress?: (topic: V2exObject.Topic) => void
  containerStyle?: ViewStyle
}) => {
  const { theme } = useTheme()

  return (
    <TouchableOpacity
      style={[styles.containerWraper(theme), containerStyle]}
      onPress={() => {
        if (!onRowPress) return
        onRowPress(topic)
      }}>
      <View style={styles.container(theme)}>
        <View style={styles.top(theme)}>
          {topic.member && (
            <Avatar
              username={topic.member.username}
              style={styles.avatar(theme)}
              size={32}
              source={{ uri: topic.member.avatar_normal }}
            />
          )}
          <View style={styles.topRight(theme)}>
            {topic.member && (
              <Pressable
                onPress={() => {
                  NavigationService.navigate(ROUTES.Profile, { username: topic.member?.username })
                }}>
                <Text>{topic.member.username}</Text>
              </Pressable>
            )}
            <View style={styles.summary(theme)}>
              {topic.node && <Text style={[styles.node(theme), styles.attrText(theme)]}>{topic.node.title}</Text>}
              {topic.last_reply_by.length > 0 && (
                <View style={styles.attr(theme)}>
                  <Image style={styles.attrIcon(theme)} source={theme.assets.images.icons.personCycleGrey} />
                  <Pressable
                    onPress={() => {
                      NavigationService.navigate(ROUTES.Profile, { username: topic.last_reply_by })
                    }}>
                    <Text style={styles.attrText(theme)}>{topic.last_reply_by}</Text>
                  </Pressable>
                </View>
              )}
              <View style={styles.attr(theme)}>
                <Image style={styles.attrIcon(theme)} source={theme.assets.images.icons.timeCycleGrey} />
                <Text style={styles.attrText(theme)}>{dayjs(topic.last_touched * 1000).fromNow()}</Text>
              </View>
              <View style={styles.attr(theme)}>
                <Image style={styles.attrIcon(theme)} source={theme.assets.images.icons.moreCycleGrey} />
                <Text style={styles.attrText(theme)}>{topic.replies}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <Text style={styles.title(theme)}>{topic.title}</Text>
    </TouchableOpacity>
  )
}

/**
 * @description styles.settings(theme)
 */
const styles = {
  containerWraper: (theme: ITheme): ViewStyle => ({
    marginVertical: theme.spacing.small
  }),
  container: (theme: ITheme): ViewStyle => ({
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }),
  top: (theme: ITheme): ViewStyle => ({
    flexDirection: 'row'
  }),
  avatar: (theme: ITheme): ImageStyle => ({
    marginRight: theme.spacing.large
  }),
  topRight: (theme: ITheme): ViewStyle => ({
    justifyContent: 'space-between'
  }),
  summary: (theme: ITheme): ViewStyle => ({
    flexDirection: 'row',
    alignItems: 'center'
  }),
  title: (theme: ITheme): TextStyle => ({
    ...theme.typography.subheadingText,
    marginTop: theme.spacing.small
  }),
  node: (theme: ITheme): ViewStyle => ({
    marginRight: theme.spacing.small,
    marginLeft: 0
  }),
  attr: (theme: ITheme): ViewStyle => ({
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: theme.spacing.small
  }),
  attrIcon: (theme: ITheme): ImageStyle => ({
    width: theme.typography.captionText.fontSize,
    height: theme.typography.captionText.fontSize
  }),
  attrText: (theme: ITheme): TextStyle => ({
    fontSize: theme.typography.captionText.fontSize ?? 12 - 2,
    color: theme.colors.secondary,
    marginLeft: 2
  })
}

export default TopicItem
