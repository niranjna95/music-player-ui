import Header from '@/components/Headers/Header'
import { container } from '@/config/ioc'
import { TYPES } from '@/config/types'
import MusicLibraryDto from '@/dtos/MusicLibraryDto'
import IUnitOfService from '@/services/interfaces/IUnitOfService'
import { defaultStyles } from '@/styles'
import { Stack } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { Text, View,StyleSheet } from 'react-native'

const ArtistsScreen = () => {
  const unitOfService = container.get<IUnitOfService>(TYPES.IUnitOfService);

  const [students, setStudent] = useState<MusicLibraryDto[]>([]);
  const fetchStudents = async () => {
    const response = await unitOfService.MusicLibraryService.get();
    if (response && response.status === 200 && response.data.data) {
      setStudent(response.data.data);
    }
  };

  useEffect(() => {
    (async () => {
      await fetchStudents();
      console.log(students)
    })();
  }, []);


  return (

     
     <View style={defaultStyles.container}>
      <Header headerName='Artists' />
      
        <View style={styles.container}>
      {/* Header */}
      
      <Text style={defaultStyles.text}>Artists Screen</Text>
      <Text style={styles.text}>Coming Soon</Text>
    </View>
     </View>
  )
}

export default ArtistsScreen



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center content vertically
    alignItems: 'center',     // Center content horizontally
   
  },
  text: {
    textAlign: 'center',
    color:'#fff',
    fontSize:30
  },
})


