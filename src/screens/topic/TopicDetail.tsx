import { Spinner } from '@src/components'
import { useTopic } from '@src/hooks/useTopic'
import { translate } from '@src/i18n'
import { ROUTES, TopicDetailScreenProps as ScreenProps } from '@src/navigation'
import { SylCommon, useTheme } from '@src/theme'
import { ITheme } from '@src/types'
import React, { useEffect } from 'react'
import { ScrollView, TextStyle, View, ViewStyle } from 'react-native'
import { SetStatusBar, TopicInfo } from '../components'
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
          <TopicInfo info={topic} />
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
