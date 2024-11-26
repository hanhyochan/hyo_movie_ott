import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useTheme from '../hooks/useTheme';
import { getLocalStorage } from '../utils/getLocalStorage';
import SearchBar from './SearchBar';

const NavBar = () => {
    const navigate = useNavigate()
    const [theme, setTheme] = useState(() => {
        const initialValue = getLocalStorage('theme') || false;
        return initialValue
    })
    useTheme(theme)

    const handleClick = () => {
        setTheme(prev => !prev)
    }

    return (
        <div className='navBarContainer'>
            <span onClick={() => navigate('/')}>Hyo_Movie</span>
            <div>
                <button onClick={handleClick}>
                    {theme ? 다크 : 라이트}
                    </button>
                <SearchBar />
                <button>로그인</button>
                <button>회원가입</button>
            </div>
        </div>
    );
};

export default NavBar;