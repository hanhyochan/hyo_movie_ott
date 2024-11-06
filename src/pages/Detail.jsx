import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Detail = () => {
    const movieDetailData = useSelector(state => state.movieDetail)
    // const [movie, setMovie] = useState(movieDetailData)
    const genres = movieDetailData.genres
console.log(movieDetailData.overView)
    return (
        <div>
           <img src={movieDetailData.img} />
           <h1>{movieDetailData.title}</h1>
           <span>{movieDetailData.voteAverage}</span>
           <span>{genres.map((el) => <span key={el.id}>{el.name}</span>)}</span>
           <span>{movieDetailData.overView}</span>
        </div>
    );
}; 
export default Detail;