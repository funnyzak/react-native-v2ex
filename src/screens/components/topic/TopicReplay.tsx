/**
 * Created by Leon<silenceace@gmail.com> at 2022-04-28 20:07:59.
 * Last modified at 2022-10-20 18:07:33
 */

import { Placeholder } from '@src/components'
import { translate } from '@src/i18n'
import { Theme, useTheme } from '@src/theme'
import { AppObject } from '@src/types'
import React from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import { ReplayList } from '.'
import { NeedLogin, TabCardContainer } from '../common'
/**
 * TopicReplay props
 */
export interface TopicReplayProps {
  containerStyle?: StyleProp<ViewStyle>
  info: AppObject.Topic
}
const TopicReplay: React.FC<TopicReplayProps> = ({ containerStyle, info }: TopicReplayProps) => {
  const { theme } = useTheme()
  const [list, setList] = React.useState<AppObject.TopicReply[] | undefined>(undefined)
  const refreshCallback = (_list: AppObject.TopicReply[]) => {
    setList(_list)
  }
  const renderContent = () => {
    return (
      <>
        <NeedLogin mustLogin={false}>
          {list && list.length === 0 ? (
            <Placeholder placeholderText={translate('placeholder.noReplies')} />
          ) : (
            <TabCardContainer
              containerStyle={[styles.container(theme), containerStyle]}
              icon={theme.assets.images.icons.tabbar.title.comment}
              title={translate('label.latestReplay')}>
              <ReplayList topicId={info.id} refreshCallBack={refreshCallback} />
            </TabCardContainer>
          )}
        </NeedLogin>
      </>
    )
  }
  return renderContent()
}
const styles = {
  container: (theme: Theme): ViewStyle => ({
    marginTop: theme.spacing.small,
    flex: 1
  })
}
export default TopicReplay
