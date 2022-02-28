/**
 * Created by leon<silenceace@gmail.com> on 22/2/25.
 */

import { useSelector } from 'react-redux'

export const useUnRead = () => {
  const { unread } = useSelector((state: any) => {
    return state.notification
  })

  return { unread }
}
