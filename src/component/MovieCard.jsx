import React from 'react';
import { useNavigate } from 'react-router-dom';
const VITE_IMAGE_URL = import.meta.env.VITE_IMAGE_URL

const MovieCard = ({ movies }) => {
    const navigate = useNavigate()

    const titleTextLimit = (title) => {
        const textLimit = title.length > 12 ? title.slice(0, 12) + '...' : title
        return textLimit
    }

    const formatReleaseYear = (date) => {
        const releaseYear = date && date.slice(0, 4)
        return releaseYear
    }

    const formatVoteAverage = (average) => {
        const voteAverage = average && average.toString().slice(0, 3)
        return voteAverage
    }

    const handleClick = () => {
        navigate(`/details/${movies.id}`)
    }

    return (
        <div className='movieCardContainer' onClick={handleClick}>
            <span className='moiveVoteAverage'>{formatVoteAverage(movies.vote_average)}</span>
            <img src={`${VITE_IMAGE_URL}${movies.poster_path}`} />
            <div className='movieInfoContainer'>
                <h2>{titleTextLimit(movies.title)}</h2>
                <span>{formatReleaseYear(movies.release_date)}</span>
            </div>
        </div>
    );
};

export default MovieCard;