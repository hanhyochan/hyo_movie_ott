import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import { getNowPlayingMovies } from '../api/MoiveApi';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import 'swiper/css';

const NowPlayingMovieSwiper = () => {

    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

    useEffect(() => {
        const fetchNowPlayingMovies = async () => {
            const nowPlayingMovies = await getNowPlayingMovies();
            setNowPlayingMovies(prev => [...prev, ...nowPlayingMovies]);
        };
        fetchNowPlayingMovies();
    }, []);

    return (
        <>
            <Swiper className='topRatedMovieContainer'
                modules={[Autoplay]}
                spaceBetween={40}
                slidesPerView={1}
                loop={true}
                speed={500}
                autoplay={{ delay: 2000 }}
                breakpoints={{
                    1: { slidesPerView: 1 },
                    500: { slidesPerView: 2 },
                    800: { slidesPerView: 3 },
                    1301: { slidesPerView: 4 },
                }}
            >
                {nowPlayingMovies.map((el) => (
                    <SwiperSlide className='black' key={el.id}>
                        <MovieCard movies={el} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default NowPlayingMovieSwiper;