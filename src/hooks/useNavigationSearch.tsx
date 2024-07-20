import { colors } from '@/constants/tokens'
import { useNavigation } from 'expo-router'
import React, { useLayoutEffect, useState } from 'react'
import { SearchBar, SearchBarProps } from 'react-native-screens'

const  defaultSearchOptions: SearchBarProps ={
    tintColor: "#fff",
    hideWhenScrolling :false
}

const useNavigationSearch = ({searchBarOptions}:{searchBarOptions?: SearchBarProps}) => {

     const [search, setSearch] = useState('');
     const navigation = useNavigation();

    const handlerOnChangeText: SearchBarProps['onChangeText'] = ({nativeEvent:{text}}) =>{
        setSearch(text)
    }
     
     useLayoutEffect( () =>{
          navigation.setOptions({
             headerSearchBarOptions:{
                ...defaultSearchOptions,
                ...searchBarOptions,
                onChangeText: handlerOnChangeText
             }
          })

     },[navigation, searchBarOptions])
  return search;
}

export default useNavigationSearch
