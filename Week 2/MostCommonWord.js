/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    const words = paragraph.toLowerCase().split(/\W+/);
   
    const wordsDict = words.reduce((wordsDict, word) => {
        if(!banned.includes(word) && word){
            wordsDict[word] = wordsDict[word] + 1 || 1;
        }
        return wordsDict;
    }, {})
    
    const sortedWords = Object.keys(wordsDict).sort((a,b) => wordsDict[b] - wordsDict[a])
    return sortedWords[0];
};