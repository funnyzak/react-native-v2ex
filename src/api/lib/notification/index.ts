import { AppAPI, AppObject } from '../../types'

export default (v2ex: AppAPI.APP): AppAPI.NotificationAPI => ({
  /**
   * Get my latest notifications
   */
  list: (page: number) =>
    v2ex.get<AppObject.Notification[]>(`/notifications?p=${page}`, undefined, undefined, undefined, 'v2'),

  /**
   * Remove notification
   */
  remove: (id: string) => v2ex.delete<any>(`/notifications/${id}`, undefined, undefined, 'v2')
})
