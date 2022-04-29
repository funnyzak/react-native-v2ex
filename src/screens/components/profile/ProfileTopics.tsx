/**
 * Created by leon<silenceace@gmail.com> on 22/04/29.
 */
import { Placeholder, useToast } from '@src/components'
import { translate } from '@src/i18n'
import { ITheme, useTheme } from '@src/theme'
import { V2exObject } from '@src/types'
import { v2exLib } from '@src/v2ex'
import React, { useCallback, useEffect, useState } from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import { TabCardContainer } from '../common'
import { TopicCardList } from '../topic'

/**
 * ProfileTopics props
 */
export interface ProfileTopicsProps {
  containerStyle?: StyleProp<ViewStyle>

  username: string
}

const ProfileTopics: React.FC<ProfileTopicsProps> = ({ containerStyle, username }: ProfileTopicsProps) => {
  const { theme } = useTheme()
  const { showMessage } = useToast()
  const [list, setList] = useState<V2exObject.Topic[] | undefined>(undefined)

  useEffect(() => {
    fetchTopics()
  }, [])

  const fetchTopics = useCallback(() => {
    setList([])
    v2exLib.topic
      .topics(username, 'username')
      .then((res) => {
        setList(res)
      })
      .catch((err) => {
        setList([])
        showMessage({
          text1: 'error',
          text2: err.text
        })
      })
  }, [username])

  const renderContent = () => {
    return (
      <TabCardContainer
        containerStyle={[styles.container(theme), containerStyle]}
        icon={theme.assets.images.icons.tabbar.title.latest}
        title={translate('label.postedTopics').replace('$', username)}>
        {!list || list.length > 0 ? (
          <TopicCardList
            itemContainerStyle={[{ paddingHorizontal: 0 }]}
            useFlatList={false}
            topics={list}
            containerStyle={{ paddingHorizontal: 0 }}
          />
        ) : (
          <Placeholder
            placeholderText={translate('placeholder.noTopics')}
            displayType="text"
            buttonText={translate('button.tryAgain')}
            buttonPress={fetchTopics}
          />
        )}
      </TabCardContainer>
    )
  }

  return renderContent()
}

const styles = {
  container: (theme: ITheme): ViewStyle => ({
    marginTop: theme.spacing.small
  })
}

export default ProfileTopics