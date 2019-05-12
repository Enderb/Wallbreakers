/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    const JDictionary = {};
    J.split('').forEach(jewel => {
        JDictionary[jewel] = 0;
    })
    
    return S.split('').reduce((count, stone) => {
        if(stone in JDictionary){
            count += 1;
        }
        return count;
    }, 0)
};