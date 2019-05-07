/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const existingNums = {};
    nums.forEach(num => {
        if(!(num in existingNums)){
            existingNums[num] = 1;
        } else {
            existingNums[num] -= 1;
        }
    })
    
    for(let key in existingNums){
        if(existingNums[key] === 1){
            return key;
        }    
    }
};