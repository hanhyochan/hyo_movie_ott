import React, { createContext, useState } from 'react';

export const SearchViewContext = createContext()

export const SearchViewProvider = ({ children }) => {
    const [searchView, setSearchView] = useState(false)
    return (
        <SearchViewContext.Provider value={{ searchView, setSearchView }}>
            {children}
        </SearchViewContext.Provider>
    );
};