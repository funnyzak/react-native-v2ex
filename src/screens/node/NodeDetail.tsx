import { useNode } from '@src/hooks/useNode'
import { NodeDetailScreenProps as ScreenProps } from '@src/navigation/routes'
import { SylCommon } from '@src/theme'
import React, { useEffect } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { NodeInfoCard } from '../components'

const NodeDetail = ({ route, navigation }: ScreenProps) => {
  useEffect(() => {
    navigation.setOptions({
      title: route.params.nodeTitle
    })
  }, [])

  return (
    <View style={SylCommon.Layout.fill}>
      <NodeInfoCard nodeid={route.params.nodeName} />
    </View>
  )
}

export default connect()(NodeDetail)
