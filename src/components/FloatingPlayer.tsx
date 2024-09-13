import { unknowTrackImageUri } from '@/constants/images';
import { defaultStyles } from '@/styles';
import React from 'react'
import { StyleSheet, Text, TouchableHighlight, View, Image, ViewStyle, ViewProps } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Track, useActiveTrack } from 'react-native-track-player'
import { PlayPauseButton, SkipToNextButton } from './PlayerControls';
import { useLastActiveTrack } from '@/hooks/useLastActiveTrack';
import MovingText from './MovingText';
import { useRouter } from 'expo-router';

const FloatingPlayer = ({style}:ViewProps) => {
    const router = useRouter();
     
    const activeTrack = useActiveTrack();
    const lastActiveTrack = useLastActiveTrack()

    const displayerTrack = activeTrack ?? lastActiveTrack
    if(!displayerTrack) return null;

     const handlePress = () =>{
        router.navigate('/player')
     }

    return <TouchableOpacity onPress={handlePress} activeOpacity={0.9} style={[
        styles.container, style
    ]}>
        <>
        <Image source={{
            uri :displayerTrack.artwork ?? unknowTrackImageUri
        }}

         style={styles.trackArtworkImage}
        
        />
         <View style={styles.trckTitleContainer}>
            <MovingText styles={styles.trackTitle}
             text={displayerTrack.title ?? ''}
             animationThreshold={24}
            ></MovingText>
         </View>
             <View style={styles.trackerControlsContainer}>
                <PlayPauseButton iconSize={24} />
                <SkipToNextButton iconSize={22} />
             </View>
        </>
    </TouchableOpacity>
}

export default FloatingPlayer

const styles = StyleSheet.create({
    container:{
       flexDirection:'row',
       alignItems:"center",
       backgroundColor:'#252525',
       padding:8,
       borderRadius:12,
       paddingVertical:5
    },
    trackArtworkImage:{
        width:40,
        height: 40,
        borderRadius: 8
    },
    trackTitle:{
        ...defaultStyles.text,
        fontSize:18,
        fontWeight:'600',
        paddingLeft:10
    },
    trckTitleContainer:{
        flex:1,
        overflow: 'hidden',
        marginLeft:10
    },
    trackerControlsContainer:{
        flexDirection:'row',
        alignItems:'center',
        columnGap:20,
        marginRight:16,
        marginLeft:16
    }

})
