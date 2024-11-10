import React from 'react';
import { useNavigate } from "react-router-dom"

export const movieCard = ({ movieList, setShowSearchInput }) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/details/${movieList.id}`)
        setShowSearchInput(false)
    }

    return (
        <div className='cardContainer' onClick={handleClick}>
            <img className='cardImg' src={movieList.img} alt={movieList.title} />
            <div className='cardContainer_cardInfo'>
                <h3>{movieList.title}</h3>
                <span>평점: {movieList.voteAverage}점</span>
            </div>
        </div>
    );
};

export default movieCard;