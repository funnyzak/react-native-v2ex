import React from 'react'
import { View, Text, FlatList, ViewStyle, TextStyle, TouchableOpacity } from 'react-native'
import { ITheme, V2exObject } from '@src/types'
import { NotFound } from '../'
import { Avatar, Spinner } from '@src/components'
import { SylCommon, useTheme } from '@src/theme'
import { translate } from '@src/i18n'
import { NavigationService } from '@src/navigation'

export interface NotificationListProps {
  onRowPress?: (notification: V2exObject.Notification) => void
  canLoadMoreContent?: boolean
  notifications?: Array<V2exObject.Notification>
  onEndReached?: () => void
  refreshControl?: React.ReactElement
  refreshCallback?: () => void
}

const NotificationList: React.FC<NotificationListProps> = ({
  onRowPress,
  canLoadMoreContent,
  notifications,
  onEndReached,
  refreshControl,
  refreshCallback
}: NotificationListProps) => {
  const { theme } = useTheme()

  const onItemPress = (notification: V2exObject.Notification) => {
    if (onRowPress) onRowPress(notification)
  }

  const renderItemRow = ({ item }: { item: V2exObject.Notification }) => {
    if (!item || item === null) return null

    return (
      <View style={styles.itemContainer(theme)}>
        <View style={styles.itemLeft(theme)}>
          <Text>avatar</Text>
        </View>
        <View style={styles.itemRight(theme)}>
          <TouchableOpacity
            onPress={() => {
              NavigationService.goUserProfile('')
            }}>
            <Text style={styles.txtUsername(theme)}>{item.for_member_id}</Text>
          </TouchableOpacity>
          <Text style={styles.txtAction(theme)}>动作</Text>
          <TouchableOpacity
            onPress={() => {
              NavigationService.goTopicDetail(item.payload)
            }}>
            <Text style={styles.txtTitle(theme)}>标题</Text>
          </TouchableOpacity>
          <Text style={styles.txtTime(theme)}>{item.created}</Text>
          <TouchableOpacity>
            <Text style={styles.txtBtn(theme)}>删除</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  const renderFooter = () => {
    if (canLoadMoreContent) {
      return <Spinner style={{ padding: theme.spacing.large }} />
    } else if (notifications && notifications.length > 0) {
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
    if (!notifications) {
      return <Spinner style={{ marginTop: 50 }} />
    }

    if (notifications.length > 0) {
      return (
        <FlatList
          refreshControl={refreshControl}
          data={notifications}
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
    return (
      <NotFound
        text={translate('placeholder.noNotifications')}
        buttonText={translate('button.oneceAgain')}
        buttonPress={refreshCallback}
      />
    )
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
  notFoundTextWrap: (): TextStyle => ({
    flex: 1,
    paddingVertical: 20,
    justifyContent: 'center'
  }),
  notFoundText: (theme: ITheme): TextStyle => ({
    ...theme.typography.bodyText,
    textAlign: 'center'
  }),
  itemContainer: (theme: ITheme): ViewStyle => ({
    flex: 1
  }),
  itemLeft: (theme: ITheme): ViewStyle => ({
    flex: 1,
    width: 65
  }),
  itemRight: (theme: ITheme): ViewStyle => ({
    flex: 1
  }),
  itemSeparator: (theme: ITheme) => ({
    height: theme.spacing.small,
    flex: 1
  }),
  txtUsername: (theme: ITheme): TextStyle => ({}),
  txtAction: (theme: ITheme): TextStyle => ({}),
  txtTitle: (theme: ITheme): TextStyle => ({}),
  txtTime: (theme: ITheme): TextStyle => ({}),
  txtBtn: (theme: ITheme): TextStyle => ({})
}

export default NotificationList
