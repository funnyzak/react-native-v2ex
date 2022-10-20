/**
 * Created by leon<silenceace@gmail.com> on 22/3/10.
 */

import * as Actions from '@src/actions'
import { Placeholder, Text, useToast } from '@src/components'
import { nodeChildren, TabNodes } from '@src/helper/node'
import { translate } from '@src/i18n'
import { NavigationService, NodesScreenProps as ScreenProps } from '@src/navigation'
import { RootState } from '@src/store'
import { SylCommon, useTheme } from '@src/theme'
import { ITheme, AppObject } from '@src/types'
import React, { useEffect } from 'react'
import { SectionList, TouchableOpacity, View, ViewStyle } from 'react-native'
import { connect } from 'react-redux'
import { HeaderButton } from '../components'

const Node = ({
  navigation,
  allNode,
  fetchAllNode
}: ScreenProps & {
  allNode?: AppObject.Node[]
  fetchAllNode: () => void
}) => {
  const { theme } = useTheme()
  const { showMessage } = useToast()

  const underConstruction = () => {
    showMessage({
      type: 'error',
      text2: translate('label.underConstruction')
    })
  }

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButton
          onPress={underConstruction}
          source={theme.assets.images.icons.header.search}
          containerStyle={[{ marginRight: theme.dimens.layoutContainerHorizontalMargin }]}
        />
      )
    })
  }, [])
  const Item = ({ list, title }: { list: AppObject.Node[]; title: string }) => (
    <View style={[SylCommon.Card.container(theme), styles.sectionContainer(theme)]}>
      <Text style={{ ...theme.typography.subheadingTextBold }}>{title}</Text>
      <View style={styles.nodeListContainer(theme)}>
        {list.map((node) => (
          <TouchableOpacity
            key={node.name}
            style={styles.item(theme)}
            onPress={() => {
              NavigationService.goNodeDetail(node.name, node.title)
            }}>
            <Text style={SylCommon.Node.nodeTitle(theme)}>{node.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )

  const sectionData = () => {
    return TabNodes.map((node, idx) => ({
      title: node.title,
      data: [
        {
          name: 'children' + idx,
          title: node.title,
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
        <Placeholder
          buttonText={translate('button.tryAgain')}
          placeholderText={translate('errors.noFound')}
          buttonPress={fetchAllNode}
        />
      )
    }
    return (
      <SectionList
        sections={data}
        contentContainerStyle={[]}
        keyExtractor={(item, index) => item.name + index}
        renderItem={({ item }) => <Item {...item} />}
        stickySectionHeadersEnabled={true}
        renderSectionHeader={undefined}
      />
    )
  }
  return <View style={SylCommon.Layout.fill}>{renderContent()}</View>
}

/**
 * @description styles settings
 */
const styles = {
  sectionContainer: (theme: ITheme) => ({
    paddingVertical: theme.spacing.medium,
    marginBottom: theme.spacing.medium
  }),
  nodeListContainer: (theme: ITheme): ViewStyle => ({
    paddingTop: theme.spacing.small,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start'
  }),
  item: (theme: ITheme): ViewStyle => ({
    width: 'auto',
    borderRadius: theme.spacing.tiny,
    borderColor: theme.colors.border,
    borderWidth: 0.7,
    marginRight: theme.spacing.small,
    marginVertical: theme.spacing.tiny
  })
}

const mapStateToProps = ({ app: { allNode } }: RootState) => {
  return { allNode }
}

export default connect(mapStateToProps, { fetchAllNode: Actions.fetchAllNode })(Node)
