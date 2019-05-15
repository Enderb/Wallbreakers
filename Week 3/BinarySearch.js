/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target, base = 0) {
    if(nums.length === 1 && nums[0] !== target){
        return -1;
    } else {
        return nums.indexOf(target) + base;
    }
    
    const midPoint = Math.floor(nums.length / 2);
    if(nums[midPoint] === target){
        return target;
    } else if (nums[midPoint] > target){
        return search(nums.slice(midPoint + 1, nums.length), target, midPoint)
    } else {
        return search(nums.slice(0, midPoint), target)
    }
};