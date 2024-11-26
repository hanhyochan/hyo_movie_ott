import { useState } from 'react';
import SearchView from './SearchView';

const SearchBar = () => {
    const [searchView, setSearchView] = useState(false)

    const handleSearch = () => {
        setSearchView((prev) => !prev)
    }

    const handleOffSearch = () => {
        setSearchView((prev) => !prev)
    }

    return (
        <>
            {searchView ? (
                <>
                    <button onClick={handleOffSearch}>X</button>
                    <SearchView />
                </>
            ) : <button onClick={handleSearch}>검색</button>}
        </>
    );
};

export default SearchBar;