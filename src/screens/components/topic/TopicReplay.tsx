/**
 * Created by leon<silenceace@gmail.com> on 22/04/28.
 */
import { Placeholder } from '@src/components'
import { translate } from '@src/i18n'
import { ITheme, useTheme } from '@src/theme'
import { APPDataObject } from '@src/types'
import React from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import { ReplayList } from '.'
import { NeedLogin, TabCardContainer } from '../common'

/**
 * TopicReplay props
 */
export interface TopicReplayProps {
  containerStyle?: StyleProp<ViewStyle>

  info: APPDataObject.Topic
}

const TopicReplay: React.FC<TopicReplayProps> = ({ containerStyle, info }: TopicReplayProps) => {
  const { theme } = useTheme()
  const [list, setList] = React.useState<APPDataObject.TopicReply[] | undefined>(undefined)

  const refreshCallback = (_list: APPDataObject.TopicReply[]) => {
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
  container: (theme: ITheme): ViewStyle => ({
    marginTop: theme.spacing.small,
    flex: 1
  })
}

export default TopicReplay
