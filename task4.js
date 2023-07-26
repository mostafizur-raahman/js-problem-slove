const sumOfTwoValue = (array, target) => {
    let x, y;
    for (let i = 0; i < array.length; i++) {
        let j = array[i];
        for (let k = i + 1; k < array.length; k++) {
            if (j + array[k] == target) {
                x = i;
                y = k;
                break;
            }
        }
    }
    return [x, y];
}
console.log(sumOfTwoValue([1, 3, 6, 8, 11, 15], 9));