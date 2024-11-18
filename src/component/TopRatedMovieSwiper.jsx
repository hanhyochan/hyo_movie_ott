import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import { getTopRatedMovies } from '../api/MoiveApi';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import 'swiper/css';

const TopRatedMovieSwiper = () => {

    const [topRatedMovies, setTopRatedMovies] = useState([]);

    useEffect(() => {
        const fetchTopRatedMovies = async () => {
            const topRatedMovies = await getTopRatedMovies();
            setTopRatedMovies(prev => [...prev, ...topRatedMovies]);
        };
        fetchTopRatedMovies();
    }, []);

    return (
        <>
            <Swiper className='topRatedMovieContainer'
                modules={[Navigation, Pagination, A11y, Autoplay]}
                slidesPerView={1}
                loop={true}
                // speed={400}
                // autoplay={{ delay: 4000 }}
                spaceBetween={40}
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