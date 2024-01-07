import { useRef } from 'react';
import useMovingCircles from './useMovingCircles';
import MovingCircle from './MovingCircle';
import './__styles__/AnimatedWallpaper.scss';

function AnimatedWallpaper() {
    const containerRef = useRef();
    useMovingCircles(containerRef);
    return (
        <div className="wallpaper" ref={containerRef}>
            {[...Array(20).keys()].map((key) => (
                <MovingCircle spawnDelay={key} key={key} />
            ))}
        </div>
    );
}

export default AnimatedWallpaper;
