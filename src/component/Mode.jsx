import {useState, useEffect} from 'react';

const useMode = (onChangeMode) => {

    useEffect(() => {
        onChangeMode()
    }, [mode])

console.log(mode)

    return { setMode }
};

export default useMode;