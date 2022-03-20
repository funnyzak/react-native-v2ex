import { V2exAPI, V2exObject } from '../../types'

export default (v2ex: V2exAPI.V2ex): V2exAPI.Topic => ({
  /**
   * pager note topic list by api version 2
   * @param name : node name
   */
  pager: (name = 'python', page: number = 1) =>
    v2ex.get<V2exObject.Topic[]>(`/nodes/${name}/topics?p=${page}`, undefined, undefined, undefined, 'v2'),

  /**
   * get node topic by api version 1
   * @param name : node name
   */
  topics: (name: number | string = 'python', get_type: 'username' | 'node_id' | 'node_name' | 'id') =>
    v2ex.get<V2exObject.Topic[]>(`/topics/show.json?${get_type}=${name}`, undefined, undefined, undefined, undefined),

  /**
   * Get latest topic list by api version 1
   */
  latestTopics: () => v2ex.get<V2exObject.Topic[]>('/topics/latest.json', undefined, undefined, undefined, undefined),
  /**
   * Get hot topic list by api version 1
   */
  hotTopics: () => v2ex.get<V2exObject.Topic[]>('/topics/hot.json', undefined, undefined, undefined, undefined),

  /**
   * Get topic info by topic id
   * @param id : topic id
   */
  topic: (id: number) => v2ex.get<V2exObject.Topic>(`/topics/${id}`, undefined, undefined, undefined, 'v2')
})
