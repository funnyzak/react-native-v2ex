/**
 * Created by leon<silenceace@gmail.com> on 22/05/27.
 */
import { Placeholder, Spinner } from '@src/components'
import { translate } from '@src/i18n'
import { SylCommon, useTheme } from '@src/theme'
import { ITheme, V2exObject } from '@src/types'
import React from 'react'
import { FlatList, StyleProp, View, ViewStyle } from 'react-native'
import { BorderLine } from '../common'
import SimpleProfileInfoCard from './SimpleProfileInfoCard'

export interface ProfileCardListProps {
  /**
   * container style
   */
  containerStyle?: StyleProp<ViewStyle>

  itemContainerStyle?: StyleProp<ViewStyle>

  canLoadMoreContent?: boolean
  members?: Array<V2exObject.Member>
  onEndReached?: () => void
  refreshControl?: React.ReactElement
  searchIndicator?: boolean
  refreshCallback?: () => void

  useFlatList?: boolean
}

const ProfileCardList: React.FC<ProfileCardListProps> = ({
  useFlatList = true,
  containerStyle,
  itemContainerStyle,
  canLoadMoreContent,
  members,
  onEndReached,
  refreshControl,
  searchIndicator,
  refreshCallback
}: ProfileCardListProps) => {
  const { theme } = useTheme()

  const renderItemRow = ({ item }: { item: V2exObject.Member }) =>
    !item || item === null ? null : (
      <SimpleProfileInfoCard
        key={item.id}
        containerStyle={[styles.infoItemContainer(theme), itemContainerStyle]}
        info={item}
      />
    )

  const renderFooter = () => {
    if (canLoadMoreContent) {
      return <Spinner style={{ padding: theme.spacing.large }} />
    } else if (members && members.length > 0) {
      return (
        <Placeholder
          containerStyle={[{ backgroundColor: theme.colors.background }]}
          placeholderText={translate('tips.noMore')}
        />
      )
    }
    return null
  }

  const renderItemSeparator = () => <BorderLine />

  const renderContent = () => {
    if (!members) {
      return <Spinner style={{ marginTop: 50 }} />
    }

    if (members.length > 0) {
      return useFlatList ? (
        <FlatList
          refreshControl={refreshControl}
          style={styles.container(theme)}
          data={members}
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
      ) : (
        <View style={[styles.container(theme), containerStyle]}>{members.map((v) => renderItemRow({ item: v }))}</View>
      )
    }
    if (!searchIndicator) {
      return <Placeholder buttonText={translate('button.tryAgain')} buttonPress={refreshCallback} />
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
  infoItemContainer: (theme: ITheme): ViewStyle => ({
    ...SylCommon.Card.container(theme),
    paddingTop: theme.spacing.medium
  })
}

export default ProfileCardList
