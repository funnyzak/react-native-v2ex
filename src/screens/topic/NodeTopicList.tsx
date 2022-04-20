import { NodeTopicsScreenProps as ScreenProps } from '@src/navigation'
import React, { useEffect } from 'react'
import { FetchTopicCardList } from '../components'

const NodeTopics = ({ route, navigation }: ScreenProps) => {
  useEffect(() => {
    navigation.setOptions({
      title: route.params && route.params.nodeTitle
    })
  }, [route, navigation])

  return <FetchTopicCardList nodeName={route.params.nodeName} />
}

export default NodeTopics
