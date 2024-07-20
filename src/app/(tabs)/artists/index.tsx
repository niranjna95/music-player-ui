import Header from '@/components/Headers/Header'
import { defaultStyles } from '@/styles'
import { Stack } from 'expo-router'
import React from 'react'
import { Text, View,StyleSheet } from 'react-native'

const ArtistsScreen = () => {
  return (

     
     <View style={defaultStyles.container}>
          {/* Header */}
         <Header headerName='Artists'/>

         <Text style={[defaultStyles.text,]}>Artists Screen</Text>
     </View>
  )
}

export default ArtistsScreen


