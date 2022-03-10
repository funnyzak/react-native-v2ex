import * as React from 'react'
import { View, Text } from 'react-native'
import { translate } from '@src/i18n'
import { useTheme, SylCommon } from '@src/theme'

const ReplayList = () => {
  const { theme } = useTheme()
  return (
    <View>
      <Text>Hello World, ReplayList.</Text>
    </View>
  )
}

export default ReplayList
