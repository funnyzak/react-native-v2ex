import _ from 'lodash'
import { V2exAPI, V2exObject } from './types'
import member from './lib/member'
import node from './lib/node'
import notification from './lib/notification'
import topic from './lib/topic'
import { logError } from '../helper/logger'

/**
 * default configuration
 */
const defaultConfiguration = {
  url: 'https://www.v2ex.com',
  store: 'api',
  userAgent: 'V2ex App API Library',
  authentication: {
    token: undefined,
    scope: undefined,
    expiration: undefined
  }
}

class V2ex {
  configuration: V2exAPI.Configuration = defaultConfiguration
  root_path?: string
  token?: string
  member: V2exAPI.Member = member(this)
  node: V2exAPI.Node = node(this)
  topic: V2exAPI.Topic = topic(this)
  notification: V2exAPI.Notification = notification(this)

  setOptions(options: V2exAPI.Configuration) {
    this.configuration = _.merge(this.configuration, options)
    this.root_path = `/${this.configuration.store}`

    this.member = member(this)
    this.node = node(this)
    this.notification = notification(this)
    this.topic = topic(this)

    logError(new Error(JSON.stringify(options)))
  }

  init() {
    if (this.configuration.authentication.token) {
      this.token = this.configuration.authentication.token
      return
    }
  }

  setToken(token?: string) {
    this.token = token
  }

  siteInfo() {
    return this.get<V2exObject.SiteInfo>('/site/info.json', undefined, undefined, undefined)
  }

  siteStat() {
    return this.get<V2exObject.SiteStat>('/site/stats.json', undefined, undefined, undefined)
  }

  post<T>(path: string, params?: Record<string, string>, version?: V2exAPI.API_VERSION): Promise<T> {
    return this.send<T>(path, 'POST', undefined, params, version)
  }

  put<T>(path: string, params?: Record<string, string>, version?: V2exAPI.API_VERSION): Promise<T> {
    return this.send<T>(path, 'PUT', undefined, params, version)
  }

  get<T>(path: string, params?: Record<string, string>, data?: any, version?: V2exAPI.API_VERSION): Promise<T> {
    return this.send<T>(path, 'GET', params, data, version)
  }

  delete<T>(path: string, params?: Record<string, string>, version?: V2exAPI.API_VERSION): Promise<T> {
    return this.send<T>(path, 'DELETE', params, undefined, version)
  }

  send<T>(path: string, method: V2exAPI.Method, params?: Record<string, string>, data?: any, version?: V2exAPI.API_VERSION): Promise<T> {
    let uri = `${this.configuration.url}${this.root_path}${version === 'v2' ? '/v2' : ''}${path}`

    if (params) {
      let separator = '?'
      Object.keys(params).forEach((key) => {
        uri += `${separator}${key}=${params[key]}`
        separator = '&'
      })
    }

    let headers: { [name: string]: string } = {
      'User-Agent': this.configuration.userAgent || 'Starter App Api Library',
      'Content-Type': 'application/json'
    }

    if (version === 'v2' && !this.token) {
      throw new Error('Need Integration Token!')
    }

    if (this.token && version === 'v2') {
      headers.Authorization = `Bearer ${this.token}`
    }

    return new Promise<T>((resolve, reject) => {
      console.log({
        uri,
        method,
        headers,
        data,
        ...params
      })
      fetch(uri, { method, headers, body: JSON.stringify(data) })
        .then((response) => {
          console.log(response)
          if (response.ok) {
            return response.json()
          }
          // Possible 401 or other network error
          return response.json().then((errorResponse) => {
            logError(errorResponse)
            reject(errorResponse)
          })
        })
        .then((responseData) => {
          // debugger;
          console.log(responseData)

          if (version === 'v2') {
            const res = responseData as V2exAPI.V2Response<T>
            return resolve(res.result)
          }
          resolve(responseData)
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

const v2exLib: V2exAPI.V2ex = new V2ex()

export { v2exLib }
