import { StackScreenWithSearchBar } from '@/constants/layout'
import { defaultStyles } from '@/styles'
import { Stack } from 'expo-router'
import React from 'react'
import { View, StyleSheet } from 'react-native'

const ArtistsScreenLayout = () => {
  return (
     <View style={[defaultStyles.container, styles.content]}>
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

export default ArtistsScreenLayout


const styles = StyleSheet.create({
   content: {
     paddingTop: 10, // Adjust padding as needed
   },
 })
 