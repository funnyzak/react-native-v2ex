/**
 * Created by Leon<silenceace@gmail.com> at 2022-10-20 17:25:36.
 * Last modified at 2022-10-21 14:31:58
 */

import { AppAPI, AppObject } from '../../types'
export default (v2ex: AppAPI.APP): AppAPI.ReplyAPI => ({
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
