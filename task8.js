const secondSmallest = (array) => {
    array.sort();
    return array[1];
}
console.log(secondSmallest([1,2,3,4,5]));