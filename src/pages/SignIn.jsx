import React, { useState } from 'react';
import supabase from '../supabaseConfig';
import { useNavigate } from "react-router-dom"

const SignIn = () => {
    const navigate = useNavigate()
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: ''
    })
    const [successMessage, setSuccessMessage] = useState('로그인이 완료되었습니다')

    const handleChange = (e) => {
        setUserInfo({
            ...userInfo,
            [e.target.id]: e.target.value
        })
    }

    const handleSumbit = () => {
        login(userInfo)
    }

    const login = async (userInfo) => {
        const email = userInfo.email
        const password = userInfo.password

        if (email === '' && password === '') {
            return alert('정보를 입력해주십시오')
        }

        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            })

            if (error) {
                console.log(error.message);
                return;
            }

            console.log(successMessage)
            navigate('/')
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
                </div>
                <div className='inputContainer'>
                    <label htmlFor='password'>Password</label>
                    <input type="password" id='password' onChange={handleChange} placeholder='비밀번호를 입력하세요' />
                </div>
                <button className='signBtn' type='button' onClick={handleSumbit}>Sign in</button>
            </form>
        </div>
    );
};

export default SignIn;