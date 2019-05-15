/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    for(let i = 0; i < t.length; i++){
        if(!s){
            return true;
        }
        if(t[i] === s[0]){
            s = s.slice(1);
        }
    }
    
    return s ? false : true;
};