/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    
    const patternDict = {};
    const wordDict = {};
    const strArr = str.split(' ');
    if(strArr.length !== pattern.length){
        return false;
    }
    
    for(let i = 0; i < strArr.length; i++){
        wordDict[strArr[i]] = wordDict[strArr[i]] + 1 || 0;
        patternDict[pattern[i]] = patternDict[pattern[i]] + 1 || 0;
    }
    
    const wordDictString = Object.values(wordDict).toString();
    const patternDictString = Object.values(patternDict).toString();

    return wordDictString === patternDictString; 
};