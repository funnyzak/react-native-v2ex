import { V2exAPI, V2exObject } from '../../types'

export default (v2ex: V2exAPI.V2ex): V2exAPI.Notification => ({
  /**
   * Get my latest notifications
   */
  list: (page: number) => v2ex.get<V2exObject.Notification[]>(`/notifications?p=${page}`, undefined, undefined, undefined, 'v2'),

  /**
   * Remove notification
   */
  remove: (id: string) => v2ex.delete<any>(`/notifications/${id}`, undefined, undefined, 'v2')
})
