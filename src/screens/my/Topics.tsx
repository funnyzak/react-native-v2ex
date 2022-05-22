import { setMyTopics } from '@src/actions'
import { useToast } from '@src/components'
import { MyTopicsScreenProps as ScreenProps } from '@src/navigation'
import { RootState } from '@src/store'
import { SylCommon, useTheme } from '@src/theme'
import { V2exObject } from '@src/types'
import { v2exLib } from '@src/v2ex'
import React, { useCallback, useState } from 'react'
import { RefreshControl, View } from 'react-native'
import { connect } from 'react-redux'
import { NeedLogin, TopicCardList } from '../components'

const MyTopics = ({
  profile,
  topics,
  setTopics
}: ScreenProps & {
  topics?: V2exObject.Topic[]
  profile?: V2exObject.Member
  setTopics: (topics: V2exObject.Topic[]) => void
}) => {
  const { theme } = useTheme()
  const [refreshing, setRefreshing] = useState<boolean>(false)
  const [list, setList] = useState<V2exObject.Topic[] | undefined>(topics)
  const { showMessage } = useToast()

  const onRefresh = useCallback(() => {
    setRefreshing(true)
    if (!profile) return

    v2exLib.topic
      .topics(profile?.username, 'username')
      .then((rlt: V2exObject.Topic[]) => {
        setRefreshing(false)
        setList(rlt)
        setTopics(rlt)
      })
      .catch((err) => {
        showMessage(err.message)
      })
  }, [])

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
