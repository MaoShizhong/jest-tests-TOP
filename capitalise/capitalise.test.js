import { capitalise } from './capitalise.js';

describe('Capitalise first character of a string', () => {
    const strings = [
        ['hello, world', 'Hello, world'],
        ['example', 'Example'],
        ['5thIs StrINg shOuLd BE uncHanGed!!!', '5thIs StrINg shOuLd BE uncHanGed!!!'],
        ['fOObAR', 'FOObAR'],
    ];

    test.each(strings)(
        'Capitalises %j as %j',
        (fixture, result) => expect(capitalise(fixture)).toBe(result)
    );
});