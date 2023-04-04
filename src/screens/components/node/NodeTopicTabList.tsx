/**
 * Created by Leon<silenceace@gmail.com> at 2022-04-01 14:00:14.
 * Last modified at 2022-04-20 11:14:51
 */

import { translate } from '@src/i18n'
import { useTheme } from '@src/theme'
import React from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import { TopTabList } from '../common'
import { FetchTopicCardList } from '../topic'
/**
 * NodeTopicTabList props
 */
export interface NodeTopicTabListProps {
  /**
   * container style
   */
  containerStyle?: StyleProp<ViewStyle>
  /**
   * node name
   */
  nodename: string
}
const NodeTopicTabList: React.FC<NodeTopicTabListProps> = ({ nodename, containerStyle }: NodeTopicTabListProps) => {
  const { theme } = useTheme()
  const Newest = (newest: boolean) => () =>
    <FetchTopicCardList nodeName={nodename} containerStyle={[{ minHeight: 100 }]} v2API={!newest} />
  const renderContent = () => {
    return (
      <TopTabList
        containerStyle={containerStyle}
        list={[
          {
            component: Newest(true),
            title: translate('common.latest')
          },
          {
            component: Newest(false),
            title: translate('common.all')
          }
        ]}
      />
    )
  }
  return renderContent()
}
export default NodeTopicTabList
