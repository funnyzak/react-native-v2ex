import { AppAPI, APPDataObject } from '@src/types'
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
   * 全局状态
   */
  export interface AppState {
    v2ex?: AppAPI.APP

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

    siteInfo?: APPDataObject.SiteInfo

    siteStat?: APPDataObject.SiteStat

    allNode?: APPDataObject.Node[]

    errorMessage?: Error[]
  }

  export interface CacheState {
    members: {
      pullTime: number
      info: APPDataObject.Member
    }[]

    nodes: {
      pullTime: number
      info: APPDataObject.Node
    }[]

    /**
     * 当前登录用户
     */
    currentSessionMember?: APPDataObject.Member

    /**
     * 会员感兴趣的nodes
     */
    membersInterestNodes: Record<number, Array<APPDataObject.Node> | undefined>

    /**
     * 会员follow的人
     */
    membersFollowing: Record<number, Array<APPDataObject.Member> | undefined>

    /**
     * 会员喜欢的帖子
     */
    membersLikeTopics: Record<number, Array<APPDataObject.Topic> | undefined>
  }

  /**
   * 通用页面状态
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
     * 失败提示
     */
    error: string | null
    /**
     * 拉取成功提示
     */
    success: string | null
    /**
     * 节点基本信息
     */
    nodeTab: NODE_TAB_TYPE
    /**
     * 节点主题列表
     */
    list?: APPDataObject.Topic[]
    /**
     * 节点主题列表刷新状态
     */
    refreshing: boolean
    /**
     * has more topics
     */
    hasMore: boolean
    /**
     * 是否显示加载更多状态
     */
    loadMore: boolean
  }

  /**
   * Node Topics状态
   */
  export interface TabsState {
    /**
     * 节点状态
     */
    list: TabNodeState[]
  }

  /**
   * 用户状态
   */
  export interface MemberState {
    /**
     * 用户令牌信息
     */
    token?: APPDataObject.MToken

    /**
     * 用户信息
     */
    profile?: APPDataObject.Member

    /**
     * 用户发布的主题
     */
    topics?: APPDataObject.Topic[]

    /**
     * 用户信息拉取
     */
    refreshing: boolean

    /**
     * 关注的人
     */
    followPeoples: APPDataObject.Member[]
    /**
     * 收藏的主题
     */
    likeTopics: APPDataObject.Topic[]

    /**
     * 已读主题
     */
    readedTopics?: APPDataObject.Topic[]

    /**
     * 感兴趣的节点
     */
    interestNodes: APPDataObject.Node[]
  }

  /**
   * 应用设置状态
   */
  export interface SettingState {
    /**
     * 应用语言设置
     */
    languageTag: LanguageTagType
    /**
     * 应用主题
     */
    theme: ThemeType
  }
  /**
   * 通知状态
   */
  export interface NotificationState {
    refreshing: boolean
    unread: number
    list?: APPDataObject.Notification[]
  }
}
