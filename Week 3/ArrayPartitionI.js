/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    const sortedNums = nums.sort((a,b) => a - b);
    let sum = 0;
    for(let i = 0; i < nums.length - 1; i += 2){
        sum += Math.min(sortedNums[i], sortedNums[i+1]);
    }
    return sum;
};