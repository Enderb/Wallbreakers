/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
    const uniqueWords = new Set();
    const repeatedWords = new Set();
    A.split(' ').forEach(word => {
        if(uniqueWords.has(word)){
            uniqueWords.delete(word);
            repeatedWords.add(word);
        } else if(!repeatedWords.has(word)){
            uniqueWords.add(word);
        }
    })
    B.split(' ').forEach(word => {
        if(uniqueWords.has(word)){
            uniqueWords.delete(word);
            repeatedWords.add(word);
        } else if(!repeatedWords.has(word)){
            uniqueWords.add(word);
        }
    })
    
    return Array.from(uniqueWords);
};