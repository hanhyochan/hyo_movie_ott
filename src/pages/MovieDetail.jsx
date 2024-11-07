import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import.meta.env.VITE_API_KEY

const Detail = () => {
    const [movie, setMovie] = useState([])
const { movieId } = useParams()

    const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=9a3d28aa764f7a0dd23e10e216af9d90`);
            const movieDetailData = await response.json();
            setMovie({
                posterImg: `${BASE_IMAGE_URL}${movieDetailData.belongs_to_collection.poster_path}`,
                backgroundImg: `${BASE_IMAGE_URL}${movieDetailData.backdrop_path}`,
                title: movieDetailData.title,
                runtime: movieDetailData.runtime,
                genres: movieDetailData.genres.map((el, index, array) => {
                    if (index !== array.length - 1) {
                        return el.name + ' | ';
                    } else {
                        return el.name;
                    }
                }).join(''),
                releaseDate: movieDetailData.release_date,
                voteAverage: movieDetailData.vote_average,
                overView: movieDetailData.overview,
            })
          } catch (error) {
            console.error('데이터 에러', error);
          }
        };
        fetchData();
      }, []);

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
                            <span>{movie.genres}</span>
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