 import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View, Image, ActivityIndicator } from 'react-native';
import { unknowTrackImageUri } from '@/constants/images';
import { colors, fontSize } from '@/constants/tokens';
import { defaultStyles } from '@/styles';
import { Track, useActiveTrack, useIsPlaying } from 'react-native-track-player';
import { Entypo, Ionicons } from '@expo/vector-icons';
import LottieView from 'lottie-react-native';
import WaveAnimation from './WaveAnimation';
export type TrackListItemProps = {
    track: Track;
    onTrackSelect: (track:Track) => void
};

const TrackListItem = ({ track,onTrackSelect: handdleTrackSelect }: TrackListItemProps) => {
    const isActiveTrack = useActiveTrack()?.url === track.url;
    const {playing}= useIsPlaying();
    return (
        <TouchableHighlight onPress={() => handdleTrackSelect(track)}>
            <View style={styles.trackStylesContainer}>
                <View>
                    <Image
                        source={{
                            uri: track.artwork ?? unknowTrackImageUri,
                        }}
                        style={{
                            ...styles.trackArtworkImage,
                            opacity: isActiveTrack ? 0.6 : 1,
                        }}
                    />
    
                    {isActiveTrack && 
                       ( playing ? ( <WaveAnimation 
                        style={styles.trackPlayingIconIndicator}
                       
                        />) :
                       (<Ionicons style={styles.trackPausedIconIndicator} name='play' size={24} color={colors.icon}/>)) 
                    }
                </View>
               <View style={styles.trackdots}>
                 {/* Track title + artist */}
                 <View style={{ width: '100%' }}>
                    <Text
                        numberOfLines={1}
                        style={{
                            ...styles.trackTitleText,
                            color: isActiveTrack ? colors.primary : colors.text,
                        }}
                    >
                        {track.title}
                        {track.artist && (
                            <Text numberOfLines={1} style={styles.trackArtistText}>
                                {track.artist}
                            </Text>
                        )}
                    </Text>
                </View>
                <Entypo name='dots-three-horizontal' size={18} color={colors.icon}/>
               </View>
            </View>
        </TouchableHighlight>
    );
};

export default TrackListItem;

const styles = StyleSheet.create({

    trackStylesContainer: {
        
        flexDirection: 'row',
        columnGap: 14,
        alignItems: 'center',
        paddingRight: 15,
        overflow:"hidden"
      
    },
    trackArtworkImage: {
        borderRadius: 8,
        width: 50,
        height: 50,
    },
    trackTitleText: {
        ...defaultStyles.text,
        fontSize: fontSize.sm,
        fontWeight: '600',
        maxWidth: '90%',
    },
    trackArtistText: {
        ...defaultStyles.text,
        color: colors.textMuted,
        fontSize: 14,
        marginTop: 4,
    },
    trackdots:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    trackPlayingIconIndicator:{
        position:'absolute',
        top: 18,
        left:16,
        width:16,
        height: 16
    }
    ,
    trackPausedIconIndicator:{
        position:'absolute',
        top: 14,
        left:14,
     
    }
});

