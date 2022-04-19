import { V2exAPI, V2exObject } from '@src/types'
import { ThemeType } from '@src/theme'
import { LanguageTagType } from '@src/i18n'
import { NODE_TAB_TYPE } from '@src/navigation'
export declare module IState {
  export interface State {
    ui: UIState
    member: MemberState
    app: AppState
    tab: TabsState
    notification: NotificationState
    setting: SettingState
    cache: CacheState
  }

  /**
   * @description 全局状态
   */
  export interface AppState {
    v2ex?: V2exAPI.V2ex

    name?: string

    deviceInfo?: {
      brand: string
      bunildId: string
      systemName: string
      uniqueId: string
      userAgent: string
      systemVersion: string
    }

    version: {
      version: string
      buildId?: string
      buildNumber?: string
    }

    latestVersion?: {
      version: string
      buildId: string
      features: string
    }

    aboutUs: {
      author: string
      email: string
      site: string
      github: string
      wechat: string
      twitter: string
      weibo: string
      discord: string
      telegram: string
      copyright: string
    }

    siteInfo?: V2exObject.SiteInfo

    siteStat?: V2exObject.SiteStat

    allNode?: V2exObject.Node[]

    errorMessage?: Error[]
  }

  export interface CacheState {
    members: {
      pullTime: number
      info: V2exObject.Member
    }[]

    nodes: {
      pullTime: number
      info: V2exObject.Node
    }[]
  }

  /**
   * @description 通用页面状态
   */
  export interface UIState {
    login: {
      tokenGeneratedLink: string

      error: string | null
      success: string | null
      loading: boolean
    }
    feedback: {
      processing: boolean
    }
  }

  /**
   * 节点状态
   */
  export interface TabNodeState {
    /**
     * @description 失败提示
     */
    error: string | null
    /**
     * @description 拉取成功提示
     */
    success: string | null
    /**
     * @description 节点基本信息
     */
    nodeTab: NODE_TAB_TYPE
    /**
     * @description 节点主题列表
     */
    list?: V2exObject.Topic[]
    /**
     * @description 节点主题列表刷新状态
     */
    refreshing: boolean
    /**
     * @description has more topics
     */
    hasMore: boolean
    /**
     * @description 是否显示加载更多状态
     */
    loadMore: boolean
  }

  /**
   * Node Topics状态
   */
  export interface TabsState {
    /**
     * @description 节点状态
     */
    list: TabNodeState[]
  }

  /**
   * @description 用户状态
   */
  export interface MemberState {
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

    /**
     * 已读主题
     */
    readedTopics?: V2exObject.Topic[]
  }

  /**
   * @description 应用设置状态
   */
  export interface SettingState {
    /**
     * @description 应用语言设置
     */
    languageTag: LanguageTagType
    /**
     * @description 应用主题
     */
    theme: ThemeType
  }
  /**
   * @description 通知状态
   */
  export interface NotificationState {
    refreshing: boolean
    unread: number
    list?: V2exObject.Notification[]
  }
}
