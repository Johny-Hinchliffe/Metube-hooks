import React from 'react'

const VideoDetail = ({ video }) => {
	if (!video) {
		console.log('no video')
		return <div>Loading...</div>
	}
	const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
	return (
		<div>
			<div className="ui embed">
				<iframe
					title={video.snippet.title}
					width="560"
					height="315"
					src={videoSrc}
					frameBorder="0"
					allowFullScreen
				></iframe>
			</div>
			<div className="ui segment">
				<h4>{video.snippet.title}</h4>
				<p>{video.snippet.description}</p>
			</div>
		</div>
	)
}

export default VideoDetail
