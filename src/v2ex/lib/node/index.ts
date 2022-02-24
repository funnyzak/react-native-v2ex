import { V2exAPI, V2exObject } from '../../types'

export default (v2ex: V2exAPI.V2ex): V2exAPI.Node => ({
  get: (name: string, version: V2exAPI.API_VERSION) =>
    v2ex.get<V2exObject.Node>(version === 'v2' ? `/nodes/${name}` : `/nodes/show.json?name=${name}`, undefined, undefined, version)
})
