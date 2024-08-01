import Header from '@/components/Headers/Header'
import { container } from '@/config/ioc'
import { TYPES } from '@/config/types'
import MusicLibraryDto from '@/dtos/MusicLibraryDto'
import IUnitOfService from '@/services/interfaces/IUnitOfService'
import { defaultStyles } from '@/styles'
import { Stack, useFocusEffect } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { Text, View,StyleSheet } from 'react-native'

const ArtistsScreen = () => {

  const unitOfService = container.get<IUnitOfService>(TYPES.IUnitOfService);

  const [students, setStudents] = useState<MusicLibraryDto[]>([]);
  const fetchStudents = async () => {
    console.log("Test")
    try {
      const response = await unitOfService.MusicLibraryService.get();
      if (response && response.status === 200 && response.data.data) {
        setStudents(response.data.data);
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


