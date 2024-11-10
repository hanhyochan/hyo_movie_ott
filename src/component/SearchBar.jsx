import React from 'react';
import MovieCard from './MovieCard';

const SearchBar = ({searchedMovie, setSearchTerm, setShowSearchInput}) => {
    
    const handleInput = () => {
        setShowSearchInput(false)
        setSearchMovie(null)
        navigate('/searchMovie')
    }

    return (
        <div style={{ display: `flex` }}>
                <>
                    <input className='searchInput' type="text"
                        onChange={(e) => setSearchTerm(e.target.value)} />
                    <button onClick={handleInput}>제출</button>
                    <button onClick={() => {
                        setShowSearchInput(false)
                        setSearchMovie(null)
                    }
                    } >취소합니다</button>
                    {searchedMovie ? searchedMovie.map((el) => <MovieCard key={el.id} movieList={el} setShowSearchInput={setShowSearchInput} />) : null}
                </>
        </div>
    );
};

export default SearchBar;