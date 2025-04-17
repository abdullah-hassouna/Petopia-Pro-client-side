import { useEffect, useRef, useState } from 'react';

export const srcollTrigger = <T extends Element>(options?: IntersectionObserverInit) => {
    const ref = useRef<T | null>(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(([entry]) => {
            setIsInView(entry.isIntersecting);
        }, options);

        observer.observe(ref.current);

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [ref.current]);

    return { ref, isInView };
};