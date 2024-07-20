import React from 'react'
import { Event, useTrackPlayerEvents } from 'react-native-track-player'


const events = [Event.PlaybackState, Event.PlaybackError, Event.PlaybackActiveTrackChanged]
const useLogTrackPlayerState = () => {
   useTrackPlayerEvents(events, async (events) =>{
         if(events.type === Event.PlaybackError){
            console.log('An error occurred', events)
         }

         if(events.type === Event.PlaybackState){
            console.log('Playback state', events.state)
         }

         if(events.type === Event.PlaybackActiveTrackChanged){
            console.log('Track changed', events.index)
         }
   } )
}

export default useLogTrackPlayerState

