import axios from 'axios';
const VITE_API_KEY = import.meta.env.VITE_API_KEY
const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export const getTopRatedMovies = async () => {

    try {
        const response = await axios.get(`${VITE_API_BASE_URL}/movie/top_rated`,
            {
                params: {
                    api_key: VITE_API_KEY,
                    language: 'ko-KR',
                    // page
                }
            }
        )
        return response.data.results
    } catch (error) {
        console.error('최고 평점 영화 패치에 실패했습니다.', error)
    }
}

export const getPopularMovies = async (page) => {

    try {
        const response = await axios.get(`${VITE_API_BASE_URL}/movie/popular`,
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