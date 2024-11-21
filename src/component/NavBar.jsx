import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useTheme from '../hooks/useTheme';

const NavBar = () => {
    const navigate = useNavigate()
    const [theme, setTheme] = useState(false)
    useTheme(theme)
    
    return (
        <div className='navBarContainer'>
            <span onClick={() => navigate('/')}>Hyo_Movie</span>
            <button onClick={() => setTheme(prev => !prev)}>다크 라이트</button>
            <button>로그인</button>
            <button>회원가입</button>
        </div>
    );
};

export default NavBar;