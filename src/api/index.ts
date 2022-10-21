import _ from 'lodash'
import { AppAPI, AppObject } from './types'
import member from './lib/member'
import node from './lib/node'
import notification from './lib/notification'
import topic from './lib/topic'
import reply from './lib/reply'

import { logError } from '../helper/logger'

/**
 * default configuration
 */
const defaultConfiguration = {
  url: 'https://www.v2ex.com',
  store: 'api',
  userAgent: 'V2EX API Library',
  authentication: {
    token: undefined,
    scope: undefined,
    expiration: undefined
  }
}

class V2ex {
  configuration: AppAPI.APIConfiguration = defaultConfiguration
  root_path?: string
  token?: string
  reply: AppAPI.ReplyAPI = reply(this)
  member: AppAPI.MemberAPI = member(this)
  node: AppAPI.NodeAPI = node(this)
  topic: AppAPI.TopicAPI = topic(this)
  notification: AppAPI.NotificationAPI = notification(this)

  constructor(options?: AppAPI.APIConfiguration) {
    if (options) {
      this.setOptions(options)
    }
    this.init()
  }

  setOptions(options: AppAPI.APIConfiguration) {
    this.configuration = _.merge(this.configuration, options)
    this.root_path = `/${this.configuration.store}`

    this.member = member(this)
    this.node = node(this)
    this.notification = notification(this)
    this.topic = topic(this)

    logError(JSON.stringify(options))
  }

  init() {
    if (this.configuration.authentication.token) {
      this.token = this.configuration.authentication.token
      return
    }
  }

  setToken(token?: string) {
    this.token = token || this.configuration.authentication.token
  }

  setUserAgent(userAgent?: string) {
    this.configuration.userAgent = userAgent || this.configuration.userAgent
  }

  siteInfo() {
    return this.get<AppObject.SiteInfo>('/site/info.json', undefined, undefined, undefined)
  }

  siteStat() {
    return this.get<AppObject.SiteStat>('/site/stats.json', undefined, undefined, undefined)
  }

  post<T>(
    path: string,
    headers?: { [name: string]: string },
    params?: Record<string, string>,
    version?: AppAPI.API_VERSION
  ): Promise<T> {
    return this.send<T>(path, 'POST', headers, undefined, params, version)
  }

  put<T>(
    path: string,
    headers?: { [name: string]: string },
    params?: Record<string, string>,
    version?: AppAPI.API_VERSION
  ): Promise<T> {
    return this.send<T>(path, 'PUT', headers, undefined, params, version)
  }

  get<T>(
    path: string,
    headers?: { [name: string]: string },
    params?: Record<string, string>,
    data?: any,
    version?: AppAPI.API_VERSION
  ): Promise<T> {
    return this.send<T>(path, 'GET', headers, params, data, version)
  }

  delete<T>(
    path: string,
    headers?: { [name: string]: string },
    params?: Record<string, string>,
    version?: AppAPI.API_VERSION
  ): Promise<T> {
    return this.send<T>(path, 'DELETE', headers, params, undefined, version)
  }

  send<T>(
    path: string,
    method: AppAPI.HttpMethod,
    headers?: { [name: string]: string },
    params?: Record<string, string>,
    data?: any,
    version?: AppAPI.API_VERSION
  ): Promise<T> {
    let uri = `${this.configuration.url}${this.root_path}${version === 'v2' ? '/v2' : ''}${path}`

    if (params) {
      let separator = '?'
      Object.keys(params).forEach((key) => {
        uri += `${separator}${key}=${params[key]}`
        separator = '&'
      })
    }

    let _headers: { [name: string]: string } = {
      'User-Agent': this.configuration.userAgent || 'Starter App Api Library',
      'Content-Type': 'application/json'
    }

    if (version === 'v2' && !this.token) {
      throw new Error('Need Integration Token!')
    }

    if (this.token && version === 'v2') {
      _headers.Authorization = `Bearer ${this.token}`
    }

    headers = _.merge(_headers, headers)

    return new Promise<T>((resolve, reject) => {
      fetch(uri, { method, headers, body: JSON.stringify(data) })
        .then((response: Response) => {
          if (response.ok) {
            return response.json()
          }

          if ([404].includes(response.status)) {
            return reject(new Error('No http resource found.'))
          }

          // if ([403].includes(response.status)) {
          //   return response.json().then((errorResponse) => {
          //     reject(errorResponse)
          //   })
          // }

          // Possible 401 or other network error
          return response.json().then((errorResponse) => {
            reject(errorResponse)
          })
        })
        .then((responseData) => {
          if (responseData) {
            if (version === 'v2') {
              const res = responseData as AppAPI.Response<T>
              return resolve(res.result)
            }
            resolve(responseData)
          }
        })
        .catch((error) => {
          logError(error)
          const customError = this.getErrorMessageForResponse(error)
          reject(new Error(customError))
        })
    })
  }

  getErrorMessageForResponse(_data: any) {
    const params = _data.parameters
    let { message } = _data
    if (typeof params !== 'undefined') {
      if (Array.isArray(params) && params.length > 0) {
        _data.parameters.forEach((item: string, index: number) => {
          message = message.replace(`%${index + 1}`, item)
        })
        return message
      }
      _.forEach(params, (value, name) => {
        message = message.replace(`%${name}`, value)
      })
    }
    return message
  }
}

const ApiLib: AppAPI.APP = new V2ex()

export { ApiLib }
