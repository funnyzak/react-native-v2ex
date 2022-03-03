import { useTheme } from '@src/theme'
import React from 'react'
import { ActivityIndicator, View } from 'react-native'

interface IProps {
  visible: boolean
}

const LoadingComponent = ({ visible }: IProps) => {
  const { theme } = useTheme()

  return <View>{visible && <ActivityIndicator color={theme.colors.secondary} size={48} />}</View>
}

const Loading = React.memo(LoadingComponent)

export default Loading
