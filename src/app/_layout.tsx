import React, { useCallback } from 'react'
import {  Text, View } from 'react-native'
import {StatusBar} from 'expo-status-bar'
import {SplashScreen, Stack} from 'expo-router'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useSetupTrackPlayer,  } from '@/hooks/useSetupTrackPlayer';
import TrackPlayer from 'react-native-track-player';
import useLogTrackPlayerState from '@/hooks/useLogTrackPlayerState';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

TrackPlayer.registerPlaybackService(() => require('../hooks/service'));
 SplashScreen.preventAutoHideAsync();
const App = ()  =>{
  
	const handleTrackPlayerloaded = useCallback(() => {
       SplashScreen.hideAsync()
	},[])
	useSetupTrackPlayer({
		onLoad : handleTrackPlayerloaded
	})
	useLogTrackPlayerState()
	 return <SafeAreaProvider>
		        <GestureHandlerRootView style={{flex:1}}>
			  <RootNavigation/>
		       <StatusBar style='auto'/>
			      <Text>Tst</Text>
			   </GestureHandlerRootView>
	 </SafeAreaProvider>

}

const RootNavigation = () =>{
 
	 return(
		<Stack>
       <Stack.Screen name='(tabs)' options={{headerShown:false}}/>
       <Stack.Screen name='player' options={{
		presentation:'card',
		gestureEnabled:true,
		gestureDirection:'horizontal',
		animationDuration:400,
		headerShown:false}}/>
	</Stack>
	 )
}

export default App