/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
  if (A.length < 1) {
    return;
  }
  for (let i = 0; i < A.length; i++) {
    A[i].reverse();
    for (let j = 0; j < A[0].length; j++) {
      A[i][j] = A[i][j] ? 0 : 1;
    }
  }

  return A;
};
