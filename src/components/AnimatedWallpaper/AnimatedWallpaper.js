import { useRef } from 'react';
import useMovingCircles from './useMovingCircles';
import MovingCircle from './MovingCircle';
import './styles/AnimatedWallpaper.scss';

function AnimatedWallpaper() {
    const containerRef = useRef();
    useMovingCircles(containerRef);
    return (
        <div className="wallpaper-container" ref={containerRef}>
            <MovingCircle spawnDelay={0} />
            <MovingCircle spawnDelay={1} />
            <MovingCircle spawnDelay={2} />
            <MovingCircle spawnDelay={3} />
            <MovingCircle spawnDelay={4} />
            <MovingCircle spawnDelay={5} />
            <MovingCircle spawnDelay={6} />
            <MovingCircle spawnDelay={7} />
            <MovingCircle spawnDelay={8} />
            <MovingCircle spawnDelay={9} />
        </div>
    );
}

export default AnimatedWallpaper;
