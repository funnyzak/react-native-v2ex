import React from 'react'
import { View, Text, FlatList, TouchableOpacity, ViewStyle, TextStyle } from 'react-native'
import { IState, ITheme, V2exObject } from '@src/types'
import TopicItem from './TopicItem'
import { Spinner } from '@src/components'
import { useTheme } from '@src/theme'
import { translate } from '@src/i18n'

export interface TopicListProps {
  onRowPress: (topic: V2exObject.Topic) => void
  canLoadMoreContent: boolean
  topics?: Array<V2exObject.Topic>
  onEndReached: () => void
  refreshControl: React.ReactElement
  searchIndicator: boolean
}

const TopicList: React.FC<TopicListProps> = ({
  onRowPress,
  canLoadMoreContent,
  topics,
  onEndReached,
  refreshControl,
  searchIndicator
}: TopicListProps) => {
  const { theme } = useTheme()

  const renderItemRow = ({ item }: { item: V2exObject.Topic }) =>
    !item || item === null ? null : (
      <TopicItem imageStyle={styles.imageStyle(theme)} viewContainerStyle={{ flex: 1 }} topic={item} onRowPress={onRowPress} />
    )

  const renderFooter = () => {
    if (canLoadMoreContent) {
      return <Spinner style={{ padding: theme.spacing.large }} />
    }

    return null
  }

  const renderItemSeparator = () => <View style={styles.itemSeparator(theme)} />

  const renderContent = () => {
    if (!topics) {
      return <Spinner style={{ marginTop: 50 }} />
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
          ListFooterComponent={renderFooter}
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

  return (
    <>
      <View style={styles.container}>{renderContent()}</View>
    </>
  )
}

/**
 * @description styles settings
 */
const styles = {
  container: {
    flex: 1
  },
  itemSeparator: (theme: ITheme) => ({
    height: theme.dimens.listItemInBetweenSpace,
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
  }),
  headerContainerStyle: (theme: ITheme): ViewStyle => ({
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border
  }),
  iconWrapper: (theme: ITheme) => ({
    flex: 1,
    height: 32,
    margin: theme.spacing.small,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }),
  headerTextStyle: (theme: ITheme) => ({
    textTransform: 'uppercase',
    marginLeft: theme.spacing.small
  }),
  separator: (theme: ITheme) => ({
    width: 1,
    backgroundColor: theme.colors.border,
    marginVertical: theme.spacing.small
  })
}

export default TopicList
