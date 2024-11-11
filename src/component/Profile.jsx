import React from 'react';
import { useAuth } from '../context/AuthContext';
import supabase from '../supabaseConfig';

const Profile = () => {
    const { setIsSignIn } = useAuth();

    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut();

        if (error) {
            console.error('로그아웃 실패:', error.message);
            return;
        }

        console.log('로그아웃 성공');
        setIsSignIn(false);
    };

    return (
        <>
            <div className='profileImg'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
                </svg>
                <div className='profileHoverContainer'>
                    <div className='profileHover'>
                        <span>마이페이지</span>
                        <span onClick={handleLogout}>로그아웃</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
