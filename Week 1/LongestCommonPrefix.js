/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length < 1){
        return "";
    }
    let minLength = strs[0].length;
    let answer = "";
    strs.forEach(str => {
        if(str.length < minLength){
            minLength = str.length;
        }
    })
    
    let pass = true;
    for(let i = 0; i < minLength; i++){
        let check = strs[0][i];
        for(let j = 1; j < strs.length; j++){
            if(strs[j][i] !== check){
                pass = false;
            }
        }
        
        if(pass){
            answer += check;
        } else {
            break;
        }
    }
    
    return answer;
};