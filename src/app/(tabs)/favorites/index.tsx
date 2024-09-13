import Header from '@/components/Headers/Header'
import TracksList from '@/components/TracksList'
import { defaultStyles } from '@/styles'
import React, { useMemo, useState } from 'react'
import { Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import library from '@/assets/data/library.json'
import { screenPadding } from '@/constants/tokens'
import { useFavorites } from '@/store/library'
import { trackTitleFilter } from '@/helpers/filter'
import { generateTracksListId } from '@/helpers/miscellaneous'

const FavoritesScreen = () => {
   const [search, setSearch ] = useState('');
      const favoritesTracks = useFavorites().favorites;
      
      const filteredFavoritesTracks = useMemo(() =>{

          if(!search) return favoritesTracks


          return favoritesTracks.filter(trackTitleFilter(search))

      },[search,favoritesTracks])



  return (
   <>
     <Header headerName='Favorites' search={search} setSearch={setSearch}/>
     <View style={defaultStyles.container}>
      
          <ScrollView  contentInsetAdjustmentBehavior='automatic'
       style={{paddingHorizontal: screenPadding.horizontal}}>
               <TracksList id={generateTracksListId('Favorite',search)} scrollEnabled={false} tracks={filteredFavoritesTracks}/>
          </ScrollView>
     </View>
   </>
   
  )
}

export default FavoritesScreen
