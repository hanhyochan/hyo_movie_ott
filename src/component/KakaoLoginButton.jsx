import React from 'react';
import supabase from '../supabaseConfig';
import { useAuth } from '../context/AuthContext';

const KakaoLoginButton = () => {
  const { setIsSignIn } = useAuth();

  const handleClick = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'kakao',
    });
  
    if (error) {
      console.error('Kakao login error:', error.message);
      return;
    }
  
    console.log('Kakao login data:', data);
    setIsSignIn(true)
  }
  

  return (
    <button type='button' onClick={handleClick}>
      카카오로 로그인
    </button>
  );
}

export default KakaoLoginButton;
