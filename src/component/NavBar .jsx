import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavBar  = () => {
    const navigate = useNavigate()

    return (
        <div className='navBarContainer'>
            <span onClick={() => navigate(`/`)}>OZ MOVIE</span>
            <div className='navBarBtnContainer'>
                <button className='modeBtn'>🌙</button>
                <button className='authBtn' onClick={() => navigate(`/signIn`)}>로그인</button>
                <button className='authBtn' onClick={() => navigate(`/signUp`)}>회원가입</button>
            </div>
        </div>
    );
};

export default NavBar ;