import { useState, useEffect} from 'react';
import { saveLocalStorage } from '../utils/saveLocalStorage';
import { getLocalStorage } from '../utils/getLocalStorage';

const useMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const saveMode = getLocalStorage('nowMode')
        return saveMode !== null ? saveMode : false
    });

    useEffect(() => {
        if (isDarkMode) {
            saveLocalStorage('nowMode', isDarkMode)
            document.body.style.backgroundColor = 'black';
            document.body.style.color = 'white';
        } else {
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
        }
    }, [isDarkMode]);

    return [isDarkMode, setIsDarkMode]
};

export default useMode;