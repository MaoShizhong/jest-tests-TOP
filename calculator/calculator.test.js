import { add } from './calculator.js';
import { subtract } from './calculator.js';
import { multiply } from './calculator.js';
import { divide } from './calculator.js';
describe('Mathematical operations on numbers (including floats)', () => {
    describe('Add two numbers', () => {
        const nums = [
            [1, 2, 3],
            [34, 76, 110],
            [23, -100, -77],
            [0.5, 0.5, 1],
            [1.1, 2.2, 3.3],
            [23.99999, 12.21354, 36.21353]
        ];

        test.each(nums)(
            '%d + %d returns %d',
            (a, b, result) => expect(add(a, b)).toBe(result)
        );
    });

    describe('Subtract two numbers', () => {
        const nums = [
            [2, 1, 1],
            [34, 76, -42],
            [-5, -7, 2],
            [0.5, 0.5, 0],
            [2.3, 1.1, 1.2],
            [23.001, 12.102, 10.899],
            [45.2342667, 24.1, 21.1342667],
        ];

        test.each(nums)(
            '%d - %d returns %d',
            (a, b, result) => expect(subtract(a, b)).toBe(result)
        );
    });
});
