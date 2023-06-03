const getAverage = (arr) => {
    const avg = arr.reduce((a, c) => a + c) / arr.length;
    return Math.round(avg * 100) / 100;
};

export const analyseArray = (arr) => {
    return {
        average: getAverage(arr),
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length,
    };
};