/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
  if (A.length < 1) {
    return;
  }

  const rows = A.length;
  const columns = A[0].length;
  const transpose = [];

  for (let j = 0; j < columns; j++) {
    transpose.push([]);
    for (let i = 0; i < rows; i++) {
      transpose[j].push(A[i][j]);
    }
  }

  return transpose;
};
