/**
 * Created by leon<silenceace@gmail.com> on 22/04/28.
 */
import { ApiLib } from '@src/api'
import { Placeholder, Spinner, useToast } from '@src/components'
import { translate } from '@src/i18n'
import { ITheme, useTheme } from '@src/theme'
import { AppObject } from '@src/types'
import React, { useCallback, useEffect, useState } from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'
import Animated, { LightSpeedInLeft } from 'react-native-reanimated'
import TopicReplayItem from './TopicReplayItem'

/**
 * TopicReplayList props
 */
export interface TopicReplayListProps {
  containerStyle?: StyleProp<ViewStyle>

  topicId: number

  refreshCallBack?: (list: AppObject.TopicReply[]) => void
}

const TopicReplayList: React.FC<TopicReplayListProps> = ({
  containerStyle,
  topicId,
  refreshCallBack
}: TopicReplayListProps) => {
  const { theme } = useTheme()
  const { showMessage } = useToast()
  const [refreshing, setRefreshing] = useState<boolean>(false)
  const [list, setList] = useState<AppObject.TopicReply[] | undefined>(undefined)

  const fetchReplay = useCallback(() => {
    ApiLib.reply.replies(topicId).then(
      (res) => {
        setList(res)
        setRefreshing(false)
        refreshCallBack && refreshCallBack(res)
      },
      (_err) => {
        showMessage(translate('error.network'))
        setRefreshing(false)
        refreshCallBack && refreshCallBack([])
      }
    )
  }, [topicId, ApiLib]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    onRefresh()
  }, [])

  const onRefresh = () => {
    setRefreshing(true)
    setList(undefined)
    fetchReplay()
  }

  const renderItemRow = ({ item }: { item: AppObject.TopicReply }) =>
    !item || item === null ? null : (
      <Animated.View key={item.id} entering={LightSpeedInLeft}>
        <TopicReplayItem key={item.id} containerStyle={styles.itemContainer(theme)} info={item} />
      </Animated.View>
    )

  const renderContent = () => {
    if (!list) {
      return <Spinner style={{ marginTop: 50 }} />
    }

    if (list.length > 0) {
      return <View>{list.map((v) => renderItemRow({ item: v }))}</View>
    }
    return (
      <Placeholder
        placeholderText={translate('placeholder.noResult')}
        displayType={'text'}
        buttonText={translate('button.tryAgain')}
        buttonPress={onRefresh}
      />
    )
  }

  return <View style={[styles.container(theme), containerStyle]}>{renderContent()}</View>
}

/**
 * @description styles settings
 */
const styles = {
  container: (theme: ITheme): ViewStyle => ({
    flex: 1
  }),
  itemContainer: (theme: ITheme): ViewStyle => ({})
}

export default TopicReplayList
