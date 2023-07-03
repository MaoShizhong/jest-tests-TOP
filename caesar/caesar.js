export const encryptCaesar = (str, key) => {
    const trueKey = key < 0 ? (key % 26) + 26 : key % 26;

    let encryptedStr = '';

    for (const char of str) {
        const caseOffset = /[A-Z]/.test(char) ? 65 : 97;
        encryptedStr += /[A-Za-z]/.test(char)
            ? String.fromCharCode((char.charCodeAt(0) - caseOffset + trueKey) % 26 + caseOffset)
            : char;
    }
    return encryptedStr;
};