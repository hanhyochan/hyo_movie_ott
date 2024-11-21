import { useEffect } from 'react';

const useTheme = (theme) => {

    useEffect(() => {
        if (theme) {
            console.log(1)
            document.body.style.background = 'white'
            document.body.style.color = 'black';
        } else if (!theme) {
            console.log(2)
            document.body.style.backgroundColor = 'black';
            document.body.style.color = 'white';
        }

        return () => {
            document.body.style.backgroundColor = ''
            document.body.style.color = '';
        }
    }, [theme])
};

export default useTheme;