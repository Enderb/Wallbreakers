/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let uniqueIndex = -1; 
    for(let i = 0; i < s.length; i++){
        const currChar = s[i];
        const splicedString = s.slice(0, i) + s.slice(i + 1);
        const nextChar = splicedString.indexOf(currChar);
        if(nextChar === -1){
            uniqueIndex = i;
            break;
        }
    }
    
    return uniqueIndex;
};