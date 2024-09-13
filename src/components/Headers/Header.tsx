import { colors } from '@/constants/tokens'
import useNavigationSearch from '@/hooks/useNavigationSearch'
import { defaultStyles } from '@/styles'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, View,TextInput, TouchableOpacity } from 'react-native'


interface HeaderPrpos{
 headerName: string;
 search?: string;
  setSearch?: (text: string) => void;
}


export default function Header({headerName, search, setSearch}:HeaderPrpos) {

   
  return (
      <>
       <View style={styles.mainContainer}>
      <View>
        <Text style={styles.headerText}>{headerName}</Text>
      </View>
      {/* Search Bar */}
      <View style={styles.searchbar}>
        <Ionicons name="search" size={24} color={colors.background} />
        <TextInput
          placeholder='Find in songs'
          value={search}
          onChangeText={setSearch}
          style={styles.searchInput}
        />
        {search ? (
          <TouchableOpacity onPress={() => setSearch?.('')}>
            <Ionicons name="close-circle" size={24} color={colors.primary} style={styles.clearIcon} />
          </TouchableOpacity>
        ) : null}
      </View>
      {/* <TouchableOpacity onPress={() => setSearch?.('')}>
        <Text style={styles.cancelButton}>Cancel</Text>
      </TouchableOpacity> */}
    </View>
      </>
  )
}

const styles = StyleSheet.create({

    mainContainer:{
       padding:20,
       paddingTop:40,
       backgroundColor:colors.background,
    //    borderBottomLeftRadius:20,
    //    borderBottomRightRadius:20
    },
    headerText:{
        color:'white',
        fontSize:25
    },
    searchbar:{
        display:'flex',
        flexDirection:'row',
        gap:10,
        alignItems:'center',
        backgroundColor:'#fff',
        padding:5,
        marginVertical:5,
        marginTop:10,
        borderRadius:8
    },
    searchInput: {
        marginLeft: 8,
        flex: 1,
        // additional styles if needed
      },
      clearIcon: {
        marginLeft: 8,
      },
      cancelButton: {
        marginLeft: 8,
        color: colors.primary,
      },
})
