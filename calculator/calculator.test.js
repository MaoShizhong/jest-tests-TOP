import { add } from './calculator.js';
import { subtract } from './calculator.js';
import { multiply } from './calculator.js';
import { divide } from './calculator.js';

describe('Calculator adds two nums correctly', () => {
    const nums = [
        [1, 2, 3],
        [34, 76, 110],
        [23, -100, -77],
        [0.5, 0.5, 1],
        [1.1, 2.2, 3.3],
        [23.99999, 12.21354, 36.21352]
    ];

    test.each(nums)(
        '%d + %d returns %d',
        (a, b, result) => expect(add(a, b)).toBe(result)
    );
});