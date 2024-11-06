import React from 'react';
import { useNavigate } from "react-router-dom"

export const movieCard = ({ movieList }) => {
    const navigate = useNavigate()

    return (
        <div className='cardContainer' onClick={() => navigate('/detail')}>
            <img className='carImg' src={`http://localhost:5173${movieList.img}`} />
            <div className='cardContainer_cardInfo'>
                <h3>{movieList.title}</h3>
                <span>{movieList.voteAverage}</span>
            </div>
        </div>
    );
};

export default movieCard;