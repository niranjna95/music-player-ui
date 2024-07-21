import MovingText from '@/components/MovingText'
import { unknowTrackImageUri } from '@/constants/images'
import { colors, screenPadding } from '@/constants/tokens'
import { defaultStyles } from '@/styles'
import { FontAwesome } from '@expo/vector-icons'
import React from 'react'
import { ActivityIndicator, StyleSheet, View,Image } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useActiveTrack } from 'react-native-track-player'

const PlayerScreen = () => {
    const activeTrack = useActiveTrack();
    const {top, bottom} = useSafeAreaInsets();
    const isFavorite = false;
    const toggleFavorite = () =>{}
    if(!activeTrack){
        return (<View style={[defaultStyles.container,{justifyContent:'center'} ]}>
                <ActivityIndicator color={colors.icon}/>
            </View>
            )
    }
  return (
   <View style={style.overlayContainer}>
        <DismissPlayerSymbol/>
          <View style={{flex:1, marginTop: top + 20, marginBottom: bottom}}>
              <View style={style.artworkImageContainer}>
                <Image   source={{
                            uri: activeTrack.artwork ?? unknowTrackImageUri,
                        }}
                        style={style.artwrokImage}
                        />
              </View>
              <View style={{flex:1}}>
                <View style={{marginTop:'auto'}}>
                    <View style={{height:60}}>
                        <View style={{flexDirection:"row", justifyContent:"space-between",alignItems:'center'}}>
                          <View style={style.trackTitleContainer}>
                          <MovingText text={activeTrack.title ?? ''} animationThreshold={30} styles={style.trackTitleText}/>
                          </View>
                            <FontAwesome name={isFavorite ? 'heart' : 'heart-o'}
                              size={20} color={isFavorite ? colors.primary: colors.icon}
                              style={{marginHorizontal:14}}
                              onPress={toggleFavorite}
                            />
                        </View>
                    </View>
                </View>
              </View>
          </View>
   </View>
  )
}

export default PlayerScreen


const DismissPlayerSymbol = () =>{
    const {top} = useSafeAreaInsets();

    return <View style={{
        position:'absolute',
        top: top + 8,
        left: 0,
        right: 0,
        flexDirection:"row",
        justifyContent:'center'
    }}>

    <View
     accessible={false}
      style={{
        width:50,
        height: 8,
        borderRadius:8,
        backgroundColor:"#fff",
        opacity:0.7
      }}
    />

    </View>
}

const style = StyleSheet.create({
    overlayContainer:{
        ...defaultStyles.container,
        paddingHorizontal:screenPadding.horizontal,
        backgroundColor:'rgba(0,0,0,0.5)'
    },
    artworkImageContainer:{
        shadowOffset:{
            width:0,
            height:0
        },
        shadowOpacity:0.44,
        shadowRadius:11.0,
        flexDirection:'row',
        justifyContent:'center',
        height:'45%'
    },
    artwrokImage:{
        width:'100%',
        height:'100%',
        resizeMode:'cover',
        borderRadius:12
    },
    trackTitleContainer:{
           flex:1,
           overflow:'hidden'
    },
    trackTitleText:{
        ...defaultStyles.text,
        fontSize:22,
        fontWeight:'700'
    }
    

})

