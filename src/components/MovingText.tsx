import { transform } from '@babel/core'
import React, { useEffect } from 'react'
import Animated, { cancelAnimation, Easing, StyleProps, useAnimatedStyle, useSharedValue, withDelay, withRepeat, withTiming } from 'react-native-reanimated'

export type MovingTextProps={

    text: string,
    animationThreshold: number,
    styles?: StyleProps
}

const MovingText = ({text,animationThreshold,styles}:MovingTextProps) => {
  
    const translateX = useSharedValue(0);
    const shouldAnimate = text.length >= animationThreshold;
    const textWithd = text.length * 3;

     useEffect(() =>{
       if(!shouldAnimate) return

        translateX.value = withDelay(1000, withRepeat(withTiming(
            -textWithd,{
                duration: 5000,
                easing: Easing.linear
            }
        ),-1, true))

        return() =>{
            cancelAnimation(translateX)
            translateX.value =0
        }
     },[translateX, text, animationThreshold, shouldAnimate, textWithd])


    const animtedstyle  = useAnimatedStyle(() =>{
        return{
            transform : [{translateX : translateX.value}]
        }
    })


    return (
   <Animated.Text  numberOfLines={1} style={[
    styles,
    animtedstyle,
    shouldAnimate && {
        width: 9999,//
        padding: 8
    }

   ]}>
   {text}
   </Animated.Text>
  )
}

export default MovingText
