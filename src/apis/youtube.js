import axios from 'axios'

const KEY = 'AIzaSyCar71693iPRYgKjyk0_johJvgLUukxcXs'

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		type: 'video',
		max: 5,
		key: KEY,
	},
})
