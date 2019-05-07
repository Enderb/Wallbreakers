/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const alphaNumeric = /[A-Za-z0-9]+/g;
    const onlyAlphanumeric = s.match(alphaNumeric);
    if(!onlyAlphanumeric){
        return true;
    }
    const stringCompare = s.match(alphaNumeric).join('').toLocaleLowerCase()
    const reversed = s.match(alphaNumeric).join('').toLocaleLowerCase().split('').reverse().join('');
    return stringCompare === reversed;
};