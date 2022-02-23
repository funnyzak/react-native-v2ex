import { MEMBER_TYPE, V2exAPI, MemberAPI, MemberTokenDetail, MemberProfile } from '../../types'

const memberAPI = (v2ex: V2exAPI): MemberAPI => ({
  getTokenDetail: () => v2ex.get<MemberTokenDetail>('/token', undefined, undefined, MEMBER_TYPE),
  getProfile: () => v2ex.get<MemberProfile>('/member', undefined, undefined, MEMBER_TYPE)
})

export default memberAPI
