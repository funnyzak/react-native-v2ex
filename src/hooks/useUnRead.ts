/**
 * Created by leon<silenceace@gmail.com> on 22/2/25.
 */

import { useSelector } from 'react-redux'
import { RootState } from '@src/store'

export const useUnRead = () => {
  const { unread } = useSelector((state: RootState) => {
    return state.notification
  })

  return { unread }
}
