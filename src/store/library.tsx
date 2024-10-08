import { TrackWithPlayList } from "@/helpers/types";
import { Track } from "react-native-track-player";
import {create} from 'zustand'
import library from '@/assets/data/library.json'

interface LibraryState{
    tracks: TrackWithPlayList[]
    setTracks: (tracks: TrackWithPlayList[]) => void
    toggleTrackFavorite:(track: Track) => void
    addToPlaylist : (track: Track, playlistName: string) => void
}

export const useLibraryStore = create<LibraryState>()((set) => (
    {

        tracks: [],
        setTracks: (tracks) => set({ tracks }),
        toggleTrackFavorite: () =>{},
        addToPlaylist: () =>{}
    }
))

export const useTracks = () => useLibraryStore((state) => state.tracks)

export const useFavorites = () =>{

    const favorites = useLibraryStore((state) => state.tracks.filter((tracks) => tracks.rating === 1))

    const toggleTrackFavorite = useLibraryStore(state => state.toggleTrackFavorite)

    return{
        favorites,
        toggleTrackFavorite
    }
}