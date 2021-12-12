import React, { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import useVideos from '../hooks/useVideos'

const App = () => {
	const [selectedVideo, setSelectedVideo] = useState(null)
	const [videos, search] = useVideos('Welcome')
	// setSelectedVideo(response.data.items[1])

	useEffect(() => {
		setSelectedVideo(videos[1])
	}, [videos])

	return (
		<div className="ui container">
			<SearchBar onFormSubmit={search} />
			<div className="ui grid">
				<div className="eleven wide column">
					<VideoDetail video={selectedVideo} />
				</div>
				<div className="five wide column">
					<VideoList onVideoSelect={setSelectedVideo} videos={videos} />
				</div>
				<div className="ui row"></div>
			</div>
		</div>
	)
}

export default App
