import { V2exAPI, V2exObject } from '../../types'

export default (v2ex: V2exAPI.V2ex): V2exAPI.Reply => ({
  /**
   * Get topic replies
   * @param topic_id : topic id
   * @param page : page num
   */
  pager: (topic_id: number, page: number): Promise<V2exObject.TopicReply[]> =>
    v2ex.get<V2exObject.TopicReply[]>(`/topics/${topic_id}/replies?p=${page}`, undefined, undefined, undefined, 'v2'),

  /**
   * Get topic replies
   * @param topic_id : topic id
   */
  replies: (topic_id: number): Promise<V2exObject.TopicReply[]> =>
    v2ex.get<V2exObject.TopicReply[]>(
      `/replies/show.json?topic_id=${topic_id}`,
      undefined,
      undefined,
      undefined,
      undefined
    )
})
