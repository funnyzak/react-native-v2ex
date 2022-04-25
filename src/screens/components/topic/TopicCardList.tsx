import { Placeholder, Spinner } from '@src/components'
import { translate } from '@src/i18n'
import { NavigationService, ROUTES } from '@src/navigation'
import { SylCommon, useTheme } from '@src/theme'
import { ITheme, V2exObject } from '@src/types'
import React from 'react'
import { FlatList, StyleProp, View, ViewStyle } from 'react-native'
import TopicCardItem from './TopicCardItem'

export interface TopicCardListProps {
  /**
   * container style
   */
  containerStyle?: StyleProp<ViewStyle>
  onRowPress?: (topic: V2exObject.Topic) => void
  canLoadMoreContent?: boolean
  topics?: Array<V2exObject.Topic>
  onEndReached?: () => void
  refreshControl?: React.ReactElement
  searchIndicator?: boolean
  refreshCallback?: () => void

  /**
   * Display Style
   */
  displayStyle?: 'simple' | 'full' | 'auto'
}

const TopicCardList: React.FC<TopicCardListProps> = ({
  containerStyle,
  onRowPress,
  canLoadMoreContent,
  displayStyle,
  topics,
  onEndReached,
  refreshControl,
  searchIndicator,
  refreshCallback
}: TopicCardListProps) => {
  const { theme } = useTheme()

  const onItemPress = (topic: V2exObject.Topic) => {
    if (onRowPress) onRowPress(topic)
    NavigationService.navigate(ROUTES.TopicDetail, { topicId: topic.id })
  }

  const renderItemRow = ({ item }: { item: V2exObject.Topic }) =>
    !item || item === null ? null : (
      <TopicCardItem
        displayStyle={displayStyle}
        containerStyle={styles.topicItemContainer(theme)}
        topic={item}
        onPress={onItemPress}
      />
    )

  const renderFooter = () => {
    if (canLoadMoreContent) {
      return <Spinner style={{ padding: theme.spacing.large }} />
    } else if (topics && topics.length > 0) {
      return (
        <Placeholder
          containerStyle={[{ backgroundColor: theme.colors.background }]}
          placeholderText={translate('tips.noMore')}
        />
      )
    }
    return null
  }

  const renderItemSeparator = () => <View style={styles.itemSeparator(theme)} />

  const renderContent = () => {
    if (!topics) {
      return <Spinner style={{ marginTop: 50 }} />
    }

    if (topics.length > 0) {
      return (
        <FlatList
          refreshControl={refreshControl}
          data={topics}
          renderItem={renderItemRow}
          keyExtractor={(item, index) => index.toString()}
          onEndReached={onEndReached}
          onEndReachedThreshold={0.1}
          ListFooterComponent={renderFooter}
          numColumns={1}
          horizontal={false}
          key={'ONE COLUMN'}
          maxToRenderPerBatch={10}
          initialNumToRender={10}
          ItemSeparatorComponent={renderItemSeparator}
        />
      )
    }
    if (!searchIndicator) {
      return (
        <Placeholder
          placeholderText={translate('placeholder.noTopics')}
          buttonText={translate('button.tryAgain')}
          buttonPress={refreshCallback}
        />
      )
    }
  }

  return <View style={[styles.container(theme), containerStyle]}>{renderContent()}</View>
}

/**
 * @description styles settings
 */
const styles = {
  container: (theme: ITheme): ViewStyle => ({
    flex: 1
  }),
  topicItemContainer: (theme: ITheme): ViewStyle => ({
    ...SylCommon.Card.container(theme)
  }),
  itemSeparator: (theme: ITheme) => ({
    height: 0
  })
}

export default TopicCardList
