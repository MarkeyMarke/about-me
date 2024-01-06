import PropTypes from 'prop-types';
import {
    getRandomColor,
    getRandomRadius,
    getRandomCoords,
} from './circleUtils';

const propTypes = {
    spawnDelay: PropTypes.number,
};

const defaultProps = {
    spawnDelay: 0,
};

function MovingCircle({ spawnDelay }) {
    return (
        <div
            className="wallpaper-circle"
            style={{
                backgroundColor: getRandomColor(),
                height: getRandomRadius(),
                animationDelay: `${spawnDelay}s`,
                ...getRandomCoords(),
            }}
        />
    );
}

MovingCircle.propTypes = propTypes;
MovingCircle.defaultProps = defaultProps;
export default MovingCircle;
