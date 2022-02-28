import React from 'react'
import { Text, SafeAreaView, View } from 'react-native'

import { HomeScreenProps } from '@src/navigation/routes'

const Home = ({ route, navigation }: HomeScreenProps) => {
  return (
    <SafeAreaView>
      <View>
        <Text>首页</Text>
      </View>
    </SafeAreaView>
  )
}

export default Home
