import { useRef } from 'react';
import useMovingCircles from './useMovingCircles';
import MovingCircle from './MovingCircle';
import './styles/AnimatedWallpaper.scss';

function AnimatedWallpaper() {
    const containerRef = useRef();
    useMovingCircles(containerRef);
    return (
        <div className="wallpaper-container" ref={containerRef}>
            {[...Array(20).keys()].map((key) => (
                <MovingCircle spawnDelay={key} key={key} />
            ))}
        </div>
    );
}

export default AnimatedWallpaper;
