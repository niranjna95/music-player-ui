import React from 'react'
import { FlatList, FlatListProps,Text,View,Image} from 'react-native'
import library from "@/assets/data/library.json"
import TrackListItem from './TrackListItem'
import { utilsStyles } from '@/styles'
import TrackPlayer, {Track} from 'react-native-track-player'
import { unknowTrackImageUri } from '@/constants/images'

export type  TrackListProps = Partial<FlatListProps<Track>> & {
  tracks: Track[]
}

const ItemDivider = () => (
    // 'ItemDivider is assigned a value but never used.'
    <View style={{...utilsStyles.itemSeparator, marginVertical: 10, marginLeft: 60}} />
);

const TracksList = ({tracks,...flatlistProps}:TrackListProps) => {
  const handlerTrackSelect = async (track: Track) =>{
     await TrackPlayer.load(track);
     await TrackPlayer.play();
  }
  return(
    <FlatList
           
           data={tracks}
           contentContainerStyle={{paddingTop:5, paddingBottom:128}}
           ItemSeparatorComponent={ItemDivider}
           ListEmptyComponent={<View>

                <Text style={utilsStyles.emptyContentText}>No songs found</Text>
                <Image
                        source={{
                            uri: unknowTrackImageUri
                        }}
                        style={utilsStyles.emptyContentImage}
                    />
           </View>}
           renderItem={({item:track}) => (
                <TrackListItem 
                  track={track}
                  onTrackSelect={handlerTrackSelect}
                /> 
           )}
           {...flatlistProps}
        />
  )
}

export default TracksList
