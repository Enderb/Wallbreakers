/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const solution = [];
    for(let i = 0; i < nums.length; i++){
        const searchVal = target-nums[i]
        for(let j = 0; j < nums.length; j++){
            if(i !== j){
               if(searchVal === nums[j]){
                   solution.push(i);
                   solution.push(j);
                   break;
               } 
            }
        }
        if(solution.length !== 0){
            break;
        }
    }
    
    return solution;
};