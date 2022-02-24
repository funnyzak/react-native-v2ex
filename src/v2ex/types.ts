export declare module V2exAPI {
  export type API_VERSION = undefined | 'v2'

  /**
   * V2ex Response
   */
  export interface V2exResponse<T> {
    success: boolean
    message: string
    result: T
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
    post<T>(path: string, params?: Record<string, string>, version?: API_VERSION): Promise<T>
    put<T>(path: string, params?: Record<string, string>, version?: API_VERSION): Promise<T>
    get<T>(path: string, params?: Record<string, string>, data?: any, version?: API_VERSION): Promise<T>
    delete<T>(path: string, params?: Record<string, string>, version?: API_VERSION): Promise<T>
    send<T>(path: string, method: string, params?: Record<string, string>, data?: any, version?: API_VERSION): Promise<T>
    getErrorMessageForResponse(data: any): string
  }

  export interface MemberAPI {
    /**
     * Get my token info
     */
    token: () => Promise<V2exObject.MToken>

    /**
     * Get my profile
     */
    mime: () => Promise<V2exObject.Member>

    /**
     * Get user profile
     */
    profile: (id: string | number) => Promise<V2exObject.Member>
  }

  export interface NodeAPI {
    /**
     * Get node info by node name
     * @param name
     * @param version
     */
    get(name: string, version: API_VERSION): Promise<V2exObject.Node>
  }

  export interface NotificationAPI {
    /**
     * Get my latest notifications
     */
    list: (page: number) => Promise<V2exObject.Notification[]>

    /**
     * Remove notification
     */
    remove: (id: string) => Promise<boolean>
  }

  export interface TopicAPI {
    /**
     *  Get node topic list
     * @param name : node name
     */
    topicsByNode(name: string): Promise<V2exObject.Topic[]>

    /**
     * Get latest topic list
     */
    latestTopics: () => Promise<V2exObject.Topic[]>

    /**
     * Get hot topic list
     */
    hotTopics: () => Promise<V2exObject.Topic[]>

    /**
     * Get topic info by topic id
     * @param id : topic id
     */
    get(id: string): Promise<V2exObject.Topic>

    /**
     * Get topic replies
     * @param topic_id : topic id
     * @param page : page num
     */
    replies(topic_id: string, page: number): Promise<V2exObject.TopicReplay[]>
  }
}
export declare module V2exObject {
  /**
   * Member Token Info
   */
  export interface MToken {
    token: string
    scope: string
    expiration: number
    good_for_days: number
    total_user: number
    last_used: number
    created: number
  }

  /**
   * Member Profile
   */
  export interface Member {
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
    member: Member
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

  export interface TopicReplay {
    id: number
    content: string
    content_rendered: string
    created: number
    member: Member
  }

  export interface Notification {}
}
