/**
 * Created by leon<silenceace@gmail.com> on 22/04/28.
 */
import { Placeholder, Spinner, useToast } from '@src/components'
import { translate } from '@src/i18n'
import { ITheme, SylCommon, useTheme } from '@src/theme'
import { V2exObject } from '@src/types'
import { v2exLib } from '@src/v2ex'
import React, { useCallback, useEffect, useState } from 'react'
import { FlatList, RefreshControl, StyleProp, View, ViewStyle } from 'react-native'
import TopicReplayItem from './TopicReplayItem'

/**
 * TopicReplayList props
 */
export interface TopicReplayListProps {
  containerStyle?: StyleProp<ViewStyle>

  topicId: number
}

const TopicReplayList: React.FC<TopicReplayListProps> = ({ containerStyle, topicId }: TopicReplayListProps) => {
  const { theme } = useTheme()
  const { showMessage } = useToast()
  const [refreshing, setRefreshing] = useState<boolean>(false)
  const [list, setList] = useState<V2exObject.TopicReply[] | undefined>(undefined)

  const fetchReplay = useCallback(() => {
    v2exLib.reply.replies(topicId).then(
      (res) => {
        setList(res)
        setRefreshing(false)
      },
      (err) => {
        showMessage(translate('error.network'))
        setRefreshing(false)
      }
    )
  }, [topicId, v2exLib])

  useEffect(() => {
    onRefresh()
  }, [])

  const onRefresh = () => {
    setRefreshing(true)
    setList(undefined)
    fetchReplay()
  }

  const renderItemRow = ({ item }: { item: V2exObject.TopicReply }) =>
    !item || item === null ? null : <TopicReplayItem containerStyle={styles.itemContainer(theme)} info={item} />

  const renderItemSeparator = () => <View style={styles.itemSeparator(theme)} />

  const renderContent = () => {
    if (!list) {
      return <Spinner style={{ marginTop: 50 }} />
    }

    if (list.length > 0) {
      return (
        <FlatList
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
          data={list}
          renderItem={renderItemRow}
          keyExtractor={(item, index) => index.toString()}
          numColumns={1}
          horizontal={false}
          key={'ONE COLUMN'}
          maxToRenderPerBatch={10}
          initialNumToRender={10}
          ItemSeparatorComponent={renderItemSeparator}
        />
      )
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
  itemContainer: (theme: ITheme): ViewStyle => ({}),
  itemSeparator: (theme: ITheme) => ({
    height: 0
  })
}

export default TopicReplayList
