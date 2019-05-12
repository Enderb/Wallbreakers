/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
    const candiesSet = new Set(candies);
    return Math.min(candiesSet.size, candies.length / 2);
};