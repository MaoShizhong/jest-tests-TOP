import { reverseString } from './reverse-string';

describe('Reverse a string', () => {
    const strings = [
        ['reverse me!', '!em esrever'],
        ['fooBar', 'raBoof'],
        ['Was it a car or a cat I saw?', '?was I tac a ro rac a ti saW'],
        ['madam racecar redder sOlos solos redder racecar madam', 'madam racecar redder solos solOs redder racecar madam'],
        ['0123456789', '9876543210'],
    ];

    test.each(strings)(
        'Reverses %j to %j',
        (fixture, result) => expect(reverseString(fixture)).toBe(result)
    );
});