/**
 * Created by leon<silenceace@gmail.com> on 22/04/28.
 */
import { Spinner, useToast } from '@src/components'
import { useTopic } from '@src/hooks/useTopic'
import { translate } from '@src/i18n'
import { ROUTES, TopicDetailScreenProps as ScreenProps } from '@src/navigation'
import { SylCommon, useTheme } from '@src/theme'
import React, { useEffect } from 'react'
import { ScrollView, View } from 'react-native'
import { HeaderButton, SetStatusBar, TopicInfo, TopicReplay } from '../components'
const TopicDetail = ({ route, navigation }: ScreenProps) => {
  const { theme } = useTheme()
  const { topic } = useTopic({ topicId: route.params.topicId })
  const { showMessage } = useToast()

  const underConstruction = () => {
    showMessage({
      type: 'error',
      text2: translate('label.underConstruction')
    })
  }

  useEffect(() => {
    navigation.setOptions({
      title: !topic ? translate(`router.${ROUTES.TopicDetail}`) : `${topic.node?.title}`,
      headerRight: () => {
        return (
          <>
            <HeaderButton source={theme.assets.images.icons.header.star} onPress={underConstruction} />
          </>
        )
      }
    })
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
