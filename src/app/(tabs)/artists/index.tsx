import { defaultStyles } from '@/styles'
import { Stack } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const ArtistsScreen = () => {
  return (
     <View style={[defaultStyles.container]}>
        <Text style={[defaultStyles.text,]}>Artists Screen</Text>
     </View>
  )
}

export default ArtistsScreen
