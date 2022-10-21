import { AppAPI, AppObject } from '../../types'

export default (v2ex: AppAPI.APP): AppAPI.ReplyAPI => ({
  /**
   * Get topic replies
   * @param topic_id : topic id
   * @param page : page num
   */
  pager: (topic_id: number, page: number): Promise<AppObject.TopicReply[]> =>
    v2ex.get<AppObject.TopicReply[]>(`/topics/${topic_id}/replies?p=${page}`, undefined, undefined, undefined, 'v2'),

  /**
   * Get topic replies
   * @param topic_id : topic id
   */
  replies: (topic_id: number): Promise<AppObject.TopicReply[]> =>
    v2ex.get<AppObject.TopicReply[]>(
      `/replies/show.json?topic_id=${topic_id}`,
      undefined,
      undefined,
      undefined,
      undefined
    )
})
