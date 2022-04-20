/**
 * Created by leon<silenceace@gmail.com> on 22/4/20.
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
