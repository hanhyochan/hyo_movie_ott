import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import { getTopRatedMovies } from '../api/MoiveApi';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import 'swiper/css';

const TopRatedMovieSwiper = () => {

    const [topRatedMovies, setTopRatedMovies] = useState([]);

    useEffect(() => {
        const fetchTopRatedMovies = async () => {
            const topRatedMoviesData = await getTopRatedMovies();
            setTopRatedMovies(prev => [...prev, ...topRatedMoviesData]);
        };
        fetchTopRatedMovies();
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
                {topRatedMovies.map((el) => (
                    <SwiperSlide className='black' key={el.id}>
                        <MovieCard movies={el} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default TopRatedMovieSwiper;