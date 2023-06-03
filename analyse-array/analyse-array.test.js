import { analyseArray } from './analyse-array.js';

describe('Return an object summarising the average (rounded up to 2 d.p.), min, max values, and length of an array of numbers', () => {
    const nums = [
        [[1, 8, 3, 4, 2, 6], { average: 4, min: 1, max: 8, length: 6 }],
        [[1, -8, 3, 4, 2, 6], { average: 1.33, min: -8, max: 6, length: 6 }],
        [[1, 2.2, 3, 1.1, -2], { average: 1.06, min: -2, max: 3, length: 5 }],
        [[-7, -3, 5, 9, 8, 12.4444, -7.29, 20.01], { average: 4.65, min: -7.29, max: 20.01, length: 8 }],
    ];

    test.each(nums)(
        'Anaylses: %j\nReturns: %o',
        (arr, obj) => expect(analyseArray(arr)).toMatchObject(obj)
    );
});