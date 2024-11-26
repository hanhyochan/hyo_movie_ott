import { useEffect, useState } from 'react';
import useDebounce from '../hooks/useDebounce';
import { getSearchedMovies } from '../api/MoiveApi';
import MovieCard from './MovieCard';

const SearchView = () => {
    const [searchedValue, setSearchedValue] = useState('')
    const query = useDebounce(searchedValue, 500)
    const [searchedMovies, setSearchedMoives] = useState([])

    useEffect(() => {
        const fetchSearchedMoives = async () => {
            const searchMoviesData = await getSearchedMovies(query)
            setSearchedMoives(searchMoviesData)
        }
        fetchSearchedMoives()
    }, [query])

    return (
        <div className='searchViewContainer'>
            <input type='text' onChange={(e) => setSearchedValue(e.target.value)} placeholder='영화제목을 입력하세요.' />
            <div className='searchedMoiveContainer'>
                {searchedMovies.map((el, idx) => <MovieCard key={el.id + idx} movies={el} />)}
            </div>
        </div>
    );
};

export default SearchView;