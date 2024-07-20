import Header from '@/components/Headers/Header'
import TracksList from '@/components/TracksList'
import { colors, screenPadding } from '@/constants/tokens'
import useNavigationSearch from '@/hooks/useNavigationSearch'
import { defaultStyles } from '@/styles'
import { Stack } from 'expo-router'
import React, { useMemo, useState } from 'react'
import { ScrollView, Text, View, ViewBase,StyleSheet } from 'react-native'
import library from '@/assets/data/library.json'
import {trackTitleFilter} from '../../../helpers/filter'
const SongsScreen = () => {

    //  const search = useNavigationSearch({
    //   searchBarOptions:{
    //     placeholder:'Find in songs'
    //   }
    //  })

    const [search, setSearch ] = useState('');
    const filteredTracks = useMemo(() =>{
        if(!search) return library


        return library.filter(trackTitleFilter(search))
    },[search])

  return (
     <>
        <Header headerName='Songs' search={search} setSearch={setSearch}/>
      <View style={defaultStyles.container}>
         {/* Header  */}

       <ScrollView 
       contentInsetAdjustmentBehavior='automatic'
       style={{paddingHorizontal: screenPadding.horizontal}}

       >
         <TracksList tracks={filteredTracks} scrollEnabled={false}/>
       </ScrollView>
      </View>
     </>
  )
}

export default SongsScreen

const styles = StyleSheet.create({
  debug: {
    borderColor: 'blue',
    borderWidth: 2
  }
});



