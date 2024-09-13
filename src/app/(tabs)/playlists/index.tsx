import Header from '@/components/Headers/Header'
import { defaultStyles } from '@/styles'
import { Stack } from 'expo-router'
import React from 'react'
import { Text, View,StyleSheet } from 'react-native'

const PlaylistScreen = () => {
  return (
     <View style={[defaultStyles.container]}>
       <Header headerName='Playlist'/>
        

        <View style={styles.container}>
      {/* Header */}
      
      <Text style={defaultStyles.text}>Playlist Screen</Text>
      <Text style={styles.text}>Coming Soon</Text>
    </View>
     </View>
    
  )
}

export default PlaylistScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center content vertically
    alignItems: 'center',     // Center content horizontally
   
  },
  text: {
    textAlign: 'center',
    color:'#fff',
    fontSize:30
  },
})

