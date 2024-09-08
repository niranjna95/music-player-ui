import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withRepeat, withSpring } from 'react-native-reanimated';

type WaveAnimationProps = {
    style?: ViewStyle;
    waveColor?: string;
    waveCount?: number;
    waveHeight?: number;
    waveWidth?: number;
};

// Separate Wave component
const Wave: React.FC<{ color: string; height: number; width: number; marginLeft: number }> = ({
    color,
    height,
    width,
    marginLeft,
}) => {
    const wave = useSharedValue(0);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ scaleY: wave.value }],
    }));

    wave.value = withRepeat(withSpring(1, { damping: 2, stiffness: 100 }), -1);

    return (
        <Animated.View
            style={[
                styles.wave,
                {
                    backgroundColor: color,
                    height: height,
                    width: width,
                    marginLeft: marginLeft,
                },
                animatedStyle,
            ]}
        />
    );
};

const WaveAnimation: React.FC<WaveAnimationProps> = ({
    style,
    waveColor = '#87CEEB',
    waveCount = 3,
    waveHeight = 15,
    waveWidth = 2,
}) => {
    return (
        <View style={[styles.container, style]}>
            {Array.from({ length: waveCount }).map((_, index) => (
                <Wave
                    key={index}
                    color={waveColor}
                    height={waveHeight}
                    width={waveWidth}
                    marginLeft={index * (waveWidth + 5)} // Adjust for some spacing
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    wave: {
        borderRadius: 2,
    },
});

export default WaveAnimation;
