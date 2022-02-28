import Colors from '@src/theme/colors'
import React from 'react'
import { ActivityIndicator, View } from 'react-native'

interface IProps {
  visible: boolean
}

const LoadingComponent = ({ visible }: IProps) => {
  return <View>{visible && <ActivityIndicator color={Colors.vi} size={48} />}</View>
}

const Loading = React.memo(LoadingComponent)

export default Loading
