import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import.meta.env.VITE_API_KEY
const API_KEY = import.meta.env.VITE_API_KEY

const Detail = () => {
    const [movie, setMovie] = useState([])
    const { movieId } = useParams()

    const MOVIE_URL = 'https://api.themoviedb.org/3/movie/';
    const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

    // useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const response = await fetch(`https://api.themoviedb.org/3/movie/popular/${movieId}?api_key=${API_KEY}`);
    //         const movieDetailData = await response.json();
    //         console.log(movieDetailData)
    //         setMovie({
    //             posterImg: `${BASE_IMAGE_URL2}${movieDetailData.belongs_to_collection.poster_path}`,
    //             backgroundImg: `${BASE_IMAGE_URL2}${movieDetailData.backdrop_path}`,
    //             title: movieDetailData.title,
    //             runtime: movieDetailData.runtime,
    //             genres: movieDetailData.genres.map((el, index, array) => {
    //                 if (index !== array.length - 1) {
    //                     return el.name + ' | ';
    //                 } else {
    //                     return el.name;
    //                 }
    //             }).join(''),
    //             releaseDate: movieDetailData.release_date,
    //             voteAverage: movieDetailData.vote_average,
    //             overView: movieDetailData.overview,
    //         })
    //       } catch (error) {
    //         console.error('데이터 에러', error);
    //       }
    //     };
    //     fetchData();
    //   }, []);

    useEffect(() => {
        fetch(`${MOVIE_URL}${movieId}?api_key=${API_KEY}&language=ko-KR&page=1`)
            .then((res) => res.json())
            .then((res) => {
                setMovie(res)
            })
    }, []);

    const genres = movie.genres ? movie.genres.map((el) => el.name) : []
 
    return (
        <>
            <div className='blackBg'></div>
            <img className="bgImg" src={`${BASE_IMAGE_URL}${movie.backdrop_path}`} alt={`${movie.title}`} />
            <div className='detailContainer'>

                <div className='movieInfo'>
                    <div className='infoContainer'>
                        <h1>{movie.title}</h1>
                        <div className='line'>
                            <span>{movie.releaseDate} 개봉</span>
                            <span>{genres}</span>
                        </div>
                        <span>{movie.overview}</span>
                    </div>
                    <span className='voteAverage'>평점: {movie.vote_average}점</span>
                </div>

                <img className="poster" src={`${BASE_IMAGE_URL}${movie.poster_path}`} alt={`${movie.title}`} />
            </div>
        </>
    );

};
export default Detail;