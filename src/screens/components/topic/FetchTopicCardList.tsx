/**
 * Created by leon<silenceace@gmail.com> on 22/04/18.
 */

import { useToast } from '@src/components'
import { useMember } from '@src/hooks/useMember'
import { useSession } from '@src/hooks/useSession'
import { NODE_TABS } from '@src/navigation'
import { useTheme } from '@src/theme'
import { V2exObject } from '@src/types'
import { v2exLib } from '@src/v2ex'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { RefreshControl, StyleProp, ViewStyle } from 'react-native'
import { NeedLogin } from '../common'
import TopicCardList from './TopicCardList'

export interface FetchTopicCardListProps {
  /**
   * container style
   */
  containerStyle?: StyleProp<ViewStyle>

  nodeName: string
  v2API?: boolean
  /**
   * Display Style
   */
  displayStyle?: 'simple' | 'full' | 'auto'
}

const FetchTopicCardList: React.FC<FetchTopicCardListProps> = ({
  nodeName,
  v2API = false,
  containerStyle,
  displayStyle
}: FetchTopicCardListProps) => {
  const { theme } = useTheme()
  const { logined } = useSession()
  const { showMessage } = useToast()
  const [page, setPage] = useState(1)
  const [mounted, setMounted] = useState<boolean>(false)
  const [refreshing, setRefreshing] = useState<boolean>(false)
  const [list, setList] = useState<V2exObject.Topic[] | undefined>(undefined)
  const [hasMore, setHasMore] = useState<boolean>(true)
  const [loadMore, setLoadMore] = useState<boolean>(false)
  const specialNode = useMemo(() => [NODE_TABS.LATEST, NODE_TABS.HOT].includes(nodeName), [nodeName])

  useEffect(() => {
    setMounted(true)
  }, [])

  const fetchTopics = useCallback(
    (pageNum: number) => {
      if (v2API && !logined) {
        return
      }

      if (pageNum > 1 && (!v2API || specialNode)) {
        setHasMore(false)
        return
      }

      if (pageNum === 1) {
        setList(undefined)
      }

      setRefreshing(pageNum === 1)
      setLoadMore(pageNum > 1 && v2API)
      ;(specialNode
        ? nodeName === NODE_TABS.LATEST
          ? v2exLib.topic.latestTopics()
          : v2exLib.topic.hotTopics()
        : v2API && logined
        ? v2exLib.topic.pager(nodeName, pageNum)
        : v2exLib.topic.topics(nodeName, 'node_name')
      )
        .then((rlt: V2exObject.Topic[]) => {
          if (rlt.length === 0 || specialNode || !v2API) {
            setHasMore(false)
          }

          setRefreshing(false)
          setLoadMore(false)

          setList((list || []).concat(rlt))
        })
        .catch((err) => {
          showMessage(err.message)
        })
    },
    [nodeName, showMessage, page, v2API, logined]
  ) // eslint-disable-line react-hooks/exhaustive-deps

  const onRefresh = () => {
    setList(undefined)

    setPage(1)
    fetchTopics(1)
  }

  if (!mounted) {
    // ..
  }

  useEffect(() => {
    setPage(1)
  }, [nodeName])

  useEffect(() => {
    fetchTopics(page)
  }, [page, nodeName])

  const onReached = () => {
    if (hasMore && !loadMore && !refreshing) {
      setPage(page + 1)
    }
  }

  return (
    <NeedLogin
      onMount={() => {
        fetchTopics(1)
      }}
      mustLogin={v2API}
      placeholderBackground={theme.colors.surface}>
      <TopicCardList
        containerStyle={containerStyle}
        topics={list}
        displayStyle={displayStyle}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        onEndReached={onReached}
        canLoadMoreContent={hasMore}
        searchIndicator={false}
        refreshCallback={onRefresh}
      />
    </NeedLogin>
  )
}

export default FetchTopicCardList
