import { useState, useEffect } from 'react'
import './../App.scss'
import MovieCard from '../component/MovieCard'
const API_KEY = import.meta.env.VITE_API_KEY

function Main() {
    const [movieList, setMovieList] = useState([])

    const MOVIE_URL = 'https://api.themoviedb.org/3/movie/popular';
    const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

    useEffect(() => {
        const fetchData = async () => {
            fetch(`${MOVIE_URL}?api_key=${API_KEY}&language=ko-KR&page=1`)
                .then((res) => res.json())
                .then((res) => {
                    setMovieList(res.results.map((el) => ({
                        id: el.id,
                        img: BASE_IMAGE_URL + el.poster_path,
                        title: el.title,
                        voteAverage: el.vote_average
                    })))
                })
        };
        fetchData();
    }, []);

    return (
        <div className='container'>
            {movieList.map(el => <MovieCard key={el.id} movieList={el} />)}
        </div>
    )
}
export default Main
