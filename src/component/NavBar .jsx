import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useDebounce from '../hooks/useDebounce';
import SearchBar from './searchBar';
import useMode from '../hooks/useMode';
import AuthBtn from './authBtn';
import Profile from './Profile';
const VITE_API_AUTH_TOKEN = import.meta.env.VITE_API_AUTH_TOKEN
import { useAuth } from '../context/AuthContext';

const NavBar = () => {
    const navigate = useNavigate()
    const [searchTerm, setSearchTerm] = useState(null)
    const debouncedQuery = useDebounce(searchTerm, 500);
    const [searchedMovie, setSearchMovie] = useState([])
    const [showSearchInput, setShowSearchInput] = useState(false)
    const [isDarkMode, setIsDarkMode] = useMode()
    const { user } = useAuth();

    const MOVIE_URL = 'https://api.themoviedb.org/3/search/movie';
    const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

    useEffect(() => {
        if (!debouncedQuery) {
            setSearchMovie([])
        } else {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${VITE_API_AUTH_TOKEN}`
                }
            };

            fetch(
                `${MOVIE_URL}?include_adult=false&language=ko-KR&page=1&query=${debouncedQuery}`, options)
                .then(res => res.json())
                .then(res => {
                    if (debouncedQuery) {
                        setSearchMovie(res.results.map((el) => ({
                            id: el.id,
                            img: BASE_IMAGE_URL + el.poster_path,
                            title: el.title,
                            voteAverage: el.vote_average
                        })))
                    } else if (!debouncedQuery) {
                        return null
                    }
                })
                .catch(err => console.error(err));
        }
    }, [debouncedQuery])

    return (
        <>
            <div className='navBarContainer'>
                <span onClick={() => navigate(`/`)}>OZ MOVIE</span>
                <div className='navBarBtnContainer'>
                    <button onClick={() => setIsDarkMode(prev => !prev)}>{isDarkMode ? '☀️' : '🌙'}</button>
                    {showSearchInput ? (
                        <button onClick={() => {
                            setShowSearchInput(false);
                            setSearchMovie(null);
                        }}>
                            X
                        </button>
                    ) : <button onClick={() => setShowSearchInput(true)}>🔍</button>}
                    {user ? <Profile /> : <AuthBtn />}
                </div>
            </div>
            <div style={{ display: `flex` }}>
                {showSearchInput ? (
                    <>
                        <SearchBar setSearchTerm={setSearchTerm} searchedMovie={searchedMovie} setSearchMovie={setSearchMovie} setShowSearchInput={setShowSearchInput} />
                    </>
                ) : null
                }
            </div>
        </>
    );
};

export default NavBar;