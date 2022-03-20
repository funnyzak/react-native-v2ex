import React from 'react'
import { connect } from 'react-redux'
import { View, ViewStyle, SectionList, TouchableOpacity } from 'react-native'

import { useTheme, SylCommon } from '@src/theme'
import { IState, ITheme, V2exObject } from '@src/types'
import { Text } from '@src/components'
import { NodeScreenProps as ScreenProps, NavigationService } from '@src/navigation'
import { TabNodes, nodeChildren } from '@src/helper/node'

const Node = ({ route, navigation }: ScreenProps) => {
  const { theme } = useTheme()

  const Item = ({ node }: { node: V2exObject.Node }) => (
    <TouchableOpacity
      style={styles.item(theme)}
      onPress={() => {
        NavigationService.goNodeTopics(node.name, node.title)
      }}>
      <Text style={SylCommon.Node.nodeTitle(theme)}>{node.title}</Text>
    </TouchableOpacity>
  )

  const sectionData = () => {
    return TabNodes.map((node) => ({
      title: node.title,
      data: nodeChildren(node),
      key: node.title
    }))
  }

  const renderContent = () => {
    return (
      <View style={styles.container(theme)}>
        <SectionList
          sections={sectionData()}
          contentContainerStyle={styles.listContainer(theme)}
          keyExtractor={(item, index) => item.name + index}
          renderItem={({ item }) => <Item node={item} />}
          stickySectionHeadersEnabled={false}
          renderSectionHeader={({ section: { title } }) => (
            <View style={styles.section(theme)}>
              <Text style={SylCommon.Node.sectionTitle(theme)}>{title}</Text>
            </View>
          )}
        />
      </View>
    )
  }
  return (
    <View style={[SylCommon.Layout.fill, SylCommon.View.background(theme), { alignItems: 'center' }]}>
      {renderContent()}
    </View>
  )
}

/**
 * @description styles settings
 */
const styles = {
  container: (theme: ITheme): ViewStyle => ({
    width: theme.dimens.WINDOW_WIDTH - 40,
    flex: 1
  }),
  section: (theme: ITheme) => ({
    width: styles.container(theme).width,
    paddingVertical: theme.spacing.medium
  }),
  listContainer: (theme: ITheme): ViewStyle => ({
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start'
  }),
  item: (theme: ITheme): ViewStyle => ({
    width: 'auto',
    marginRight: theme.spacing.small,
    marginVertical: theme.spacing.tiny
  })
}

export default Node
