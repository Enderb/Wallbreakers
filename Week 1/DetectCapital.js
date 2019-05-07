/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    const wordArr = word.split('');
    
    const allCaps = word.toUpperCase() === word;
    const allLower = word.toLowerCase() === word;
    let onlyFirst = true;
    wordArr.forEach((letter, i) => {
        if(i !== 0){
            if(letter.toUpperCase() === letter){
                onlyFirst = false;
            }
        }
    })
    
    return allCaps || allLower || onlyFirst;
    
};