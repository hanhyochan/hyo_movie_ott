import React from 'react';
import { useParams } from 'react-router-dom';
import { selectedMovies } from '../api/MoiveApi';

const MovieDetail = () => {
    const { movieId } = useParams()
    console.log(movieId)

    useEffect(() => {
        console.log(1)
        selectedMovies()
    }, [])

    return (
        <div>
            <h1>d안녕</h1>
        </div>
    );
};

export default MovieDetail;