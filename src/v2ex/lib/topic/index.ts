import { V2exAPI, V2exObject } from '../../types'

export default (v2ex: V2exAPI.V2ex): V2exAPI.Topic => ({
  /**
   *  Get node topic list
   * @param name : node name
   */
  topicsByNode: (name = 'python', page: number = 1) =>
    v2ex.get<V2exObject.Topic[]>(`/nodes/${name}/topics?p=${page}`, undefined, undefined, undefined, 'v2'),

  /**
   * Get latest topic list
   */
  latestTopics: () => v2ex.get<V2exObject.Topic[]>('/topics/latest.json', undefined, undefined, undefined, undefined),
  /**
   * Get hot topic list
   */
  hotTopics: () => v2ex.get<V2exObject.Topic[]>('/topics/hot.json', undefined, undefined, undefined, undefined),
  /**

    /**
     * Get topic info by topic id
     * @param id : topic id
     */
  get: (id: string) => v2ex.get<V2exObject.Topic>(`/topics/${id}`, undefined, undefined, undefined, 'v2'),

  /**
   * Get topic replies
   * @param topic_id : topic id
   * @param page : page num
   */
  replies: (topic_id: string, page: number) =>
    v2ex.get<V2exObject.TopicReplay[]>(`/topics/${topic_id}/replies?p=${page}`, undefined, undefined, undefined, 'v2')
})
