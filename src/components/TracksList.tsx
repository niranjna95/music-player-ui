import { unknowTrackImageUri } from '@/constants/images'
import { useQueue } from '@/store/queue'
import { utilsStyles } from '@/styles'
import React, { useRef } from 'react'
import { FlatList, FlatListProps, Image, Text, View } from 'react-native'
import TrackPlayer, { Track } from 'react-native-track-player'
import TrackListItem from './TrackListItem'

export type TrackListProps = Partial<FlatListProps<Track>> & {
	id: string
	tracks: Track[]
}

const ItemDivider = () => (
	// 'ItemDivider is assigned a value but never used.'
	<View style={{ ...utilsStyles.itemSeparator, marginVertical: 10, marginLeft: 60 }} />
)

const TracksList = ({ id, tracks, ...flatlistProps }: TrackListProps) => {
	const queueOffset = useRef(0)
	const { activeQueueId, setActiveQueueId } = useQueue()

	const handleTrackSelect = async (selectedTrack: Track) => {
		const trackIndex = tracks.findIndex((track) => track.url === selectedTrack.url)

		if (trackIndex === -1) return

		const isChangingQueue = id !== activeQueueId

		if (isChangingQueue) {
			const beforeTracks = tracks.slice(0, trackIndex)
			const afterTracks = tracks.slice(trackIndex + 1)

			await TrackPlayer.reset()

			// we construct the new queue
			await TrackPlayer.add(selectedTrack)
			await TrackPlayer.add(afterTracks)
			await TrackPlayer.add(beforeTracks)

			await TrackPlayer.play()

			queueOffset.current = trackIndex
			setActiveQueueId(id)
		} else {
			const nextTrackIndex =
				trackIndex - queueOffset.current < 0
					? tracks.length + trackIndex - queueOffset.current
					: trackIndex - queueOffset.current

			await TrackPlayer.skip(nextTrackIndex)
			TrackPlayer.play()
		}
	}

	return (
		<FlatList
			data={tracks}
			contentContainerStyle={{ paddingTop: 5, paddingBottom: 128 }}
			ListFooterComponent={ItemDivider}
			ItemSeparatorComponent={ItemDivider}
			ListEmptyComponent={
				<View>
					<Text style={utilsStyles.emptyContentText}>No songs found</Text>
					<Image
						source={{
							uri: unknowTrackImageUri,
						}}
						style={utilsStyles.emptyContentImage}
					/>
				</View>
			}
			renderItem={({ item: track }) => (
				<TrackListItem track={track} onTrackSelect={handleTrackSelect} />
			)}
			{...flatlistProps}
		/>
	)
}

export default TracksList
