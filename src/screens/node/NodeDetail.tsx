import { interestNode, unInterestNode } from '@src/actions'
import { translate } from '@src/i18n'
import { NodeDetailScreenProps as ScreenProps } from '@src/navigation/routes'
import { RootState } from '@src/store'
import { SylCommon, useTheme } from '@src/theme'
import { V2exObject } from '@src/types'
import React, { useEffect, useMemo, useState } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { HeaderButton, NodeInfoCard, NodeTopicTabList } from '../components'

const NodeDetail = ({
  interest,
  unInterest,
  interestNodes,
  route,
  navigation
}: ScreenProps & {
  interest: (node: V2exObject.Node) => void
  unInterest: (node: V2exObject.Node) => void
  interestNodes: V2exObject.Node[]
}) => {
  const { theme } = useTheme()
  const nodeName = useMemo(() => route.params.nodeName, [route])
  const [info, setInfo] = useState<V2exObject.Node | undefined>(undefined)

  const HeaderRight = () => () => {
    return (
      <>
        {!info ? undefined : interestNodes.find((node) => node.name === nodeName) ? (
          <HeaderButton
            text={translate('common.unFollow')}
            textColor={theme.colors.captionText}
            onPress={() => {
              unInterest(info)
            }}
          />
        ) : (
          <HeaderButton
            text={translate('common.follow')}
            onPress={() => {
              interest(info)
            }}
          />
        )}
      </>
    )
  }

  useEffect(() => {
    navigation.setOptions({
      title: route.params.nodeTitle,
      headerRight: HeaderRight()
    })
  }, [interestNodes])

  return (
    <View style={SylCommon.Layout.fill}>
      <NodeInfoCard nodeid={nodeName} loadedCallback={setInfo} />
      <NodeTopicTabList nodename={nodeName} containerStyle={[{ marginTop: theme.spacing.small }]} />
    </View>
  )
}

const mapStateToProps = ({ member: { interestNodes } }: RootState) => {
  return { interestNodes }
}

export default connect(mapStateToProps, {
  interest: interestNode,
  unInterest: unInterestNode
})(NodeDetail)
