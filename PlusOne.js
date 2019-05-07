/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let remainder = 1;
  let position = digits.length - 1;
  while (remainder) {
    if (position < 0) {
      digits.unshift(0);
      position = 0;
    }
    const digit = digits[position];
    if (digit === 9) {
      digits[position] = 0;
      position -= 1;
    } else {
      digits[position] += 1;
      remainder = 0;
    }
  }
  return digits;
};
