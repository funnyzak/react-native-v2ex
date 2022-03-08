import React, { useState, useCallback, useEffect, useMemo } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, ViewStyle, TextStyle, RefreshControl } from 'react-native'

import { translate } from '@src/i18n'
import { useTheme } from '@src/theme'
import { IState, ITheme, V2exObject } from '@src/types'
import { TopicList } from '../components'
import { Text, Spinner } from '@src/components'
import { NodeTopicsScreenProps as ScreenProps, ROUTES } from '@src/navigation'
import * as Actions from '@src/actions'

const NodeTopics = ({
  route,
  navigation,
  tabNodeList,
  getNodeTopics
}: ScreenProps & {
  tabNodeList: IState.TabNodeState[]
  getNodeTopics: (node: string, page: number) => void
}) => {
  const { theme } = useTheme()
  const { error, success, list, nodeTab, refreshing } = useMemo(
    () => tabNodeList.find((v) => v.nodeTab.name === route.params.nodeName) || tabNodeList[0],
    [route, tabNodeList]
  )
  const fetchTopics = useCallback(
    (page: number = 1) => {
      getNodeTopics(nodeTab.name, 1)
    },
    [nodeTab, getNodeTopics]
  )

  useEffect(() => {
    if (!refreshing) {
      fetchTopics()
    }
  }, [nodeTab, fetchTopics, refreshing])

  const onRefresh = () => {
    fetchTopics()
  }

  const onReached = () => {}

  const itemPress = (item: V2exObject.Topic) => {
    navigation.navigate(ROUTES.TopicDetail, { topicId: item.id.toString() })
  }

  return (
    <View style={{ flex: 1 }}>
      <TopicList
        topics={list}
        onRowPress={itemPress}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        onEndReached={onReached}
        canLoadMoreContent={false}
        searchIndicator={false}
      />
    </View>
  )
}

/**
 * @description styles settings
 */
const styles = {
  container: (theme: ITheme): ViewStyle => ({
    flex: 1
  })
}

const mapStateToProps = ({
  tab: { list }
}: {
  tab: {
    list: IState.TabNodeState[]
  }
}) => {
  return { tabNodeList: list }
}

export default connect(mapStateToProps, { getNodeTopics: Actions.getNodeTopics })(NodeTopics)
