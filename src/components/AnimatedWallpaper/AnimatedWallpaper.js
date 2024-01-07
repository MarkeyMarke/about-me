import { useRef } from 'react';
import useMovingCircles from './useMovingCircles';
import MovingCircle from './MovingCircle';
import './styles/AnimatedWallpaper.scss';

function AnimatedWallpaper() {
    const containerRef = useRef();
    useMovingCircles(containerRef);
    return (
        <div className="wallpaper-container" ref={containerRef}>
            <div className="wallpaper">
                {[...Array(20).keys()].map((key) => (
                    <MovingCircle spawnDelay={key} key={key} />
                ))}
            </div>
        </div>
    );
}

export default AnimatedWallpaper;
