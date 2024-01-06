const CIRCLE_HEX_COLORS = [
    '#c6e3fd',
    '#a6cbec',
    '#cfdce7',
    '#7e95a9',
    '#95ceff',
    '#cce7ff',
];

const getRandomNumber = (low = 0, high = 100) => {
    const r = Math.floor(Math.random() * (high - low + 1)) + low;
    return r;
};

export const getRandomColor = () => {
    return CIRCLE_HEX_COLORS[getRandomNumber(0, 5)];
};

export const getRandomRadius = () => {
    return `${getRandomNumber(10, 50)}vh`;
};

export const getRandomCoords = () => {
    return {
        '--startX': `${getRandomNumber()}vw`,
        '--startY': `${getRandomNumber()}vh`,
        '--endX': `${getRandomNumber()}vw`,
        '--endY': `${getRandomNumber()}vh`,
    };
};
