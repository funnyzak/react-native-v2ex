import { IMemberTokenDetail, IMemberProfile } from '../v2ex/types'

export interface IV2exState {
  v2ex: any
  errorMessage?: any
}

export interface IMemberState {
  token: IMemberTokenDetail
  profile: IMemberProfile
}
