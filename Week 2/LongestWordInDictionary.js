/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
    words.sort();
    const wordsSet = new Set(words)
    let result = '';
    words.forEach(word => {
        let valid = true
        let key = ''
        for (let i = 0; i < word.length - 1; i++) {
            key += word[i]
            if (!wordsSet.has(key)) {
                valid = false
                break;
            }
        }
        if (valid && word.length > result.length) {
            result = word
        }
    })
    return result;
};