import React, { useState, useEffect, useMemo } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, ViewStyle, TextStyle, RefreshControl } from 'react-native'

import { translate } from '@src/i18n'
import { useTheme } from '@src/theme'
import { IState, ITheme, V2exObject } from '@src/types'
import { TopicList } from '../components'
import { Text, Spinner } from '@src/components'
import { NodeTopicsScreenProps as ScreenProps, ROUTES } from '@src/navigation'
import { getNodeTopics } from '@src/actions'

const NodeTopics = ({
  route,
  navigation,
  tabNodeList,
  fetchTopics
}: ScreenProps & {
  tabNodeList: IState.TabNodeState[]
  fetchTopics: (node: string, page: number) => void
}) => {
  const { theme } = useTheme()
  const { error, success, list, nodeTab, refreshing } = useMemo(
    () => tabNodeList.find((v) => v.nodeTab.name === route.params.nodeName) || tabNodeList[0],
    [route, tabNodeList]
  )

  const onRefresh = () => {}

  const onReached = () => {}

  return (
    <View>
      <Text>
        Hello, NodeTopics. {route.params.nodeName} {nodeTab.title}
      </Text>
      <TopicList
        topics={list}
        onRowPress={(item: V2exObject.Topic) => navigation.navigate(ROUTES.TopicDetail, { topicId: item.id.toString() })}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        onEndReached={onReached}
        canLoadMoreContent={true}
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

export default connect(mapStateToProps, { fetchTopics: getNodeTopics })(NodeTopics)
