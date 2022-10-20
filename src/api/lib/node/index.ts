import { AppAPI, APPDataObject } from '../../types'

export default (v2ex: AppAPI.APP): AppAPI.Node => ({
  get: (id: string | number, version: AppAPI.API_VERSION): Promise<APPDataObject.Node> =>
    v2ex.get<APPDataObject.Node>(
      version === 'v2' ? `/nodes/${id}` : `/nodes/show.json?${typeof id === 'string' ? 'name' : 'id'}=${id}`,
      undefined,
      undefined,
      undefined,
      version
    ),

  all: () => v2ex.get<APPDataObject.Node[]>('/nodes/all.json', undefined, undefined, undefined, undefined)
})
