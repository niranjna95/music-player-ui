import FloatingPlayer from '@/components/FloatingPlayer'
import { colors, fontSize } from '@/constants/tokens'
import { FontAwesome, FontAwesome6, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { BlurView } from 'expo-blur'
import { Tabs } from 'expo-router'
import React from 'react'
import { StyleSheet } from 'react-native'

const TabsNavigation = () => {
	return (
		<>
			<Tabs
				screenOptions={{
					tabBarActiveTintColor: colors.primary,
					tabBarInactiveTintColor: '#fff',
					tabBarLabelStyle: {
						fontSize: fontSize.xs,
						fontWeight: '500',
					},
					// headerBackground: () => (
					//   <View style={{ flex: 1, backgroundColor: "#000" }} />
					// ),
					headerShown: false,

					tabBarStyle: {
						position: 'absolute',
						borderTopLeftRadius: 20,
						borderTopRightRadius: 20,
						borderTopWidth: 0,
						paddingTop: 8,
					},
					tabBarBackground: () => (
						<BlurView
							intensity={95}
							style={{
								...StyleSheet.absoluteFillObject,
								overflow: 'hidden',
								borderTopLeftRadius: 20,
								borderTopRightRadius: 20,
								borderBottomLeftRadius: 40,
								borderBottomRightRadius: 40,
							}}
						/>
					),
				}}
			>
				<Tabs.Screen
					name="favorites"
					options={{
						title: 'Favorites',
						headerTintColor: '#fff',
						tabBarIcon: ({ color }) => {
							return <FontAwesome name="heart" size={20} color={color} />
						},
					}}
				/>
				<Tabs.Screen
					name="playlists"
					options={{
						title: 'Playlists',
						headerTintColor: '#fff',
						tabBarIcon: ({ color }) => {
							return <MaterialCommunityIcons name="playlist-play" size={24} color={color} />
						},
					}}
				/>
				<Tabs.Screen
					name="(songs)"
					options={{
						title: 'Songs',
						headerTintColor: '#fff',
						tabBarIcon: ({ color }) => {
							return <Ionicons name="musical-notes-sharp" size={24} color={color} />
						},
					}}
				/>
				<Tabs.Screen
					name="artists"
					options={{
						title: 'Artists',
						headerTintColor: '#fff',
						tabBarIcon: ({ color }) => {
							return <FontAwesome6 name="users-line" size={20} color={color} />
						},
					}}
				/>
			</Tabs>
			<FloatingPlayer
				style={{
					position: 'absolute',
					left: 8,
					right: 8,
					bottom: 52,
				}}
			/>
		</>
	)
}

export default TabsNavigation
