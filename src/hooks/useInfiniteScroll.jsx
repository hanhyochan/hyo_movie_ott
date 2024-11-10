import { useEffect, useRef } from 'react';

const useInfiniteScroll = (onChangePage) => {
    const target = useRef(null);

    const callback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                onChangePage();
            }
        });
    };

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
    };

    useEffect(() => {
        const observer = new IntersectionObserver(callback, options);

        if (target.current) {
            observer.observe(target.current);
        }

        return () => {
            if (target.current) {
                observer.unobserve(target.current);
            }
        };
    }, []);

    return target;
};

export default useInfiniteScroll;
