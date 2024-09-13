import { StackScreenWithSearchBar } from '@/constants/layout'
import { defaultStyles } from '@/styles'
import { Stack } from 'expo-router'
import React from 'react'
import { View } from 'react-native'

const FavoritesScreenLayout = () => {
  return (
     <View style={defaultStyles.container}>
        <Stack>
            <Stack.Screen name='index'
             options={{
               ...StackScreenWithSearchBar,
               headerShown:false
             }}
            />
        </Stack>
     </View>
  )
}

export default FavoritesScreenLayout
