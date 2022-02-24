import { V2exAPI, V2exObject } from '../../types'

const memberAPI = (v2ex: V2exAPI.V2ex): V2exAPI.MemberAPI => ({
  getTokenDetail: () => v2ex.get<V2exObject.MemberToken>('/v2/token', undefined, undefined, V2exAPI.MEMBER_TYPE),
  getProfile: () => v2ex.get<V2exObject.MemberProfile>('/member', undefined, undefined, V2exAPI.MEMBER_TYPE)
})

export default memberAPI
