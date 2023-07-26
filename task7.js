const romanToInt = (roman) => {
    const romanNumerals = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let result = 0;

    for (let i = 0; i < roman.length; i++) {
        const currentNum = romanNumerals[roman[i]];
        const nextNum = romanNumerals[roman[i + 1]];

        if (nextNum > currentNum) {
            result += nextNum - currentNum;
            i++;
        } else {
            result += currentNum;
        }
    }

    return result;
};

console.log(romanToInt("IX")); 
console.log(romanToInt("XXI")); 
