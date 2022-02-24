import { V2exAPI, V2exObject } from '../../types'

export default (v2ex: V2exAPI.V2ex): V2exAPI.MemberAPI => ({
  token: () => v2ex.get<V2exObject.MToken>('/token', undefined, undefined, 'v2'),
  mime: () => v2ex.get<V2exObject.Member>('/member', undefined, undefined, 'v2'),
  profile: (id: string | number) =>
    v2ex.get<V2exObject.Member>(`/members/show.json?${typeof id === 'string' ? 'username' : 'id'}=${id}`, undefined, undefined, undefined)
})
