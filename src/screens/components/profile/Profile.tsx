import * as React from 'react'
import { View, Text } from 'react-native'

const Profile = () => {
  return (
    <View style={[SylCommon.Layout.fill, SylCommon.View.background(theme)]}>
      <Text>Hello World, Profile.</Text>
    </View>
  )
}

export default Profile
