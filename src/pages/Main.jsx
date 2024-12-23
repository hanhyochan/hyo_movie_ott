import { useState, useEffect } from 'react'
import './../App.scss'
import MovieCard from '../component/MovieCard'
import useInfiniteScroll from '../hooks/useInfiniteScroll'
const VITE_API_AUTH_TOKEN = import.meta.env.VITE_API_AUTH_TOKEN

function Main() {
    const [movieList, setMovieList] = useState([])
    const [page, setPage] = useState(1);
    const target = useInfiniteScroll(() => setPage(prev => prev + 1))

    const MOVIE_URL = 'https://api.themoviedb.org/3/movie/popular';
    const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

    useEffect(() => { 
        const fetchData = async () => {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${VITE_API_AUTH_TOKEN}`
                }
            };

            fetch(`${MOVIE_URL}?&language=ko-KR&page=${page}`, options)
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
            {movieList.map((el, idx) => <MovieCard key={el.id + idx} movieList={el} />)}
            <div ref={target} ></div>
        </div>
    )
}
export default Main
