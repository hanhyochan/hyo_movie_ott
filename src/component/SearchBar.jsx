import React from 'react';
import MovieCard from './MovieCard';
import { useNavigate } from 'react-router-dom';


const SearchBar = ({ setSearchTerm, searchedMovie, setSearchMovie, setShowSearchInput }) => {
    const navigate = useNavigate()

    const handleInput = () => {
        navigate('/searchMovie', { state: { searchedMovie } })
        setShowSearchInput(false)
        setSearchMovie(null)
    }

    return (
        <>
            <div className='searchBarContainer'>
                <div className='searchInputContainer'>
                    <input className='searchInput' type="text"
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder='영화제목을 입력하세요.'
                    />
                    <button onClick={handleInput}>🔍</button>
                </div>
            <div className='searchedMovies'>
                {searchedMovie ? searchedMovie.map((el) =>
                    <MovieCard key={el.id} movieList={el} setShowSearchInput={setShowSearchInput}
                    />
                ) : null}
            </div>
            </div>
        </>
    );
};

export default SearchBar;