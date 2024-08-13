
export default interface MusicLibraryDto {
    id: number;
    url: string;
    title: string;
    artist: string | null;
    artwork: string | null;
    rating: number | null;
    trackTypeId: number | null;
    playlist: TrackTypeDto | null;
    createdOn: string;
    updatedOn: string | null;
}


export interface TrackTypeDto {
    id: number;
    trackName: string;
}