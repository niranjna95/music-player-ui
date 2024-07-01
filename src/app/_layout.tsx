import React from 'react'
import {  Text, View } from 'react-native'
import {StatusBar} from 'expo-status-bar'
import {Stack} from 'expo-router'
import { SafeAreaProvider } from 'react-native-safe-area-context';
const App = ()  =>{
  
	 return <SafeAreaProvider>
           <RootNavigation/>
		   <StatusBar style='auto'/>
	 </SafeAreaProvider>

}

const RootNavigation = () =>{
 
	 return(
		<Stack>
       <Stack.Screen name='(tabs)' options={{headerShown:false}}/>
	</Stack>
	 )
}

export default App