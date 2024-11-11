import React from 'react';
import { useNavigate } from 'react-router-dom';

const AuthBtn = ({isSignIn}) => {
    const navigate = useNavigate()
    
    return (
        <>
            <button className='authBtn' onClick={() => navigate(`/signIn`)}>로그인</button>
            <button className='authBtn' onClick={() => navigate(`/signUp`)}>회원가입</button>
        </>
    );
};

export default AuthBtn;