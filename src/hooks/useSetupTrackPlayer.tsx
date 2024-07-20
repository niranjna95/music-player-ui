import { useEffect, useRef } from "react";
import TrackPlayer, { Capability, RepeatMode } from "react-native-track-player";




const setupPlayer = async () => {
  try {
    await TrackPlayer.setupPlayer({
      maxCacheSize: 1024 * 10,
      
    });
    await TrackPlayer.updateOptions({
      capabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
        Capability.Stop,
      ],
      compactCapabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
      ],
    });
    await TrackPlayer.setVolume(0.05);
    await TrackPlayer.setRepeatMode(RepeatMode.Queue);
   
    
  } catch (error) {
    console.log(error);
  }
};

type UseSetupTrackPlayerProps = {
  onLoad?: () => void;
};

export const useSetupTrackPlayer = ({ onLoad }: UseSetupTrackPlayerProps) => {
  const isInitiallized = useRef(false);
  useEffect(() => {
    setupPlayer()
      .then(() => {
        isInitiallized.current = true;
        onLoad?.();
      })
      .catch((error) => {
        isInitiallized.current = false;
        console.log(error);
      });
  }, [onLoad]);
};
