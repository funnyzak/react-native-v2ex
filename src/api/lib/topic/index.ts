/**
 * Created by Leon<silenceace@gmail.com> at 2022-10-20 17:25:36.
 * Last modified at 2022-10-21 14:31:58
 */

import { AppAPI, AppObject } from '../../types'
export default (v2ex: AppAPI.APP): AppAPI.TopicAPI => ({
  pager: (name = 'python', page: number = 1) =>
    v2ex.get<AppObject.Topic[]>(`/nodes/${name}/topics?p=${page}`, undefined, undefined, undefined, 'v2'),
  /**
   * get node topic by api version 1
   * @param name : node name
   */
  topics: (name: number | string = 'python', get_type: 'username' | 'node_id' | 'node_name' | 'id') =>
    v2ex.get<AppObject.Topic[]>(`/topics/show.json?${get_type}=${name}`, undefined, undefined, undefined, undefined),
  /**
   * Get latest topic list by api version 1
   */
  latestTopics: () => v2ex.get<AppObject.Topic[]>('/topics/latest.json', undefined, undefined, undefined, undefined),
  /**
   * Get hot topic list by api version 1
   */
  hotTopics: () => v2ex.get<AppObject.Topic[]>('/topics/hot.json', undefined, undefined, undefined, undefined),
  /**
   * Get topic info by topic id
   * @param id : topic id
   */
  topic: (id: number) => v2ex.get<AppObject.Topic>(`/topics/${id}`, undefined, undefined, undefined, 'v2')
})
