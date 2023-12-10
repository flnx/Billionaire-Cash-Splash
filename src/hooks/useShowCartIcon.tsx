import { useEffect, useState } from 'react';

type UseShowCartIconType = {
    showCartIcon: boolean;
}

export const useShowCartIcon = (threshold: number): UseShowCartIconType => {
    const [showCartIcon, setShowCartIcon] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPositioon = window.scrollY;

            // React wouldn't update the state if the same value is passed again
            // So no need for if/else check
            setShowCartIcon(scrollPositioon > threshold);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [threshold]);

    return { showCartIcon };
};
