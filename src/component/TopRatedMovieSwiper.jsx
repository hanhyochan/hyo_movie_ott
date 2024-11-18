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
                    320: { slidesPerView: 1 },
                    480: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                    // 1280: { slidesPerView: 5 },
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