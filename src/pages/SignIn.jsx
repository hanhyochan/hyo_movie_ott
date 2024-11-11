import React, { useState } from 'react';
import supabase from '../supabaseConfig';
import { useNavigate } from "react-router-dom"
import useVaild from '../hooks/useVaild';

const SignIn = () => {
    const navigate = useNavigate()
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: ''
    })
    const vaildText = useVaild(userInfo)
    const [successMessage] = useState('로그인이 완료되었습니다')

    const handleChange = (e) => {
        setUserInfo({
            ...userInfo,
            [e.target.id]: e.target.value
        })
    }

    const handleSubmit = async () => {
        const isValid = Object.values(userInfo).some((value) => value === "")
        const isValidText = Object.values(vaildText).every((value) => value === "");

        if (!isValid && isValidText) {
            login(userInfo)
        } else {
            alert(`정보를 다시 확인해주십시오.`)
            return;
        }
    };

    const login = async (userInfo) => {
        const email = userInfo.email
        const password = userInfo.password

        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            })

            if (data && data.user && data.user.email === email) {
                console.log(successMessage);
                navigate('/');
            } else {
                alert('이메일 또는 비밀번호가 일치하지 않습니다.');
                return;
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div className='authContainer'>
            <h3>Sign In</h3>
            <form className='authFormContainer'>
                <div className='inputContainer'>
                    <label htmlFor='email'>Email</label>
                    <input type="email" id='email' onChange={handleChange} placeholder='이메일을 입력하세요' />
                    {vaildText.email}
                </div>
                <div className='inputContainer'>
                    <label htmlFor='password'>Password</label>
                    <input type="password" id='password' onChange={handleChange} placeholder='비밀번호를 입력하세요' />
                    {vaildText.password}
                </div>
                <button className='signBtn' type='button' onClick={handleSubmit}>Sign in</button>
            </form>
        </div>
    );
};

export default SignIn;