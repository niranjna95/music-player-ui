import Header from '@/components/Headers/Header'
import { defaultStyles } from '@/styles'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ArtistsScreen = () => {
	return (
		<View style={defaultStyles.container}>
			<Header headerName="Artists" />

			<View style={styles.container}>
				{/* Header */}

				<Text style={defaultStyles.text}>Artists Screen</Text>
				<Text style={styles.text}>Coming Soon</Text>
			</View>
		</View>
	)
}

export default ArtistsScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center', // Center content vertically
		alignItems: 'center', // Center content horizontally
	},
	text: {
		textAlign: 'center',
		color: '#fff',
		fontSize: 30,
	},
})
