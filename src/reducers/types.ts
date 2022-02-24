import { V2exObject } from '../v2ex/types'

export declare module IState {
  export interface IV2exState {
    v2ex: any
    errorMessage?: any
  }

  export interface IMemberState {
    token: V2exObject.MToken
    profile: V2exObject.Member
  }

  export interface IUIState {
    languageTag: 'zh' | 'en'
  }
}
