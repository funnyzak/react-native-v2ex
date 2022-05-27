/**
 * Created by leon<silenceace@gmail.com> on 22/04/28.
 */
import { Spinner } from '@src/components'
import { useTopic } from '@src/hooks/useTopic'
import { translate } from '@src/i18n'
import { ROUTES, TopicDetailScreenProps as ScreenProps } from '@src/navigation'
import { SylCommon, useTheme } from '@src/theme'
import React, { useEffect } from 'react'
import { ScrollView, View } from 'react-native'
import { SetStatusBar, TopicInfo, TopicReplay } from '../components'
import { LikeTopicHeaderButton } from '../components/button'
const TopicDetail = ({ route, navigation }: ScreenProps) => {
  const { theme } = useTheme()
  const { topic } = useTopic({ topicId: route.params.topicId })

  useEffect(() => {
    if (topic) {
      navigation.setOptions({
        title: !topic ? translate(`router.${ROUTES.TopicDetail}`) : `${topic.node?.title}`,
        headerRight: () => <LikeTopicHeaderButton topic={topic} />
      })
    }
  }, [topic, navigation])

  const reanderContent = () => {
    if (!topic) {
      return <Spinner style={{ marginTop: 50 }} />
    }

    return (
      <>
        <SetStatusBar />
        <ScrollView>
          <TopicInfo info={topic} />
          <TopicReplay info={topic} />
        </ScrollView>
      </>
    )
  }

  return <View style={[SylCommon.Layout.fill, SylCommon.View.background(theme)]}>{reanderContent()}</View>
}

export default TopicDetail
