export declare module V2exAPI {
  export type API_VERSION = undefined | 'v2'

  /**
   * V2ex Version 2.0 Response
   */
  export interface V2Response<T> {
    success: boolean
    message: string
    result: T
  }

  /**
   * V2ex API Configuration
   */
  export interface Configuration {
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
  export interface V2ex {
    configuration: Configuration
    root_path?: string
    token?: string
    node: Node
    topic: Topic
    notification: Notification
    member: Member
    reply: Reply
    setOptions: (options: Configuration) => void
    init: () => void
    setToken(token?: string): void
    setUserAgent(userAgent?: string): void
    siteInfo: () => Promise<V2exObject.SiteInfo>
    siteStat: () => Promise<V2exObject.SiteStat>
    post<T>(
      path: string,
      headers?: { [name: string]: string },
      params?: Record<string, string>,
      version?: API_VERSION
    ): Promise<T>
    put<T>(
      path: string,
      headers?: { [name: string]: string },
      params?: Record<string, string>,
      version?: API_VERSION
    ): Promise<T>
    get<T>(
      path: string,
      headers?: { [name: string]: string },
      params?: Record<string, string>,
      data?: any,
      version?: API_VERSION
    ): Promise<T>
    delete<T>(
      path: string,
      headers?: { [name: string]: string },
      params?: Record<string, string>,
      version?: API_VERSION
    ): Promise<T>
    send<T>(
      path: string,
      method: string,
      headers?: { [name: string]: string },
      params?: Record<string, string>,
      data?: any,
      version?: API_VERSION
    ): Promise<T>
    getErrorMessageForResponse(data: any): string
  }
  export interface Member {
    /**
     * Get my token info
     */
    myToken: () => Promise<V2exObject.MToken>

    /**
     * Get my profile
     */
    myProfile: () => Promise<V2exObject.Member>

    /**
     * Get user profile
     */
    profile: (id: string | number) => Promise<V2exObject.Member>

    /**
     * check user token
     */
    token: (token: string) => Promise<V2exObject.MToken>
  }

  export interface Node {
    /**
     * Get node info by node name/id
     * @param node id or node name
     * @param version
     */
    get(id: string | number, version: API_VERSION): Promise<V2exObject.Node>

    /**
     * Get All nodes by api version 1
     */
    all(): Promise<V2exObject.Node[]>
  }

  export interface Notification {
    /**
     * Get my latest notifications
     */
    list: (page: number) => Promise<V2exObject.Notification[]>

    /**
     * Remove notification
     */
    remove: (id: string) => Promise<void>
  }

  export interface Topic {
    /**
     * Get latest topic list by api version 1
     */
    latestTopics: () => Promise<V2exObject.Topic[]>

    /**
     * Get hot topic list by api version 1
     */
    hotTopics: () => Promise<V2exObject.Topic[]>

    /**
     * Get topic info by topic id use api verson 1
     * @param id : topic id
     * @param version : api version
     */
    topic(id: number, api_version: API_VERSION): Promise<V2exObject.Topic>

    /**
     *  pager note topic list by api version 2
     * @param name : node name
     */
    pager(name: string, page: number): Promise<V2exObject.Topic[]>

    /**
     * get node topic by api version 1
     * @param id : topic id
     * @param get_type :  'username' | 'node_id' | 'node_name'
     */
    topics(id: string | number, get_type: 'username' | 'node_id' | 'node_name' | 'id'): Promise<V2exObject.Topic[]>
  }

  export interface Reply {
    /**
     * Get topic replies by api version 1
     * @param topic_id : topic id
     * @param page : page number
     */
    pager(topic_id: number, page: number): Promise<V2exObject.TopicReply[]>

    /**
     * Get topic replies
     * @param topic_id : topic id
     */
    replies(topic_id: number): Promise<V2exObject.TopicReply[]>
  }
}
export declare module V2exObject {
  export interface SiteInfo {
    title: string
    slogan: string
    description: string
    domain: string
  }

  export interface SiteStat {
    topic_max: number
    member_max: number
  }

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
    twitter?: string
    psn?: string
    github?: string
    telegram?: string
    btc?: string
    location?: string
    tagline?: string
    bio?: string
    avatar?: string
    avatar_mini?: string
    avatar_normal?: string
    avatar_large?: string
    avatar_xlarge?: string
    avatar_xxlarge?: string
    avatar_xxxlarge?: string
    created: number
    last_modified?: number
    status?: string
  }

  export interface Node {
    avatar_large?: string
    name: string
    avatar_normal?: string
    title: string
    url?: string
    topics?: number
    footer?: string
    header?: string
    title_alternative?: string
    avatar_mini?: string
    stars?: number
    aliases?: any[]
    root?: boolean
    id?: number
    parent_node_name?: string
    last_modified?: number
    created?: number
  }

  export interface Topic {
    node?: Node
    member?: Member
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

  export interface TopicReply {
    id: number
    content: string
    content_rendered: string
    created: number
    member: Member
  }

  export interface Notification {
    id: number
    member_id: number
    for_member_id: number
    text: string
    payload: string
    payload_rendered: string
    created: number
    member: {
      username: string
    }
  }
}
