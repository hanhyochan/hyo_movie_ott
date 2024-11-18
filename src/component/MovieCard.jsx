import React from 'react';
const VITE_IMAGE_URL = import.meta.env.VITE_IMAGE_URL

const MovieCard = ({ movies }) => {

    const titleTextLimit = (title) => {
        const textLimit = title.length > 7 ? title.slice(0, 7) + '...' : title
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

    return (
        <div className='movieCardContainer'>
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