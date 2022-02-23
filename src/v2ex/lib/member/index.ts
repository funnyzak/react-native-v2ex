import { MEMBER_TYPE, IV2exAPI, IMemberAPI, IMemberTokenDetail, IMemberProfile } from '../../types'

const memberAPI = (v2ex: IV2exAPI): IMemberAPI => ({
  getTokenDetail: () => v2ex.get<IMemberTokenDetail>('/token', undefined, undefined, MEMBER_TYPE),
  getProfile: () => v2ex.get<IMemberProfile>('/member', undefined, undefined, MEMBER_TYPE)
})

export default memberAPI
