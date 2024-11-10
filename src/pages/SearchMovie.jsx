import { useLocation } from 'react-router-dom';
import MovieCard from '../component/MovieCard'

const SearchMovie = () => {

    const location = useLocation();
    const { searchedMovie } = location.state || {};
    return (
        <div>
            <div className='container'>
            {searchedMovie.map(el => <MovieCard key={el.id} movieList={el} />)}
        </div>
        </div>
    );
};

export default SearchMovie;