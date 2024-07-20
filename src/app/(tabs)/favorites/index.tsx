import Header from '@/components/Headers/Header'
import { defaultStyles } from '@/styles'
import { Stack } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const FavoritesScreen = () => {
  return (
     <View style={defaultStyles.container}>
        <Header headerName='Favorites'/>
        <Text style={defaultStyles.text}>Favorites Screen</Text>
     </View>
  )
}

export default FavoritesScreen
