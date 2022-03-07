import React, { useState } from 'react'
import { StyleSheet, View, ViewStyle, TextStyle, RefreshControl } from 'react-native'

import { connect } from 'react-redux'
import { IState, ITheme, V2exObject } from '@src/types'
import { TopicTabList, TopicList } from '../components'
import { HomeScreenProps as ScreenProps, HOME_NODES, NODE_TAB_TYPE, ROUTES } from '@src/navigation'

const Home = ({ route, navigation, theme, loading }: ScreenProps) => {
  const [currentTab, setCurrentTab] = useState<NODE_TAB_TYPE>(HOME_NODES[0])
  const [canLoadMoreContent, setCanLoadMoreContent] = useState<boolean>(true)
  const [topics, setTopics] = useState<V2exObject.Topic[] | undefined>(undefined)
  const [searchIndicator, setSearchIndicator] = useState<boolean>(false)
  const [refreshing, setRefreshing] = useState<boolean>(false)

  const onEndReached = () => {
    if (canLoadMoreContent) {
    }
  }

  const onRefresh = () => {
    setTopics(undefined)
    setSearchIndicator(false)
  }

  return (
    <View>
      <TopicTabList
        tabs={HOME_NODES}
        onPress={(tab: NODE_TAB_TYPE) => {
          setCurrentTab(tab)
        }}
        currentTab={currentTab}
      />
      <TopicList
        onRowPress={(topic: V2exObject.Topic) => {
          navigation.navigate(ROUTES.TopicDetail, { topicId: topic.id.toString() })
        }}
        topics={topics}
        onEndReached={onEndReached}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />
    </View>
  )
}

/**
 * @description styles settings
 */
const styles = {
  container: (theme: ITheme): ViewStyle => ({
    flex: 1
  })
}

/**
 * default props
 */
Home.defaultProps = {
  loading: false
}

const mapStateToProps = ({ ui: { home } }: { ui: IState.UIState }) => {
  const { error, success, list, refreshing } = home
  return { error, success, refreshing, list }
}

export default connect(mapStateToProps)(Home)
