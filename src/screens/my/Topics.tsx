import { setMyTopics } from '@src/actions'
import { useToast } from '@src/components'
import { MyTopicsScreenProps as ScreenProps } from '@src/navigation'
import { RootState } from '@src/store'
import { SylCommon, useTheme } from '@src/theme'
import { AppObject } from '@src/types'
import { ApiLib } from '@src/api'
import React, { useCallback, useState } from 'react'
import { RefreshControl, View } from 'react-native'
import { connect } from 'react-redux'
import { NeedLogin, TopicCardList } from '../components'

const MyTopics = ({
  profile,
  topics,
  setTopics
}: ScreenProps & {
  topics?: AppObject.Topic[]
  profile?: AppObject.Member
  setTopics: (topics: AppObject.Topic[]) => void
}) => {
  const [refreshing, setRefreshing] = useState<boolean>(false)
  const [list, setList] = useState<AppObject.Topic[] | undefined>(topics)
  const { showMessage } = useToast()

  const onRefresh = useCallback(() => {
    setRefreshing(true)
    if (!profile) return

    ApiLib.topic
      .topics(profile?.username, 'username')
      .then((rlt: AppObject.Topic[]) => {
        setRefreshing(false)
        setList(rlt)
        setTopics(rlt)
      })
      .catch((err) => {
        showMessage(err.message)
      })
  }, [profile]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <View style={SylCommon.Layout.fill}>
      <NeedLogin
        onMount={() => {
          if (topics === undefined || topics.length === 0) {
            onRefresh()
          }
        }}>
        <TopicCardList
          topics={list}
          displayStyle={'full'}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
          canLoadMoreContent={false}
          searchIndicator={false}
          refreshCallback={onRefresh}
        />
      </NeedLogin>
    </View>
  )
}

const mapStateToProps = ({ member: { profile, topics } }: RootState) => ({ profile, topics })

export default connect(mapStateToProps, { setTopics: setMyTopics })(MyTopics)
