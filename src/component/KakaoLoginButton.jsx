import React from 'react';
import { signInWithKakao } from '../auth/signInWithKakao';

function KakaoLoginButton() {
  return (
    <button type='button' onClick={signInWithKakao}>
      카카오로 로그인
    </button>
  );
}

export default KakaoLoginButton;
