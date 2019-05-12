/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const morseAlphabet = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]; 
    const morseDictionary = {};
    let result = 0;
    words.forEach(word => {
        let morseString = "";
        word.split('').forEach(char => {
            morseString += morseAlphabet[char.charCodeAt(0) - 97];
        })
        if(!(morseString in morseDictionary)){
            result++;
            morseDictionary[morseString] = 0;
        }
    })
    
    return result;
};