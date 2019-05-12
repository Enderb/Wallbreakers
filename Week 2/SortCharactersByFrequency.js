/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const frequencyDict = {};
    
    s.split('').forEach(char => {
        if(char in frequencyDict){
            frequencyDict[char]++;
        } else {
            frequencyDict[char] = 1;
        }
    })
    
    const sortedChars =  Object.keys(frequencyDict).sort((a,b)=>frequencyDict[b]-frequencyDict[a]);
    return sortedChars.map(char => char.repeat(frequencyDict[char])).join('');
};