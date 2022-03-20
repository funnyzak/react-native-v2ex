/**
 * Created by leon<silenceace@gmail.com> on 22/2/25.
 */
import { useEffect, useState } from 'react'
import { V2exObject, IState } from '../types'
import { readTopic } from '../actions'
import { useAppSelector, useAppDispatch } from './'

export const useTopic = ({ topicId }: { topicId: number }) => {
  const [topic, setTopic] = useState<V2exObject.Topic | undefined>(undefined)
  const v2ex = useAppSelector((_state: IState.State) => _state.app.v2ex)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const fetchTopic = async () => {
      const _topics = await v2ex?.topic.topics(topicId, 'id')
      if (_topics?.[0]) {
        dispatch(readTopic(_topics?.[0]) as any)
      }

      setTopic(_topics?.[0])
    }

    if (topicId) {
      fetchTopic()
    }
  }, [topicId, v2ex, dispatch])

  return {
    topic
  }
}
