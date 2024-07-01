import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View, Image } from 'react-native';
import { unknowTrackImageUri } from '@/constants/images';
import { colors, fontSize } from '@/constants/tokens';
import { defaultStyles } from '@/styles';

export type TrackListItemProps = {
    track: { title: string; image?: string; artist?: string };
};

const TrackListItem = ({ track }: TrackListItemProps) => {
    const isActiveTrack = false;
    return (
        <TouchableHighlight>
            <View style={styles.trackStylesContainer}>
                <View>
                    <Image
                        source={{
                            uri: track.image ?? unknowTrackImageUri,
                        }}
                        style={{
                            ...styles.trackArtworkImage,
                            opacity: isActiveTrack ? 0.6 : 1,
                        }}
                    />
                </View>
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
        paddingRight: 20,
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
});
