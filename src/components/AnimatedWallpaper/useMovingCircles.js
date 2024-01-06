import { useEffect } from 'react';
import {
    getRandomColor,
    getRandomRadius,
    getRandomCoords,
} from './circleUtils';

const changePosition = (event) => {
    const circle = event.target;

    const coords = getRandomCoords();
    Object.entries(coords).forEach(([key, value]) => {
        circle.style.setProperty(key, value);
    });
    circle.style.backgroundColor = getRandomColor();
    circle.style.height = getRandomRadius();

    // A trick learned from https://kirupa.com/animations/restarting_css_animations.htm
    circle.style.animationName = 'none';
    window.requestAnimationFrame(() => {
        setTimeout(() => {
            circle.style.animationName = '';
        }, 0);
    });
};

function useMovingCircles(containerRef) {
    useEffect(() => {
        containerRef.current.addEventListener(
            'animationend',
            changePosition,
            true,
        );
        return () => {
            containerRef.current.removeEventListener(
                'animationend',
                changePosition,
                true,
            );
        };
    });
}

export default useMovingCircles;
