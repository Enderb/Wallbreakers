/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    const tArr = t.split('');
    for(let i = 0; i < tArr.length; i++){
        if(!s){
            return true;
        }
        if(tArr[i] === s[0]){
            s = s.slice(1);
        }
    }
    
    return s ? false : true;
};