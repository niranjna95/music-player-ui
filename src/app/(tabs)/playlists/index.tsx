import Header from '@/components/Headers/Header'
import { defaultStyles } from '@/styles'
import { Stack } from 'expo-router'
import React from 'react'
import { Text, View,StyleSheet } from 'react-native'

const PlaylistScreen = () => {
  return (
     <View style={[defaultStyles.container,styles.debug]}>
       <Header headerName='Playlist'/>
        <Text style={defaultStyles.text}>Playlist Screen</Text>
     </View>
  )
}

export default PlaylistScreen

const styles = StyleSheet.create({
   debug: {
     borderColor: 'blue',
     borderWidth: 2
   }
 });
