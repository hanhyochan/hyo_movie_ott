import React, { useState, useEffect } from 'react';
import movieDetailData from '../assets/data/movieDetailData.json'

const Detail = () => {
    const [movie, setMovie] = useState([])

    const genres = movieDetailData.genres.map((el, index, array) => {
        if (index !== array.length - 1) {
            return el.name + ' | ';
        } else {
            return el.name;
        }
    }).join('');

    const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

    useEffect(() => {
        setMovie({
            posterImg: `${BASE_IMAGE_URL}${movieDetailData.belongs_to_collection.poster_path}`,
            backgroundImg: `${BASE_IMAGE_URL}${movieDetailData.backdrop_path}`,
            title: movieDetailData.title,
            runtime: movieDetailData.runtime,
            releaseDate: movieDetailData.release_date,
            voteAverage: movieDetailData.vote_average,
            overView: movieDetailData.overview,
        })
    }, [])


    return (
        <>
            <div className='blackBg'></div>
            <img className="bgImg" src={movie.backgroundImg} alt={`${movie.title}`} />
            <div className='detailContainer'>

                <div className='movieInfo'>
                    <div className='infoContainer'>
                        <h1>{movie.title}</h1>
                        <div className='line'>
                            <span>{movie.releaseDate} 개봉</span>
                            <span>{genres}</span>
                        </div>
                        <span>{movie.overView}</span>
                    </div>
                    <span className='voteAverage'>평점: {movie.voteAverage}점</span>
                </div>

                <img className="poster" src={movie.posterImg} alt={`${movie.title}`} />
            </div>
        </>
    );

};
export default Detail;