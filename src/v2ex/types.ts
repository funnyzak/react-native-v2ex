export const MEMBER_TYPE = 'v2ex_member_type'

/**
 * V2ex Response
 */
export interface V2exResponse<T> {
  success: boolean
  message: string
  result?: T
}

/**
 * V2ex API Configuration
 */
export interface V2exConfiguration {
  url?: string
  store?: string
  userAgent?: string
  authentication: {
    token?: string
    scope?: string
    expiration?: number
  }
  extend?: { [name: string]: string | undefined }
}

export type Method =
  | 'get'
  | 'GET'
  | 'delete'
  | 'DELETE'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'
  | 'purge'
  | 'PURGE'
  | 'link'
  | 'LINK'
  | 'unlink'
  | 'UNLINK'

/**
 * V2ex Main API
 */
export interface V2exAPI {
  configuration: V2exConfiguration
  root_path?: string
  token?: string
  member?: any
  setOptions: (options: V2exConfiguration) => void
  init: () => void
  post<T>(path: string, params?: Record<string, string>, type?: string): Promise<V2exResponse<T>>
  put<T>(path: string, params?: Record<string, string>, type?: string): Promise<V2exResponse<T>>
  get<T>(path: string, params?: Record<string, string>, data?: any, type?: string): Promise<V2exResponse<T>>
  delete<T>(path: string, params?: Record<string, string>, type?: string): Promise<V2exResponse<T>>
  send<T>(path: string, method: string, params?: Record<string, string>, data?: any, type?: string): Promise<V2exResponse<T>>
  getErrorMessageForResponse(data: any): string
}

export interface MemberAPI {
  getTokenDetail: () => Promise<V2exResponse<MemberTokenDetail>>
  getProfile: () => Promise<V2exResponse<MemberProfile>>
}

export interface MemberTokenDetail {
  token: string
  scope: string
  expiration: number
  good_for_days: number
  total_user: number
  last_used: number
  created: number
}

export interface MemberProfile {
  id: number
  username: string
  url: string
  website: string | null
  twitter: string | null
  psn: string | null
  btc: string | null
  location: string | null
  tagline: string | null
  bio: string | null
  avatar_mini: string
  avatar_normal: string
  avatar_large: string
  created: number
  status: string
}
