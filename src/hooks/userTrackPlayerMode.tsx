import React, { useCallback, useEffect, useState } from 'react'
import TrackPlayer, { RepeatMode } from 'react-native-track-player'

const userTrackPlayerMode = () => {

    const [repeatMode, setRepeatMode] = useState<RepeatMode>();

    const changeRepeatMode = useCallback(async (repeatMode:RepeatMode)=>{
             setRepeatMode(repeatMode)

    },[])

    useEffect(() =>{
        TrackPlayer.getRepeatMode().then(setRepeatMode)
    },[])
  return {repeatMode,changeRepeatMode}
}

export default userTrackPlayerMode
