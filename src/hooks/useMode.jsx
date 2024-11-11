import { useState, useEffect} from 'react';

const useMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (isDarkMode) {
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