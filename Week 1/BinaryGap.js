/**
 * @param {number} N
 * @return {number}
 */
var binaryGap = function(N) {
    const binaryArr = (N >>> 0).toString(2).split('');
    let counter = 0;
    let count = false;
    let longest = 0;
    for(let i = 0; i < binaryArr.length; i++){
        if(count){
            counter += 1;
        }
        
        if (count && binaryArr[i] === '1'){
            longest = longest < counter ? counter : longest;
            counter = 0;
        }
        
        if(binaryArr[i] === '1' && !count){
            count = true;
        }
    }
    
    return longest;
};