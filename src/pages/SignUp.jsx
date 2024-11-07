import React from 'react';

const SignUp = () => {
    return (
        <div>
            <div className='authContainer'>
                <h3>Sign Up</h3>
                <form className='authFormContainer'>
                <div className='inputContainer'>
                        <label htmlFor='userName'>Name</label>
                        <input type="text" id='userName' placeholder='이름을 입력하세요' />
                    </div>
                    <div className='inputContainer'>
                        <label htmlFor='userEmail'>Email</label>
                        <input type="email" id='userEmail' placeholder='이메일을 입력하세요' />
                    </div>
                    <div className='inputContainer'>
                        <label htmlFor='userpwd'>Password</label>
                        <input type="password" id='userpwd' placeholder='비밀번호를 입력하세요' />
                    </div>
                    <div className='inputContainer'>
                        <label htmlFor='confirmUserpwd'>Password</label>
                        <input type="password" id='confirmUserpwd' placeholder='비밀번호를 다시 입력하세요' />
                    </div>
                    <button className='signBtn'>Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;