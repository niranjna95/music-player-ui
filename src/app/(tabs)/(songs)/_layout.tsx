import { StackScreenWithSearchBar } from '@/constants/layout'
import { defaultStyles } from '@/styles'
import { Stack } from 'expo-router'
import React from 'react'
import { View,StyleSheet } from 'react-native'

const SongsScreenLayout = () => {
  return (
     <View style={[defaultStyles.container]}>
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

export default SongsScreenLayout

const styles = StyleSheet.create({
  debug: {
    borderColor: 'blue',
    borderWidth: 2
  }
});
