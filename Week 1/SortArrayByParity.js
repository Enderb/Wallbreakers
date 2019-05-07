/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
  const even = [];
  const odd = [];

  A.forEach(val => {
    if (val % 2 === 0) {
      even.push(val);
    } else {
      odd.push(val);
    }
  });

  return even.concat(odd);
};
