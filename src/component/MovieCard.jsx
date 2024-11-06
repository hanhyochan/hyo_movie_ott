import React from 'react';
import { useNavigate } from "react-router-dom"

export const movieCard = ({ movieList }) => {
    const navigate = useNavigate()
    const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
    console.log(movieList)
    return (
        <div className='cardContainer' onClick={() => navigate('/detail')}>
            <img className='carImg' src={`${BASE_IMAGE_URL}${movieList.backdrop_path}`} />
            <div className='cardContainer_cardInfo'>
                <h3>{movieList.title}</h3>
                <span>{movieList.voteAverage}</span>
            </div>
        </div>
    );
};

export default movieCard;