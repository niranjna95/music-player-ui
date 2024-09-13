import Header from '@/components/Headers/Header'
import TracksList from '@/components/TracksList'
import { screenPadding } from '@/constants/tokens'
import { defaultStyles } from '@/styles'
import React, { useEffect, useMemo, useState } from 'react'
import { ScrollView, View, StyleSheet } from 'react-native'
import {trackTitleFilter} from '../../../helpers/filter'
import { useLibraryStore, useTracks } from '@/store/library'
import { generateTracksListId } from '@/helpers/miscellaneous'
import { useFocusEffect } from 'expo-router'
import { container } from '@/config/ioc'
import IUnitOfService from '@/services/interfaces/IUnitOfService'
import { TYPES } from '@/config/types'
import MusicLibraryDto from '@/dtos/MusicLibraryDto'
import { TrackWithPlayList } from '@/helpers/types'
const SongsScreen = () => {

    //  const search = useNavigationSearch({
    //   searchBarOptions:{
    //     placeholder:'Find in songs'
    //   }
    //  })


    const unitOfService = container.get<IUnitOfService>(TYPES.IUnitOfService);
    const setTracks = useLibraryStore((state) => state.setTracks);
    const mapToTrackWithPlayList = (dto: MusicLibraryDto): TrackWithPlayList => {
      return {
        id: dto.id,
        url: dto.url, // Ensure this field is correctly mapped
        title: dto.title ?? '', // Handle null values
        artist: dto.artist ?? '', // Handle null values
        artwork: dto.artwork ?? '', // Handle null values
        rating: dto.rating ?? 0, // Handle null values, use default if necessary
        trackTypeId: dto.trackTypeId ?? 0, // Handle null values, use default if necessary
        playlist: dto.playlist ? [dto.playlist.trackName] : [], // Handle playlist conversion
        createdOn: dto.createdOn,
        updatedOn: dto.updatedOn ?? '', // Handle null values
      };
    };



    const [students, setStudents] = useState<MusicLibraryDto[]>([]);
    const fetchStudents = async () => {
      console.log("Test")
      try {
        const response = await unitOfService.MusicLibraryService.get();
        if (response && response.status === 200 && response.data.data) {
          //setStudents(response.data.data);
          const fetchedData = response.data.data.map(mapToTrackWithPlayList);
          setTracks(fetchedData);
        } else {
          console.error('Failed to fetch students:', response);
        }
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };
  
    useFocusEffect(
      React.useCallback(() => {
        fetchStudents();
      }, [])
    );
  
    useEffect(() => {
      console.log(students);
    }, [students]);
  





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




