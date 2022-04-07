import { useTheme } from '@src/theme'
import React from 'react'
import { ActivityIndicator, View } from 'react-native'

interface IProps {
  visible: boolean
  size?: number
}

const LoadingComponent = ({ visible, size = 70 }: IProps) => {
  const { theme } = useTheme()

  return <View>{visible && <ActivityIndicator color={theme.colors.secondary} size={size} />}</View>
}

const Loading = React.memo(LoadingComponent)

export default Loading
