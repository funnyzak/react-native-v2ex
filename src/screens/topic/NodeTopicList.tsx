import React, { useState, useCallback, useEffect } from 'react'
import { RefreshControl } from 'react-native'

import { V2exObject } from '@src/types'
import { TopicList } from '../components'
import { NodeTopicsScreenProps as ScreenProps } from '@src/navigation'
import { useToast } from '@src/components/toast'
import { v2exLib } from '@src/v2ex'

const NodeTopics = ({ route, navigation }: ScreenProps) => {
  const { showMessage } = useToast()

  const [page, setPage] = useState(1)
  const [mounted, setMounted] = useState<boolean>(false)
  const [refreshing, setRefreshing] = useState<boolean>(false)
  const [list, setList] = useState<V2exObject.Topic[] | undefined>(undefined)
  const [hasMore, setHasMore] = useState<boolean>(true)
  const [loadMore, setLoadMore] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const fetchTopics = useCallback(
    (pageNum: number) => {
      if (pageNum === 1) {
        setList(undefined)
      }

      setRefreshing(pageNum === 1)
      setLoadMore(pageNum > 1)

      v2exLib.topic
        .topicsByNode(route.params.nodeName, pageNum)
        .then((rlt: V2exObject.Topic[]) => {
          if (rlt.length === 0) {
            setHasMore(false)
          }

          setRefreshing(false)
          setLoadMore(false)

          setList((list || []).concat(rlt))
        })
        .catch((err) => {
          console.log('fetchTopics error', err)
          showMessage(err.message)
        })
    },
    [route, showMessage, page]
  ) // eslint-disable-line react-hooks/exhaustive-deps

  const onRefresh = () => {
    setPage(1)
    fetchTopics(1)
  }

  if (!mounted) {
    // ..
  }

  useEffect(() => {
    navigation.setOptions({
      title: route.params.nodeTitle
    })
    setPage(1)
  }, [route, navigation])

  useEffect(() => {
    fetchTopics(page)
  }, [page, route])

  const onReached = () => {
    if (hasMore && !loadMore && !refreshing) {
      setPage(page + 1)
    }
  }

  return (
    <TopicList
      topics={list}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      onEndReached={onReached}
      canLoadMoreContent={hasMore}
      searchIndicator={false}
      refreshCallback={onRefresh}
    />
  )
}

export default NodeTopics
