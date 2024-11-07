import React from 'react';

const SignIn = () => {
    return (
        <div className='authContainer'>
            <h3>Sign In</h3>
            <form className='authFormContainer'>
                <div className='inputContainer'>
                <label htmlFor='userEmail'>Email</label>
                <input type="email" id='userEmail' placeholder='이메일을 입력하세요'/>
                </div>
                <div className='inputContainer'>
                <label htmlFor='userpwd'>Password</label>
                <input type="password" id='userpwd' placeholder='비밀번호를 입력하세요'/>
                </div>
                <button className='signBtn'>Sign in</button>
            </form>
        </div>
    );
};

export default SignIn;