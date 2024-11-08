import React, { useEffect, useState } from 'react';

const useDebounce = (value, delay) => {
    const [debounceValue, setDebounceValue] = useState(value)

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setDebounceValue(value)
        }, delay);

        return () => clearTimeout(timeOut)
    }, [value, delay])

    return debounceValue
};

export default useDebounce;