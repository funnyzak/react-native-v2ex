/**
 * Created by leon<silenceace@gmail.com> on 22/04/30.
 */
import { NodeDetailScreenProps as ScreenProps } from '@src/navigation/routes'
import { RootState } from '@src/store'
import { SylCommon, useTheme } from '@src/theme'
import { AppObject } from '@src/types'
import React, { useEffect, useMemo, useState } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { NodeInfoCard, NodeTopicTabList } from '../components'
import { LikeNodeHeaderButton } from '../components/button'

const NodeDetail = ({
  interestNodes,
  route,
  navigation
}: ScreenProps & {
  interestNodes: AppObject.Node[]
}) => {
  const { theme } = useTheme()
  const nodeName = useMemo(() => route.params.nodeName, [route])
  const [info, setInfo] = useState<AppObject.Node | undefined>(undefined)

  useEffect(() => {
    if (info) {
      navigation.setOptions({
        title: route.params.nodeTitle || info?.title,
        headerRight: () => <LikeNodeHeaderButton node={info} />
      })
    }
  }, [interestNodes, info]) // eslint-disable-line react-hooks/exhaustive-deps

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

export default connect(mapStateToProps, {})(NodeDetail)
