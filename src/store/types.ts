import { V2exAPI, V2exObject } from '@src/types'
import { ThemeType } from '@src/theme'
import { LanguageTagType } from '@src/i18n'
import { NODE_TAB_TYPE } from '@src/navigation'
export declare module IState {
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
      github: string
      wechat: string
    }

    siteInfo?: V2exObject.SiteInfo

    siteStat?: V2exObject.SiteStat

    errorMessage?: Error[]
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
    error: string | null
    success: string | null
    nodeTab: NODE_TAB_TYPE
    list?: V2exObject.Topic[]
    refreshing: boolean
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
