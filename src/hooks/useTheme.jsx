import { useEffect } from 'react';
import { saveLocalStorage } from '../utils/saveLocalStorage';

const useTheme = (theme) => {

    useEffect(() => {
        if (theme) {
            saveLocalStorage('theme', theme)
            document.body.style.background = 'white'
            document.body.style.color = '#1f1c23';
        } else if (!theme) {
            saveLocalStorage('theme', theme)
            document.body.style.backgroundColor = '#1f1c23';
            document.body.style.color = 'white';
        }

        return () => {
            document.body.style.backgroundColor = ''
            document.body.style.color = '';
        }
    }, [theme])
};

export default useTheme;