const toCaesar = (char, shift) => {
    const shiftedCharCode = char.charCodeAt(0) + shift;
    let newCode;
    if (/[a-z]/.test(char)) {
        newCode = shiftedCharCode > 122 ? shiftedCharCode - 26 : shiftedCharCode;
    }
    else {
        newCode = shiftedCharCode > 90 ? shiftedCharCode - 26 : shiftedCharCode;
    }

    return String.fromCharCode(newCode);
};

export const caesar = (str, key) => {
    const shiftAmount = key > 0 ? key % 26 : (key % 26) + 26;
    let encryptedStr = '';
    for (const char of str) {
        encryptedStr += /[a-zA-Z]/.test(char) ? toCaesar(char, shiftAmount) : char;
    }
    return encryptedStr;
};