/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    const numsDict = {};
    const expectedSum = (nums.length + 1) * nums.length / 2;
    let dup;
    let sum = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] in numsDict){
            dup = nums[i];
        } else {
            numsDict[nums[i]] = 1;
        }
        sum += nums[i];
    }
    
    return [dup, expectedSum + dup - sum];
};