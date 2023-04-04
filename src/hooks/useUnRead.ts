/**
 * Created by Leon<silenceace@gmail.com> at 2022-02-28 21:31:48.
 * Last modified at 2022-04-19 21:09:58
 */

import { useSelector } from 'react-redux'
import { RootState } from '@src/store'
export const useUnRead = () => {
  const { unread } = useSelector((state: RootState) => {
    return state.notification
  })
  return { unread }
}
