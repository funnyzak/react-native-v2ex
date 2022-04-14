import React, { useState, useCallback, useEffect, useMemo } from 'react'
import { connect } from 'react-redux'
import { View, RefreshControl } from 'react-native'

import { IState, V2exObject } from '@src/types'
import { TopicList } from '../components'
import { NodeTopicsScreenProps as ScreenProps, ROUTES } from '@src/navigation'
import * as Actions from '@src/actions'
import { useToast } from '@src/components/toast'

const NodeTopics = ({
  route,
  navigation,
  tabNodeList,
  getNodeTopics
}: ScreenProps & {
  tabNodeList: IState.TabNodeState[]
  getNodeTopics: (node: string, page: number) => void
}) => {
  const [page, setPage] = useState(1)
  const [mounted, setMounted] = useState<boolean>(false)

  const { showMessage } = useToast()

  if (!mounted) {
    // ...
  }

  const { error, list, nodeTab, refreshing, hasMore, loadMore } = useMemo(
    () => tabNodeList.find((v) => v.nodeTab.name === route.params.nodeName) || tabNodeList[0],
    [tabNodeList, route]
  )

  useEffect(() => {
    setMounted(true)
  }, [])

  const fetchTopics = useCallback(
    (pageNum: number) => {
      getNodeTopics(nodeTab.name, pageNum)
    },
    [nodeTab, getNodeTopics]
  )

  const onRefresh = () => {
    fetchTopics(1)
  }

  useEffect(() => {
    fetchTopics(page)
    navigation.setOptions({
      title: nodeTab.title
    })
  }, [page, nodeTab, fetchTopics, navigation])

  useEffect(() => {
    if (error !== null && error.length > 0) {
      showMessage({
        type: 'error',
        text2: error
      })
    }
  }, [error])

  const onReached = () => {
    if (hasMore && !loadMore && !refreshing) {
      setPage(page + 1)
    }
  }

  const onRowPress = (item: V2exObject.Topic) => {
    // ...
  }

  return (
    <TopicList
      topics={list}
      onRowPress={onRowPress}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      onEndReached={onReached}
      canLoadMoreContent={hasMore}
      searchIndicator={false}
      refreshCallback={onRefresh}
    />
  )
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

export default connect(mapStateToProps, { getNodeTopics: Actions.getHomeNodeTopics })(NodeTopics)
