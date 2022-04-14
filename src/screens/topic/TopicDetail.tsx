import { Avatar, Spinner, Text } from '@src/components'
import { useTopic } from '@src/hooks/useTopic'
import { translate } from '@src/i18n'
import { ROUTES, TopicDetailScreenProps as ScreenProps } from '@src/navigation'
import { SylCommon, useTheme } from '@src/theme'
import { ITheme } from '@src/types'
import dayjs from 'dayjs'
import React, { useEffect } from 'react'
import { Pressable, ScrollView, TextStyle, View, ViewStyle } from 'react-native'
import RenderHtml from 'react-native-render-html'
import { SetStatusBar } from '../components'
const TopicDetail = ({ route, navigation }: ScreenProps) => {
  const { theme } = useTheme()
  const { topic } = useTopic({ topicId: route.params.topicId })

  useEffect(() => {
    navigation.setOptions({ title: !topic ? translate(`router.${ROUTES.TopicDetail}`) : `${topic.node?.title}` })
  }, [topic, navigation])

  const reanderContent = () => {
    if (!topic) {
      return <Spinner style={{ marginTop: 50 }} />
    }

    return (
      <>
        <SetStatusBar />
        <ScrollView>
          <View style={styles.textContainer(theme)}>
            <View>
              <Text type="heading">{topic.title}</Text>
            </View>
            <View style={styles.summary(theme)}>
              <Avatar
                username={topic.member?.username}
                size={24}
                source={topic.member ? { uri: topic.member.avatar_normal || topic.member.avatar } : undefined}
              />
              <Text style={styles.author(theme)}>{topic.member?.username}</Text>
              <Text type="label" style={styles.attr(theme)}>
                {topic.created && dayjs(topic.created * 1000).fromNow()}
              </Text>
              {topic.replies !== undefined && (
                <Text style={styles.attr(theme)}>{`${topic.replies} ${translate('common.replies')}`}</Text>
              )}
              <Pressable
                onPress={() => {
                  navigation.navigate(ROUTES.NodeTopics, {
                    nodeName: topic.node?.name || 'hot',
                    nodeTitle: topic.node?.title || 'HOT'
                  })
                }}>
                <Text style={SylCommon.Node.nodeTitle(theme)}>{topic.node?.name}</Text>
              </Pressable>
            </View>
          </View>
          <View style={SylCommon.Divider.item(theme)} />
          <View style={styles.textContainer(theme)}>
            <RenderHtml
              source={{
                html: `<div style="color:${theme.colors.bodyText}">${topic.content_rendered}</div>` || '<p></p>'
              }}
              contentWidth={theme.dimens.WINDOW_WIDTH - theme.spacing.large * 2}
            />
          </View>
        </ScrollView>
      </>
    )
  }

  return <View style={[SylCommon.Layout.fill, SylCommon.View.background(theme)]}>{reanderContent()}</View>
}

/**
 * @description styles settings
 */
const styles = {
  textContainer: (theme: ITheme): ViewStyle => ({
    paddingTop: theme.spacing.small,
    paddingHorizontal: theme.spacing.large
  }),
  summary: (theme: ITheme): ViewStyle => ({
    marginTop: theme.spacing.medium,
    flexDirection: 'row',
    alignItems: 'center'
  }),
  author: (theme: ITheme): TextStyle => ({
    marginHorizontal: 8
  }),
  attr: (theme: ITheme): TextStyle => ({
    marginRight: 8
  })
}

export default TopicDetail
