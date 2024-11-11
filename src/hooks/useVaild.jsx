import React, { useState, useEffect } from 'react';

const useVaild = (userInfo) => {
    const [vaildText, setVaildText] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    useEffect(() => {
        if (userInfo.name && userInfo.name !== '' && userInfo.name.length <= 1) {
            setVaildText((prev) => ({ ...prev, name: '이름을 2글자 이상 입력해주세요.' }));
        } else {
            setVaildText((prev) => ({ ...prev, name: '' }));
        }
    }, [userInfo.name])

    useEffect(() => {
        if (userInfo.email !== '' && !userInfo.email.includes('@' && '.com')) {
            setVaildText((prev) => ({ ...prev, email: '이메일을 입력해주세요.' }));
        } else {
            setVaildText((prev) => ({ ...prev, email: '' }));
        }
    }, [userInfo.email])

    useEffect(() => {
        if (userInfo.password !== '' && userInfo.password.length < 6) {
            setVaildText((prev) => ({ ...prev, password: '비밀번호를 6글자 이상 입력해주세요.' }));
        } else {
            setVaildText((prev) => ({ ...prev, password: '' }));
        }
    }, [userInfo.password])

    useEffect(() => {
        if (userInfo.confirmPassword && userInfo.confirmPassword !== '' && userInfo.confirmPassword !== userInfo.password) {
            setVaildText((prev) => ({ ...prev, confirmPassword: '비밀번호가 맞지 않습니다.' }));
        } else {
            setVaildText((prev) => ({ ...prev, confirmPassword: '' }));
        }
    }, [userInfo.confirmPassword])


    return vaildText
};

export default useVaild;