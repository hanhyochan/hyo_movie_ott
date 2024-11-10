import { useState, useEffect, useRef } from 'react'
import './../App.scss'
import MovieCard from '../component/MovieCard'
const VITE_API_AUTH_TOKEN = import.meta.env.VITE_API_AUTH_TOKEN

function Main() {
    const [movieList, setMovieList] = useState([])
    const [page, setPage] = useState(1)
    const target = useRef(null)

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

    // const checkIntersect = (entries) => {
    //     entries.forEach(entry => {
    //         if (entry.isIntersecting) {
    //             setPage(prev => prev + 1)
    //         }
    //     })
    // }

    // useEffect(() => {
    //     const observer = new IntersectionObserver(checkIntersect, {
    //         root: null,
    //         rootMargin: '0px',
    //         threshold: 0.5
    //     })

    //     const target = document.querySelector('#targetElement');
    //     if (target) observer.observe(target);

    //     return () => {
    //         if (target) observer.unobserve(target);
    //     };
    // }, [])

    // 특정요소, 특정요소상태, 콜백함수

    const callback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setPage(prev => prev + 1)
            }
        })
    }

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    }

    useEffect(() => {
        const observer = new IntersectionObserver(callback, options)
        if (target.current) observer.observe(target.current)
        return () => observer.unobserve(target.current)
    })

    return (
        <div className='container'>
            {movieList.map(el => <MovieCard key={el.id} movieList={el} />)}
            <div ref={target} ></div>
        </div>
    )
}
export default Main
