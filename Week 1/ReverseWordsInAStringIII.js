/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const wordsArr = s.split(' ');
    for(let i = 0; i < wordsArr.length; i++){
        wordsArr[i] = wordsArr[i].split('').reverse().join('');
    }
    
    return wordsArr.join(' ');
};