/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const alreadySeen = {};
    let next = n;
    let isHappy = true;
    while(next !== 1){
        if(next in alreadySeen){
            isHappy = false;
            break;
        }
        alreadySeen[next] = 0;
        
        const digits = next.toString().split('');
        next = digits.map(Number).reduce((counter, digit) => {
            counter += digit*digit;
            return counter;
        }, 0)
    }
    
    return isHappy;
};