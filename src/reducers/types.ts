import { V2exAPI, V2exObject } from '@src/v2ex/types'

export declare module IState {
  /**
   * @description 全局状态
   */
  export interface AppState {
    v2ex: V2exAPI.V2ex
    latestTopics: NodeState
    hotTopics: NodeState
    name: string
    version: string
    icon: string
    aboutUS: {
      author: string
      email: string
      github: string
      wechat: string
    }
    latestVersion?: {
      version: string
      build: number
      features: string
    }
    siteInfo?: V2exObject.SiteInfo
    errorMessage?: Error[]
  }

  /**
   * @description 通用页面状态
   */
  export interface UIState {
    login: {
      token?: string
      tokenGeneratedLink: string
    }
    feedback: {
      processing: boolean
      email?: string
      message?: string
    }
  }

  /**
   * 节点状态
   */
  export interface NodeState {
    refreshing: boolean
    loadmore: boolean
    name: string
    node?: V2exObject.Node
    topicList?: V2exObject.Topic[]
  }

  /**
   * 主页状态
   */
  export interface HomeState {
    current: {
      nodeName: string
    }
    nodes: NodeState[]
  }

  /**
   * @description 用户状态
   */
  export interface MemberState {
    /**
     * @description 用户登陆状态
     */
    loginState: {
      logined: boolean
      cookies?: string
      is2faRequired?: boolean
      errorList?: Error[]
      once?: boolean
    }

    /**
     * @description 用户令牌信息
     */
    token?: V2exObject.MToken

    /**
     * @description 用户信息
     */
    profile?: V2exObject.Member

    /**
     * @description 用户信息拉取
     */
    refreshing: boolean

    /**
     * 关注的人
     */
    followPeople?: {
      list: V2exObject.Member[]
      refreshing: boolean
    }

    /**
     * 收藏的主题
     */
    likeTopics?: {
      list: V2exObject.Topic[]
      refreshing: boolean
    }
  }

  /**
   * @description 应用设置状态
   */
  export interface SettingState {
    languageTag: 'zh' | 'en'
  }

  /**
   * @description 通知状态
   */
  export interface NotificationState {
    refreshing: boolean
    list: V2exObject.Notification[]
  }
}
