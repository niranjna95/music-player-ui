import Header from '@/components/Headers/Header'
import TracksList from '@/components/TracksList'
import { screenPadding } from '@/constants/tokens'
import { defaultStyles } from '@/styles'
import React, { useMemo, useState } from 'react'
import { ScrollView, View, StyleSheet } from 'react-native'
import library from '@/assets/data/library.json'
import {trackTitleFilter} from '../../../helpers/filter'
import { useTracks } from '@/store/library'
import { generateTracksListId } from '@/helpers/miscellaneous'
const SongsScreen = () => {

    //  const search = useNavigationSearch({
    //   searchBarOptions:{
    //     placeholder:'Find in songs'
    //   }
    //  })

    const [search, setSearch ] = useState('');

    const tracks = useTracks()

    const filteredTracks = useMemo(() =>{
        if(!search) return tracks


        return tracks.filter(trackTitleFilter(search))
    },[search,tracks])

  return (
     <>
        <Header headerName='Songs' search={search} setSearch={setSearch}/>
      <View style={defaultStyles.container}>
         {/* Header  */}

       <ScrollView 
       contentInsetAdjustmentBehavior='automatic'
       style={{paddingHorizontal: screenPadding.horizontal}}

       >
         <TracksList id={generateTracksListId('songs',search)} tracks={filteredTracks} scrollEnabled={false}/>
       </ScrollView>
      </View>
     </>
  )
}

export default SongsScreen




