const sumOfAllPositive = array => {
    let sumOfPositive = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] > 0 ) sumOfPositive += array[i];
    }
    return sumOfPositive;
}
console.log(sumOfAllPositive([2,-5,10,-3,7]));