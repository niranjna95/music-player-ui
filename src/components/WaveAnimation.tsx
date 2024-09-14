import React from 'react'
import { StyleSheet, View, ViewStyle } from 'react-native'
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withRepeat,
	withSpring,
} from 'react-native-reanimated'

type WaveAnimationProps = {
	style?: ViewStyle
	waveColor?: string
	waveCount?: number
	waveHeight?: number
	waveWidth?: number
}

const WaveAnimation: React.FC<WaveAnimationProps> = ({
	style,
	waveColor = '#87CEEB',
	waveCount = 3,
	waveHeight = 15,
	waveWidth = 2,
}) => {
	// Create shared values for each wave
	const sharedValue1 = useSharedValue(0)
	const sharedValue2 = useSharedValue(0)
	const sharedValue3 = useSharedValue(0)

	// Start the animation for each wave
	sharedValue1.value = withRepeat(withSpring(1, { damping: 2, stiffness: 100 }), -1)
	sharedValue2.value = withRepeat(withSpring(1, { damping: 2, stiffness: 100 }), -1)
	sharedValue3.value = withRepeat(withSpring(1, { damping: 2, stiffness: 100 }), -1)

	// Define animated styles individually at the top level
	const animatedStyle1 = useAnimatedStyle(() => ({
		transform: [{ scaleY: sharedValue1.value }],
	}))

	const animatedStyle2 = useAnimatedStyle(() => ({
		transform: [{ scaleY: sharedValue2.value }],
	}))

	const animatedStyle3 = useAnimatedStyle(() => ({
		transform: [{ scaleY: sharedValue3.value }],
	}))

	// Place them in an array or map over them as needed
	const animatedStyles = [animatedStyle1, animatedStyle2, animatedStyle3]

	return (
		<View style={[styles.container, style]}>
			{animatedStyles.map((animatedStyle, index) => {
				return (
					<Animated.View
						key={index}
						style={[
							styles.wave,
							{
								backgroundColor: waveColor,
								height: waveHeight,
								width: waveWidth,
								marginLeft: index * (waveWidth + 0),
							},
							animatedStyle,
						]}
					/>
				)
			})}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	wave: {
		borderRadius: 2,
	},
})

export default WaveAnimation
