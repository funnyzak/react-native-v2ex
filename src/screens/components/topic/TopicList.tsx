import * as React from 'react'
import { View, Text, FlatList, TouchableOpacity, ViewStyle, TextStyle } from 'react-native'
import { IState, ITheme, V2exObject } from '@src/types'
import TopicItem from './TopicItem'
import { Spinner } from '@src/components'
import { useTheme } from '@src/theme'
import { translate } from '@src/i18n'

const TopicList = ({
  onRowPress,
  canLoadMoreContent,
  topics,
  onEndReached,
  refreshControl,
  searchIndicator
}: {
  onRowPress: (topic: V2exObject.Topic) => void
  canLoadMoreContent: boolean
  topics: Array<V2exObject.Topic>
  onEndReached: () => void
  refreshControl: React.ReactElement
  searchIndicator: boolean
}) => {
  const { theme } = useTheme()

  const renderItemRow = ({ item, index }: { item: V2exObject.Topic; index: number }) => (
    <TopicItem imageStyle={styles.imageStyle(theme)} viewContainerStyle={{ flex: 1 }} topic={item} onRowPress={onRowPress} />
  )

  const renderItemSeparator = () => <View style={styles.itemSeparator(theme)} />

  const renderContent = () => {
    if (!topics) {
      return <Spinner />
    }

    if (topics.length) {
      return (
        <FlatList
          refreshControl={refreshControl}
          data={topics}
          renderItem={renderItemRow}
          keyExtractor={(item, index) => index.toString()}
          onEndReached={onEndReached}
          onEndReachedThreshold={0.1}
          numColumns={1}
          key={'ONE COLUMN'}
          ItemSeparatorComponent={renderItemSeparator}
        />
      )
    }
    if (!searchIndicator) {
      return (
        <View style={styles.notFoundTextWrap()}>
          <Text style={styles.notFoundText()}>{translate('errors.noTopics')}</Text>
        </View>
      )
    }
  }

  return <View style={styles.container}>{renderContent()}</View>
}

/**
 * @description styles settings
 */
const styles = {
  container: {
    flex: 1
  },
  itemSeparator: (theme: ITheme) => ({
    height: theme.dimens.topicListItemInBetweenSpace,
    backgroundColor: theme.colors.border,
    flex: 1
  }),
  imageStyle: (theme: ITheme) => ({
    height: theme.dimens.avatarSize,
    margin: theme.spacing.small,
    borderWidth: 1,
    borderColor: theme.colors.border,
    width: undefined
  }),
  notFoundTextWrap: (): TextStyle => ({
    flex: 1,
    justifyContent: 'center'
  }),
  notFoundText: (): TextStyle => ({
    textAlign: 'center'
  })
}

TopicList.defaultProps = {
  topics: [],
  onRowPress: () => {},
  canLoadMoreContent: false,
  onEndReached: () => {},
  refreshControl: undefined,
  searchIndicator: false
}

export default TopicList
