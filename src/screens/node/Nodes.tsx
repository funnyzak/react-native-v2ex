import React from 'react'
import { connect } from 'react-redux'
import { View, ViewStyle, SectionList, TouchableOpacity } from 'react-native'

import { useTheme, SylCommon } from '@src/theme'
import { IState, ITheme, V2exObject } from '@src/types'
import { Text } from '@src/components'
import { NodesScreenProps as ScreenProps, NavigationService } from '@src/navigation'
import { TabNodes, nodeChildren } from '@src/helper/node'
import { NotFound } from '../components'
import { translate } from '@src/i18n'
import * as Actions from '@src/actions'

const Node = ({
  route,
  navigation,
  allNode,
  fetchAllNode
}: ScreenProps & {
  allNode?: V2exObject.Node[]
  fetchAllNode: () => void
}) => {
  const { theme } = useTheme()
  const Item = ({ nodes }: { nodes: V2exObject.Node[] }) => (
    <View style={styles.listContainer(theme)}>
      {nodes.map((node) => (
        <TouchableOpacity
          key={node.name}
          style={styles.item(theme)}
          onPress={() => {
            NavigationService.goNodeTopics(node.name, node.title)
          }}>
          <Text style={SylCommon.Node.nodeTitle(theme)}>{node.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )

  const sectionData = () => {
    return TabNodes.map((node, idx) => ({
      title: node.title,
      data: [
        {
          name: 'children' + idx,
          list: nodeChildren(node, allNode)
        }
      ],
      key: node.title
    })).filter((v) => v.data.length > 0)
  }

  const renderContent = () => {
    const data = sectionData()

    if (data.length === 0) {
      return (
        <NotFound
          text={translate('errors.noFound')}
          buttonText={translate('button.tryAgain')}
          buttonPress={() => {
            fetchAllNode()
          }}
        />
      )
    }
    return (
      <View style={styles.container(theme)}>
        <SectionList
          sections={data}
          contentContainerStyle={[]}
          keyExtractor={(item, index) => item.name + index}
          renderItem={({ item }) => <Item nodes={item.list} />}
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
    width: theme.dimens.WINDOW_WIDTH,
    paddingLeft: theme.spacing.medium,
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

const mapStateToProps = ({ app: { allNode } }: IState.State) => {
  return { allNode }
}

export default connect(mapStateToProps, { fetchAllNode: Actions.fetchAllNode })(Node)
