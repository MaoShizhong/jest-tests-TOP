import { caesar } from './caesar.js';

describe('Encode case-sensitive string via Caesar cipher using given key (ignores non-alphabet characters)', () => {
    const strings = [
        ['A', 'B', 1],
        ['the same', 'the same', 26],
        ['BaRFoo', 'FeVJss', 4],
        ['World, say hello!', 'Iadxp, emk tqxxa!', 12],
        ['barfoo', 'onesbb', 65],
        ['Tsjkndf34 23!jas!? Hello---?', 'Wvmnqgi34 23!mdv!? Khoor---?', 23455],
        ['Negative key', 'Mdfzshud jdx', -1],
        ['wrAPping NegATivE keY!!!', 'lgPEexcv CtvPIxkT ztN!!!', -37]
    ];

    test.each(strings)(
        'Encrypts %j as %j using a key of %d',
        (plaintext, ciphertext, key) => expect(caesar(plaintext, key)).toBe(ciphertext)
    );
});