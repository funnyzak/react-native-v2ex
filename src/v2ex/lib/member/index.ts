import { AppAPI, APPDataObject } from '../../types'

export default (v2ex: AppAPI.APP): AppAPI.Member => ({
  myToken: () => v2ex.get<APPDataObject.MToken>('/token', undefined, undefined, undefined, 'v2'),

  myProfile: () => v2ex.get<APPDataObject.Member>('/member', undefined, undefined, undefined, 'v2'),

  profile: (id: string | number) =>
    v2ex.get<APPDataObject.Member>(
      `/members/show.json?${typeof id === 'string' ? 'username' : 'id'}=${id}`,
      undefined,
      undefined,
      undefined,
      undefined
    ),

  token: (token: string) =>
    v2ex.get<APPDataObject.MToken>(
      `/token`,
      {
        Authorization: `Bearer ${token}`
      },
      undefined,
      undefined,
      'v2'
    )
})
