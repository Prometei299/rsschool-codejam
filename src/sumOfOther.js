module.exports = function sumOfOther(array){
 
    let result = [];
    let sum = 0;
 
    for(let i = 0; i < array.length; i++){
        sum += array[i];
    }
    for(let j = 0; j < array.length; j++){
       let k = sum - array[j];
        result.push(k);
    }
    return result;
}
