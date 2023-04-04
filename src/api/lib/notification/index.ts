/**
 * Created by Leon<silenceace@gmail.com> at 2022-10-20 17:25:36.
 * Last modified at 2022-10-21 14:31:58
 */

import { AppAPI, AppObject } from '../../types'
export default (v2ex: AppAPI.APP): AppAPI.NotificationAPI => ({
  list: (page: number) =>
    v2ex.get<AppObject.Notification[]>(`/notifications?p=${page}`, undefined, undefined, undefined, 'v2'),
  /**
   * Remove notification
   */
  remove: (id: string) => v2ex.delete<any>(`/notifications/${id}`, undefined, undefined, 'v2')
})
