export declare module V2exAPI {
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

  export type RequestMethod =
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
  export interface V2ex {
    configuration: V2exConfiguration
    root_path?: string
    token?: string
    member: MemberAPI
    setOptions: (options: V2exConfiguration) => void
    init: () => void
    setToken(token?: string): void
    post<T>(path: string, params?: Record<string, string>, type?: string): Promise<V2exResponse<T>>
    put<T>(path: string, params?: Record<string, string>, type?: string): Promise<V2exResponse<T>>
    get<T>(path: string, params?: Record<string, string>, data?: any, type?: string): Promise<V2exResponse<T>>
    delete<T>(path: string, params?: Record<string, string>, type?: string): Promise<V2exResponse<T>>
    send<T>(path: string, method: string, params?: Record<string, string>, data?: any, type?: string): Promise<V2exResponse<T>>
    getErrorMessageForResponse(data: any): string
  }

  export interface MemberAPI {
    getTokenDetail: () => Promise<V2exResponse<V2exObject.MemberToken>>
    getProfile: () => Promise<V2exResponse<V2exObject.MemberProfile>>
  }
}
export declare module V2exObject {
  export interface MemberToken {
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
    website: string
    twitter: string
    psn: string
    github: string
    btc: string
    location: string
    tagline: string
    bio: string
    avatar_mini: string
    avatar_normal: string
    avatar_large: string
    avatar_xlarge: string
    avatar_xxlarge: string
    avatar_xxxlarge: string
    created: number
    last_modified: number
    status: string
  }

  export interface Node {
    avatar_large: string
    name: string
    avatar_normal: string
    title: string
    url: string
    topics: number
    footer: string
    header: string
    title_alternative: string
    avatar_mini: string
    stars: number
    aliases: any[]
    root: boolean
    id: number
    parent_node_name: string
  }

  export interface Topic {
    node: Node
    member: MemberProfile
    last_reply_by: string
    last_touched: number
    title: string
    url: string
    created: number
    deleted: number
    content: string
    content_rendered: string
    last_modified: number
    replies: number
    id: number
  }
}
