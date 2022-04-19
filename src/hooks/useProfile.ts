/**
 * Created by leon<silenceace@gmail.com> on 22/4/7.
 */
import { useEffect, useState } from 'react'
import { V2exObject, IState } from '../types'
import { useAppSelector } from '.'
import { RootState } from '@src/store'

export const useProfile = ({ username }: { username: string | number }) => {
  const [member, setMember] = useState<V2exObject.Member | undefined>(undefined)
  const v2ex = useAppSelector((_state: RootState) => _state.app.v2ex)

  useEffect(() => {
    const fetchMember = async () => {
      const _member = await v2ex?.member.profile(username)
      if (_member) {
        setMember(_member)
      }
    }

    if (username) {
      fetchMember()
    }
  }, [username, v2ex])

  return {
    profile: member
  }
}
