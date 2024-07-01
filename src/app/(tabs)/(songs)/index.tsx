import TracksList from '@/components/TracksList'
import { defaultStyles } from '@/styles'
import { Stack } from 'expo-router'
import React from 'react'
import { ScrollView, Text, View, ViewBase } from 'react-native'

const SongsScreen = () => {
  return (
     <View style={defaultStyles.container}>
        <ScrollView>
          
           <TracksList scrollEnabled={false}/>
          
          
        </ScrollView>
        <Text style={defaultStyles.text}>Songs</Text>
     </View>
  )
}

export default SongsScreen
