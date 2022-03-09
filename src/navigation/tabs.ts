/**
 * Created by leon<silenceace@gmail.com> on 22/2/25.
 */

import { IState } from '../types'

export const NODE_TABS = {
  LATEST: 'latest',
  HOT: 'hot',
  QNA: 'qna',
  DEALS: 'deals',
  JOBS: 'jobs',
  APPLE: 'apple',
  PLAY: 'play',
  CREATIVE: 'creative',
  TECH: 'tech',
  R2: 'R2',
  NODES: 'nodes',
  MEMBERS: 'members'
}

export type NODE_TABS = typeof NODE_TABS[keyof typeof NODE_TABS]

export type NODE_TAB_TYPE = {
  name: string
  title: string
  loginRequired: boolean
}

export const HOME_NODES: Array<NODE_TAB_TYPE> = [
  {
    name: NODE_TABS.LATEST,
    title: '最新',
    loginRequired: false
  },
  {
    name: NODE_TABS.HOT,
    title: '热门',
    loginRequired: false
  },
  {
    name: NODE_TABS.QNA,
    title: '问与答',
    loginRequired: true
  },
  {
    name: NODE_TABS.DEALS,
    title: '交易',
    loginRequired: true
  },
  {
    name: NODE_TABS.JOBS,
    title: '酷工作',
    loginRequired: true
  },
  {
    name: NODE_TABS.APPLE,
    title: 'Apple',
    loginRequired: true
  },
  {
    name: NODE_TABS.PLAY,
    title: '好玩',
    loginRequired: true
  },
  {
    name: NODE_TABS.CREATIVE,
    title: '创意',
    loginRequired: true
  },
  {
    name: NODE_TABS.TECH,
    title: '技术',
    loginRequired: true
  },
  {
    name: NODE_TABS.R2,
    title: 'R2',
    loginRequired: true
  }
]
