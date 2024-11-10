import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useDebounce from '../hooks/useDebounce';
const VITE_API_AUTH_TOKEN = import.meta.env.VITE_API_AUTH_TOKEN
import MovieCard from './MovieCard';
import { getRegExp } from 'korean-regexp';

const NavBar = () => {
    const navigate = useNavigate()
    const [searchTerm, setSearchTerm] = useState('')
    const debouncedQuery = useDebounce(searchTerm, 500);
    const [searchedMovie, setSearchMovie] = useState(null)

    const MOVIE_URL = 'https://api.themoviedb.org/3/search/movie';
    const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

    // const handleInputOnchange = (e) => {
    //     setSearchTerm(e)
    // }
    // console.log(debouncedQuery)

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${VITE_API_AUTH_TOKEN}`
            }
        };
        //debouncedQuery를 정규식으로 만들어서 무비네임중 match하는 것만 갖고 온다.

        // const reg = getRegExp(debouncedQuery)
        // console.log(reg)

        fetch(
            `${MOVIE_URL}?include_adult=false&language=en-US&page=1&query=${debouncedQuery}`, options)
            // `${MOVIE_URL}?include_adult=false&language=en-US&page=1`, options)
            .then(res => res.json())
            .then(res => {
                console.log(res)
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
    }, [debouncedQuery])

    return (
        <>
            <div className='navBarContainer'>
                <span onClick={() => navigate(`/`)}>OZ MOVIE</span>
                <div className='navBarBtnContainer'>
                    <button className='modeBtn'>🌙</button>
                    <input className='searchInput' type="text"
                        onChange={(e) => setSearchTerm(e.target.value)}
                        // onChange={(e) => handleInputOnchange(e.target.value)}
                    /><button>제출</button>
                    <button className='authBtn' onClick={() => navigate(`/signIn`)}>로그인</button>
                    <button className='authBtn' onClick={() => navigate(`/signUp`)}>회원가입</button>
                </div>
            </div>
            <div style={{ display: `flex` }}>
                {searchedMovie ? searchedMovie.map((el) => <MovieCard key={el.id} movieList={el} />) : null}
            </div>
        </>
    );
};

export default NavBar;