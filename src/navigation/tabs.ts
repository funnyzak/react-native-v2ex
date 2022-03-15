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
  IDEAS: 'ideas',
  PLAY: 'play',
  CREATIVE: 'creative',
  CREATE: 'create',
  TECH: 'tech',
  R2: 'R2',
  NODES: 'nodes',
  DESIGN: 'design',
  MEMBERS: 'members',
  LIFE: 'life'
}

export type NODE_TABS = typeof NODE_TABS[keyof typeof NODE_TABS]

export type NODE_TAB_TYPE = {
  name: string
  title: string
  /**
   * @description 是否可以分页
   */
  pager: boolean
  loginRequired: boolean
}

export const HOME_NODES: Array<NODE_TAB_TYPE> = [
  {
    name: NODE_TABS.LATEST,
    title: '最新',
    pager: false,
    loginRequired: false
  },
  {
    name: NODE_TABS.HOT,
    title: '热门',
    pager: false,
    loginRequired: false
  },
  {
    name: NODE_TABS.QNA,
    title: '问与答',
    pager: true,
    loginRequired: true
  },
  {
    name: NODE_TABS.DEALS,
    title: '交易',
    pager: true,
    loginRequired: true
  },
  {
    name: NODE_TABS.CREATE,
    title: '创造',
    pager: true,
    loginRequired: true
  },
  {
    name: NODE_TABS.JOBS,
    title: '酷工作',
    pager: true,
    loginRequired: true
  },
  {
    name: NODE_TABS.IDEAS,
    title: '奇思妙想',
    pager: true,
    loginRequired: true
  },
  {
    name: NODE_TABS.APPLE,
    title: 'Apple',
    pager: true,
    loginRequired: true
  },
  {
    name: NODE_TABS.PLAY,
    title: '好玩',
    pager: true,
    loginRequired: true
  },
  {
    name: NODE_TABS.CREATIVE,
    title: '创意',
    pager: true,
    loginRequired: true
  },
  {
    name: NODE_TABS.DESIGN,
    title: '设计',
    pager: true,
    loginRequired: true
  },
  {
    name: NODE_TABS.TECH,
    title: '技术',
    pager: true,
    loginRequired: true
  },
  {
    name: NODE_TABS.LIFE,
    title: '生活',
    pager: true,
    loginRequired: true
  }
]
