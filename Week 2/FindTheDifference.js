/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    const sArr = s.split('');
    return t.split('').filter(char => {
        if(sArr.includes(char)){
            sArr.splice(sArr.indexOf(char), 1);
            return false;
        } else {
            return true;
        }
    })[0];
};