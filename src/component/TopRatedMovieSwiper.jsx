import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import { getTopRatedMovies } from '../api/MoiveApi';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Autoplay} from "swiper/modules";
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

            <h1>평점 좋은 영화</h1>
            <div className='swiper-scrollbar-drag'>
            <Swiper className=''
                modules={[Navigation, A11y, Autoplay]}
                autoplay={{ delay: 3000 }}
                spaceBetween={20}
                slidesPerView={5}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    480: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                    1280: { slidesPerView: 5 },
                }}
            >
                {topRatedMovies.map((el) => (
                    <SwiperSlide className='black' key={el.id}>
                        <MovieCard movies={el} />
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>
        </>
    );
};

export default TopRatedMovieSwiper;