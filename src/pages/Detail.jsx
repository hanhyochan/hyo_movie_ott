import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Detail = () => {
    const movieDetailData = useSelector(state => state.movieDetail)
    const [movie, setMovie] = useState(movieDetailData)
    const genres = movie.genres

    return (
        <div>
           <img src={movie.img} />
           <h1>{movie.title}</h1>
           <span>{movie.voteAverage}</span>
           <span>{genres.map((el) => <span>{el}</span>)}</span>
           <span>{movie.overview}</span>
        </div>
    );
};

export default Detail;