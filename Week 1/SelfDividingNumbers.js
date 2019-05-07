/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    const selfDividingNums = [];
    for(let i = left; i <= right; i++){
        if(selfDivides(i)){
            selfDividingNums.push(i);
        }
    }
    
    return selfDividingNums;
};

var selfDivides = function(num) {
    let solution = true;
    let a = Math.floor(num / 10);
    let b = num % 10;
    while(a !== 0){
        if(b === 0){
            solution = false;
            break;
        }
        
        if(num % b !== 0){
            solution = false;
            break;
        } else {
            b = a % 10;
            a = Math.floor(a / 10);
        }
    }
    
    if(num % b !== 0){
        solution = false;
    }
    
    return solution;
}