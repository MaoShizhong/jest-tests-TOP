const countDecimalPlaces = (n) => {
    return n % 1 === 0 ? 0 : n.toString().split('.')[1].length;
};

const getCorrectionFactor = (a, b) => {
    return 10 ** Math.max(countDecimalPlaces(a), countDecimalPlaces(b));
};

export const add = (a, b) => {
    const correction = getCorrectionFactor(a, b);
    return (a * correction + b * correction) / correction;
};

export const subtract = (a, b) => {
    const correction = getCorrectionFactor(a, b);
    return (a * correction - b * correction) / correction;
};

export const multiply = (a, b) => {
    const correction = getCorrectionFactor(a, b);
    return Math.round((a * correction) * (b * correction)) / (correction ** 2);
};

export const divide = (a, b) => {
    return Math.round(a / b * 100000) / 100000;
};