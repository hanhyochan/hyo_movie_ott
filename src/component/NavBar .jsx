import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useDebounce from '../hooks/useDebounce';
const VITE_API_AUTH_TOKEN = import.meta.env.VITE_API_AUTH_TOKEN
import MovieCard from './MovieCard';

const NavBar = () => {
    const navigate = useNavigate()
    const [searchTerm, setSearchTerm] = useState(null) // 맨처음 검색값
    const debouncedQuery = useDebounce(searchTerm, 500); // 디바운스를 통해 전달받는 검색값
    const [searchedMovie, setSearchMovie] = useState(null) // 검색된 영화들
    const [showSearchInput, setShowSearchInput] = useState(false) // 검색창 보여줄까말까

    const MOVIE_URL = 'https://api.themoviedb.org/3/search/movie';
    const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

    useEffect(() => {
        if (!debouncedQuery) {
            console.log("영화업로드가 안됩니다.")
            setSearchMovie(null)
        } else {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${VITE_API_AUTH_TOKEN}`
                }
            };

            fetch(
                `${MOVIE_URL}?include_adult=false&language=en-US&page=1&query=${debouncedQuery}`, options)
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

    const handleInput = () => {
        setShowSearchInput(false)
        setSearchMovie(null)
        navigate('/searchMovie')
    }

    return (
        <>
            <div className='navBarContainer'>
                <span onClick={() => navigate(`/`)}>OZ MOVIE</span>
                <div className='navBarBtnContainer'>
                    <button className='modeBtn'>🌙</button>
                    <button onClick={() => setShowSearchInput(prev => !prev)}>🔍</button>

                    <button className='authBtn' onClick={() => navigate(`/signIn`)}>로그인</button>
                    <button className='authBtn' onClick={() => navigate(`/signUp`)}>회원가입</button>
                </div>
            </div>

            <div style={{ display: `flex` }}>
                {showSearchInput ? (
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
                ) : null
                }
            </div>
        </>
    );
};

export default NavBar;