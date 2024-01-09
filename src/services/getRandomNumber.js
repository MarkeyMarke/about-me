const getRandomNumber = (low = 0, high = 100) => {
    const r = Math.floor(Math.random() * (high - low + 1)) + low;
    return r;
};

export default getRandomNumber;
