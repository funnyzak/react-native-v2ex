import { useNode } from '@src/hooks/useNode'
import { NodeDetailScreenProps as ScreenProps } from '@src/navigation/routes'
import { SylCommon, useTheme } from '@src/theme'
import React, { useEffect } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { NodeInfoCard, NodeTopicTabList } from '../components'

const NodeDetail = ({ route, navigation }: ScreenProps) => {
  const { theme } = useTheme()
  useEffect(() => {
    navigation.setOptions({
      title: route.params.nodeTitle
    })
  }, [])

  return (
    <View style={SylCommon.Layout.fill}>
      <NodeInfoCard nodeid={route.params.nodeName} />
      <NodeTopicTabList nodename={route.params.nodeName} containerStyle={[{ marginTop: theme.spacing.small }]} />
    </View>
  )
}

export default connect()(NodeDetail)
