import React from 'react'
import { FlatList, FlatListProps,View} from 'react-native'
import library from "@/assets/data/library.json"
import TrackListItem from './TrackListItem'
import { utilsStyles } from '@/styles'

export type  TrackListProps = Partial<FlatListProps<unknown>>

const ItemDivider = () => (
    // 'ItemDivider is assigned a value but never used.'
    <View style={{...utilsStyles.itemSeparator, marginVertical: 10, marginLeft: 60}} />
);

const TracksList = ({...flatlistProps}:TrackListProps) => {
  return(
    <View style={{ flex: 1,padding:16 }}>
        <FlatList
           
           data={library}
           ItemSeparatorComponent={ItemDivider}
           renderItem={({item:track}) => (

                <TrackListItem 
                  track={{
                    ...track,
                    image: track.artwork
                  }}
                
                />
           )}
           {...flatlistProps}
        />
        </View>
  )
}

export default TracksList
