/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  if (n <= 0) {
    return false;
  }

  const minusOne = (n-1);
  const andWithMinusOne = n & minusOne
  return n && !andWithMinusOne;
};
