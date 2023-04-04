/**
 * Created by Leon<silenceace@gmail.com> at 2022-04-01 10:44:43.
 * Last modified at 2022-04-01 10:44:43
 */

import React from 'react'
import { View } from 'react-native'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'
const TopicDetailPlaceholder = ({ color = '#CCCCCC' }: { color?: string }) => {
  return (
    <SkeletonPlaceholder>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ width: 60, height: 60, borderRadius: 50 }} />
        <View style={{ marginLeft: 20 }}>
          <View style={{ width: 120, height: 20, borderRadius: 4 }} />
          <View style={{ marginTop: 6, width: 80, height: 20, borderRadius: 4 }} />
        </View>
      </View>
    </SkeletonPlaceholder>
  )
}
export { TopicDetailPlaceholder }
