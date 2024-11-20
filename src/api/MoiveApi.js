import axios from 'axios';
const VITE_API_KEY = import.meta.env.VITE_API_KEY
const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export const getNowPlayingMovies = async () => {
    try {
        const response = await axios.get(`${VITE_API_BASE_URL}/now_playing`,
            {
                params: {
                    api_key: VITE_API_KEY,
                    language: 'ko-KR',
                }
            }
        )
        return response.data.results
    } catch (error) {
        console.error('현재 상영 중인 영화 패치에 실패했습니다.', error)
    }
}

export const getTopRatedMovies = async () => {
    try {
        const response = await axios.get(`${VITE_API_BASE_URL}/top_rated`,
            {
                params: {
                    api_key: VITE_API_KEY,
                    language: 'ko-KR',
                }
            }
        )
        return response.data.results
    } catch (error) {
        console.error('평점 높은 영화 패치에 실패했습니다.', error)
    }
}

export const getPopularMovies = async (page) => {
    try {
        const response = await axios.get(`${VITE_API_BASE_URL}/popular`,
            {
                params: {
                    api_key: VITE_API_KEY,
                    language: 'ko-KR',
                    page
                }
            }
        )
        return response.data.results
    } catch (error) {
        console.error('인기 영화 패치에 실패했습니다.', error)
    }
}

export const getSelectedMovie = async (movieId) => {
    try {
        const response = await axios.get(`${VITE_API_BASE_URL}/${movieId}?`,
            {
                params: {
                    api_key: VITE_API_KEY,
                    language: 'ko-KR',
                }
            }
        )
        return response.data
    } catch (error) {
        console.error('영화 상세 정보 패치에 실패했습니다.', error)
    }
}