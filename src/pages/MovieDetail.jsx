import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSelectedMovie } from '../api/MoiveApi';
const VITE_IMAGE_URL = import.meta.env.VITE_IMAGE_URL

const MovieDetail = () => {
    const { movieId } = useParams()
    const [selectedMoive, setSelectedMovie] = useState([])

    useEffect(() => {
        const fetchSelectedMovie = async () => {
            const selectedMovieData = await getSelectedMovie(movieId)
            setSelectedMovie(selectedMovieData)
        }
        fetchSelectedMovie()
    }, [])

    return (
        <div className='detailsContainer'>
            <img className="bgImg" src={`${VITE_IMAGE_URL}${selectedMoive.backdrop_path}`} alt={`${selectedMoive.title}`} />

            <div className='movieInfoContainer'>
                <img className="poster" src={`${VITE_IMAGE_URL}${selectedMoive.poster_path}`} alt={`${selectedMoive.title}`} />
                <div className='movieInfo'>
                    <div className='infoContainer'>
                        <h1>{selectedMoive.title}</h1>
                        <div className='line'>
                            <span>{selectedMoive.releaseDate} 개봉</span>
                            {/* <span>{genres}</span> */}
                        </div>
                        <span>{selectedMoive.overview}</span>
                    </div>
                    <span className='voteAverage'>평점: {selectedMoive.vote_average}점</span>
                </div>

            </div>
        </div>
    );
};

export default MovieDetail;