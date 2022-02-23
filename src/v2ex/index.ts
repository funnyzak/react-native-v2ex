import _ from 'lodash'
import { MEMBER_TYPE, IV2exAPI, IV2exConfiguration, IV2exResponse, IRequestMethod, IMemberAPI } from './types'
import member from './lib/member'
// import node from './lib/node'
// import notification from './lib/notification'
// import topic from './lib/topic'
import { logError } from '../helper/logger'

/**
 * default configuration
 */
const defaultConfiguration = {
  url: 'https://www.v2ex.com',
  store: 'v2',
  userAgent: 'Starter App Api Library',
  authentication: {
    token: undefined,
    scope: undefined,
    expiration: undefined
  }
}

class V2ex {
  configuration: IV2exConfiguration = defaultConfiguration
  root_path?: string
  token?: string
  member: IMemberAPI = member(this)

  setOptions(options: IV2exConfiguration) {
    this.configuration = { ...defaultConfiguration, ...options }
    this.root_path = `/api/${this.configuration.store}`

    this.member = member(this)

    // this.node = node(this)
    // this.notification = notification(this)
    logError(new Error(JSON.stringify(options)))
  }

  init() {
    if (this.configuration.authentication.token) {
      this.token = this.configuration.authentication.token
      return
    }
    throw new Error('Need Integration Token!')
  }

  setToken(token?: string) {
    this.token = token
  }

  post<T>(path: string, params?: Record<string, string>, type: string = MEMBER_TYPE): Promise<IV2exResponse<T>> {
    return this.send(path, 'POST', undefined, params, type)
  }

  put<T>(path: string, params?: Record<string, string>, type: string = MEMBER_TYPE): Promise<IV2exResponse<T>> {
    return this.send(path, 'PUT', undefined, params, type)
  }

  get<T>(path: string, params?: Record<string, string>, data?: any, type: string = MEMBER_TYPE): Promise<IV2exResponse<T>> {
    return this.send(path, 'GET', params, data, type)
  }

  delete<T>(path: string, params?: Record<string, string>, type: string = MEMBER_TYPE): Promise<IV2exResponse<T>> {
    return this.send(path, 'DELETE', params, undefined, type)
  }

  send<T>(path: string, method: IRequestMethod, params?: Record<string, string>, data?: any, type?: string): Promise<IV2exResponse<T>> {
    let uri = `${this.configuration.url}${this.root_path}${path}`

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
    if (this.token && type === MEMBER_TYPE) {
      headers.Authorization = `Bearer ${this.token}`
    }

    return new Promise<IV2exResponse<any>>((resolve, reject) => {
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

export const v2ex: IV2exAPI = new V2ex()
