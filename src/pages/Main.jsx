import { useState, useEffect } from 'react'
import './../App.scss'
import MovieCard from '../component/MovieCard'
const API_KEY = import.meta.env.VITE_API_KEY

function Main() {
    const [movieList, setMovieList] = useState([])
    const [page, setPage] = useState(1)

    const MOVIE_URL = 'https://api.themoviedb.org/3/movie/popular';
    const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

    useEffect(() => {
        const fetchData = async () => {
            fetch(`${MOVIE_URL}?api_key=${API_KEY}&language=ko-KR&page=${page}`)
                .then((res) => res.json())
                .then((res) => {
                    setMovieList(prev => [...prev, ...res.results.map((el) => ({
                        id: el.id,
                        img: BASE_IMAGE_URL + el.poster_path,
                        title: el.title,
                        voteAverage: el.vote_average
                    }))])
                })
        };
        fetchData();
    }, [page]);

    return (
        <div className='container'>
            {movieList.map(el => <MovieCard key={el.id} movieList={el} />)}
            <button onClick={() => setPage(prev => prev + 1)}>더보기</button>
        </div>
    )
}
export default Main
