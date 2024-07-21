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

const WaveAnimation: React.FC<WaveAnimationProps> = ({
    style,
    waveColor = '#87CEEB',
    waveCount = 3,
    waveHeight = 15,
    waveWidth = 2,
}) => {
    const waves = Array.from({ length: waveCount }, (_, index) => useSharedValue(0));

    waves.forEach((wave, index) => {
        wave.value = withRepeat(withSpring(1, { damping: 2, stiffness: 100 }), -1);
    });

    return (
        <View style={[styles.container, style]}>
            {waves.map((wave, index) => {
                const animatedStyle = useAnimatedStyle(() => ({
                    transform: [{ scaleY: wave.value }],
                }));

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
                );
            })}
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
