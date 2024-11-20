import React, { useEffect, useState, useContext } from 'react';
import { getPopularMovies } from '../api/MoiveApi';
import MovieCard from '../component/MovieCard';
import useInfiniteScroll from '../hooks/useInfiniteScroll';
import { PageContext } from '../context/pageContext';
import TopRatedMovieSwiper from '../component/TopRatedMovieSwiper';
import NowPlayingMovieSwiper from '../component/NowPlayingMovieSwiper';

const Main = () => {
    const [popularMovies, setPopularMovies] = useState([])
    const { page, setPage } = useContext(PageContext)
    const target = useInfiniteScroll(() => setPage(prev => prev + 1))



    useEffect(() => {
        const fetchPopularMovies = async () => {
            const popularMovies = await getPopularMovies(page)
            setPopularMovies(prev => [...prev, ...popularMovies])
        }
        fetchPopularMovies()
    }, [page])

    return (
        <div className='container'>

            <h1>현재 상영중인 영화</h1>
            <NowPlayingMovieSwiper />
            
            <h1>평점 높은 영화</h1>  
                <TopRatedMovieSwiper />
            
            <h1>인기 영화</h1>
            <div className='popularMovieContainer'>
                {popularMovies.map((el, idx) => <MovieCard key={el.id + idx} movies={el} />)}
            </div>
            
            <div ref={target}></div>
        </div>
    );
};

export default Main;