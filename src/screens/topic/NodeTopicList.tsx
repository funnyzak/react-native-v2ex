/**
 * Created by Leon<silenceace@gmail.com> at 2022-03-04 19:20:02.
 * Last modified at 2022-04-20 11:16:10
 */

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
