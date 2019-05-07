/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  const sArr = s.split('');
  const tArr = t.split('');
  let result = true;

  sArr.forEach(val => {
    if (tArr.includes(val)) {
      tArr.splice(tArr.indexOf(val), 1);
    } else {
      result = false;
      return;
    }
  });

  if (tArr.length > 0) {
    result = false;
  }

  return result;
};
