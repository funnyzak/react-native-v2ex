/**
 * Created by Leon<silenceace@gmail.com> at 2022-04-20 20:13:53.
 * Last modified at 2022-04-20 20:13:53
 */

import { RootState } from '@src/store'
import { useAppSelector } from '.'
export const useSession = () => {
  const member = useAppSelector((_state: RootState) => _state.member)
  return {
    logined: member.token,
    profile: member.profile,
    token: member.token
  }
}
