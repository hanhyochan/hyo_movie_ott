import React, { useState } from 'react';
import supabase from '../supabaseConfig';
import { useNavigate } from "react-router-dom"
import useVaild from '../hooks/useVaild';
// import { useAuth } from '../context/AuthContext';

const SignUp = () => {
    const navigate = useNavigate()
    // const { session } = useAuth();
    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    })
    const vaildText = useVaild(userInfo)
    const [successMessage] = useState('회원가입이 완료되었습니다')

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
            await signUpFuc(userInfo);
            // setIsSignIn(true)
            navigate('/');
        } else {
            alert(`정보를 다시 확인해주십시오.`)
            return;
        }
    };

    const signUpFuc = async (userInfo) => {
        const name = userInfo.name
        const email = userInfo.email
        const password = userInfo.password
        const confirmPassword = userInfo.confirmPassword

        if (password !== confirmPassword) {
            setErrorMessage('비밀번호가 일치하지 않습니다.');
            return;
        }

        try {
            const { data, error } = await supabase.auth.signUp({
                email,
                password
            });

            if (error) {
                console.log(error.message);
                return;
            }

            const user = data.user;

            if (user) {
                const { error: updateError } = await supabase.auth.updateUser({
                    data: {
                        name: name
                    }
                });

                if (updateError) {
                    setErrorMessage(updateError.message);
                    console.log(updateError.message);
                    return;
                }
            }

            console.log(successMessage)

        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div>
            <div className='authContainer'>
                <h3>Sign Up</h3>
                <form className='authFormContainer'>
                    <div className='inputContainer'>
                        <label htmlFor='userName'>Name</label>
                        <input type="text" id='name' onChange={handleChange} placeholder='이름을 입력하세요' />
                        {vaildText.name}
                    </div>
                    <div className='inputContainer'>
                        <label htmlFor='userEmail'>Email</label>
                        <input type="email" id='email' onChange={handleChange} placeholder='이메일을 입력하세요' />
                        {vaildText.email}
                    </div>
                    <div className='inputContainer'>
                        <label htmlFor='userpwd'>Password</label>
                        <input type="password" id='password' onChange={handleChange} placeholder='비밀번호를 입력하세요' />
                        {vaildText.password}
                    </div>
                    <div className='inputContainer'>
                        <label htmlFor='confirmUserpwd'>Password</label>
                        <input type="password" id='confirmPassword' onChange={handleChange} placeholder='비밀번호를 다시 입력하세요' />
                        {vaildText.confirmPassword}
                    </div>
                    <button className='signBtn' type='button' onClick={handleSubmit}>Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;