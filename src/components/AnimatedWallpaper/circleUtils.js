import getRandomNumber from '../../services/getRandomNumber';

const CIRCLE_HEX_COLORS = [
    '#c6e3fd',
    '#a6cbec',
    '#cfdce7',
    '#7e95a9',
    '#95ceff',
    '#cce7ff',
];

export const getRandomColor = () => {
    return CIRCLE_HEX_COLORS[getRandomNumber(0, CIRCLE_HEX_COLORS.length - 1)];
};

export const getRandomRadius = () => {
    return `${getRandomNumber(10, 35)}vh`;
};

export const getRandomCoords = () => {
    return {
        '--startX': `${getRandomNumber()}vw`,
        '--startY': `${getRandomNumber()}vh`,
        '--endX': `${getRandomNumber()}vw`,
        '--endY': `${getRandomNumber()}vh`,
    };
};
