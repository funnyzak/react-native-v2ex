import React from 'react'
import { View, Text, FlatList, ViewStyle, TextStyle } from 'react-native'
import { ITheme, V2exObject } from '@src/types'
import { TopicItem, NotFound } from '../'
import { Spinner } from '@src/components'
import { SylCommon, useTheme } from '@src/theme'
import { translate } from '@src/i18n'
import { NavigationService, ROUTES } from '@src/navigation'

export interface TopicListProps {
  onRowPress?: (topic: V2exObject.Topic) => void
  canLoadMoreContent?: boolean
  topics?: Array<V2exObject.Topic>
  onEndReached?: () => void
  refreshControl?: React.ReactElement
  searchIndicator?: boolean
  refreshCallback?: () => void
}

const TopicList: React.FC<TopicListProps> = ({
  onRowPress,
  canLoadMoreContent,
  topics,
  onEndReached,
  refreshControl,
  searchIndicator,
  refreshCallback
}: TopicListProps) => {
  const { theme } = useTheme()

  const onItemPress = (topic: V2exObject.Topic) => {
    if (onRowPress) onRowPress(topic)
    NavigationService.navigate(ROUTES.TopicDetail, { topicId: topic.id })
  }

  const renderItemRow = ({ item }: { item: V2exObject.Topic }) =>
    !item || item === null ? null : (
      <TopicItem containerStyle={styles.topicItemContainer(theme)} topic={item} onRowPress={onItemPress} />
    )

  const renderFooter = () => {
    if (canLoadMoreContent) {
      return <Spinner style={{ padding: theme.spacing.large }} />
    } else if (topics && topics.length > 0) {
      return (
        <View style={styles.notFoundTextWrap()}>
          <Text style={styles.notFoundText(theme)}>{translate('tips.noMore')}</Text>
        </View>
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
          key={'ONE COLUMN'}
          ItemSeparatorComponent={renderItemSeparator}
        />
      )
    }
    if (!searchIndicator) {
      return (
        <NotFound
          text={translate('errors.noTopics')}
          buttonText={translate('button.oneceAgain')}
          buttonPress={refreshCallback}
        />
      )
    }
  }

  return (
    <>
      <View style={styles.container(theme)}>{renderContent()}</View>
    </>
  )
}

/**
 * @description styles settings
 */
const styles = {
  container: (theme: ITheme) => ({
    paddingVertical: theme.spacing.small,
    ...SylCommon.Layout.fill,
    backgroundColor: theme.colors.surface
  }),
  topicItemContainer: (theme: ITheme): ViewStyle => ({
    flex: 1
  }),
  itemSeparator: (theme: ITheme) => ({
    height: theme.spacing.small,
    flex: 1
  }),
  imageStyle: (theme: ITheme) => ({
    height: theme.dimens.avatarSize,
    width: undefined,
    margin: theme.spacing.small,
    borderWidth: 1,
    borderColor: theme.colors.border
  }),
  notFoundTextWrap: (): TextStyle => ({
    flex: 1,
    paddingVertical: 20,
    justifyContent: 'center'
  }),
  notFoundText: (theme: ITheme): TextStyle => ({
    ...theme.typography.bodyText,
    textAlign: 'center'
  }),
  separator: (theme: ITheme) => ({
    width: 1,
    backgroundColor: theme.colors.border,
    marginVertical: theme.spacing.small
  })
}

export default TopicList
