import unknowArtistImage from "@/assets/images/unknown_artist.png"
import unknowTrackImage from "@/assets/images/unknown_track.png"
import { Image } from "react-native"

export const  unknowTrackImageUri = Image.resolveAssetSource(unknowTrackImage).uri
export const  unknowArtistImageUri = Image.resolveAssetSource(unknowArtistImage).uri
