import { V2exAPI, V2exObject } from '../../types'

export default (v2ex: V2exAPI.V2ex): V2exAPI.Node => ({
  get: (id: string | number, version: V2exAPI.API_VERSION): Promise<V2exObject.Node> =>
    v2ex.get<V2exObject.Node>(
      version === 'v2' ? `/nodes/${id}` : `/nodes/show.json?${typeof id === 'string' ? 'name' : 'id'}=${id}`,
      undefined,
      undefined,
      undefined,
      version
    ),

  all: () => v2ex.get<V2exObject.Node[]>('/nodes/all.json', undefined, undefined, undefined, undefined)
})
