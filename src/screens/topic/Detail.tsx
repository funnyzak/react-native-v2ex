import React, { useState } from 'react'
import { connect } from 'react-redux'
import { View, ViewStyle, TextStyle } from 'react-native'
import RenderHtml from 'react-native-render-html'

import { translate } from '@src/i18n'
import { useTheme, SylCommon } from '@src/theme'
import { ITheme } from '@src/types'
import { Text, Spinner, useToast, Avatar } from '@src/components'
import { TopicDetailScreenProps as ScreenProps } from '@src/navigation/routes'
import { useTopic } from '@src/hooks/useTopic'
import dayjs from 'dayjs'

const TopicDetail = ({ route, navigation }: ScreenProps) => {
  const { theme } = useTheme()
  const { showMessage } = useToast()
  const { topic } = useTopic({ topicId: route.params.topicId })

  const reanderContent = () => {
    if (!topic) {
      return <Spinner style={{ marginTop: 50 }} />
    }

    navigation.setOptions({ title: topic.title })

    return (
      <>
        <View style={styles.titleContainer(theme)}>
          <Text type="heading">{topic.title}</Text>
        </View>
        <View style={styles.summary(theme)}>
          <Avatar
            username={topic.member?.username}
            size={24}
            source={topic.member ? { uri: topic.member?.avatar_normal } : undefined}
          />
          <Text style={styles.author(theme)}>{topic.member?.username}</Text>
          <Text style={styles.attr(theme)}>{topic.created && dayjs(topic.created * 1000).fromNow()}</Text>
          {topic.replies !== undefined && (
            <Text style={styles.attr(theme)}>{`${topic.replies} ${translate('common.replies')}`}</Text>
          )}
          <Text style={SylCommon.Node.node(theme)}>{topic.node?.name}</Text>
        </View>
        <View style={SylCommon.Divider.item(theme)} />
        <RenderHtml
          source={{ html: topic.content || '<p></p>' }}
          contentWidth={theme.dimens.WINDOW_WIDTH - theme.spacing.large * 2}
        />
      </>
    )
  }

  return <View style={[SylCommon.Layout.fill, SylCommon.View.background(theme)]}>{reanderContent()}</View>
}

/**
 * @description styles settings
 */
const styles = {
  titleContainer: (theme: ITheme): ViewStyle => ({
    flexDirection: 'row'
  }),
  summary: (theme: ITheme): ViewStyle => ({
    marginTop: theme.spacing.medium,
    flexDirection: 'row',
    alignItems: 'center'
  }),
  author: (theme: ITheme): TextStyle => ({
    marginHorizontal: 8,
    fontSize: 14,
    color: theme.colors.captionText
  }),
  attr: (theme: ITheme): TextStyle => ({
    marginRight: 8,
    fontSize: 12,
    color: theme.colors.secondary
  }),
  replies: (theme: ITheme): TextStyle => ({
    fontSize: 14,
    color: theme.colors.secondary,
    marginTop: 40
  })
}

export default connect()(TopicDetail)
