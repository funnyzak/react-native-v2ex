import { AppAPI, APPDataObject } from '../../types'

export default (v2ex: AppAPI.APP): AppAPI.Reply => ({
  /**
   * Get topic replies
   * @param topic_id : topic id
   * @param page : page num
   */
  pager: (topic_id: number, page: number): Promise<APPDataObject.TopicReply[]> =>
    v2ex.get<APPDataObject.TopicReply[]>(
      `/topics/${topic_id}/replies?p=${page}`,
      undefined,
      undefined,
      undefined,
      'v2'
    ),

  /**
   * Get topic replies
   * @param topic_id : topic id
   */
  replies: (topic_id: number): Promise<APPDataObject.TopicReply[]> =>
    v2ex.get<APPDataObject.TopicReply[]>(
      `/replies/show.json?topic_id=${topic_id}`,
      undefined,
      undefined,
      undefined,
      undefined
    )
})
