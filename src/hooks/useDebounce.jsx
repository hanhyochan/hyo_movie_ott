import { useEffect, useState } from 'react';

const useDebounce = (value, delay) => {
    const [query, setQuery] = useState(value)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setQuery(value)
        }, delay);
        return () => clearTimeout(timeout)
    }, [value, delay])

    return query;
};

export default useDebounce;