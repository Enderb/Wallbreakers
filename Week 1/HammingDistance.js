/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    const xArr = (x >>> 0).toString(2).split('');
    const yArr = (y >>> 0).toString(2).split(''); 
    const xArrLength = xArr.length;
    const yArrLength = yArr.length;
    let counter = 0;
    
    if(xArrLength < yArrLength){
        const addZeroes = yArrLength - xArrLength;
        for(let i = 0; i < addZeroes; i++){
            xArr.unshift('0');
        }
    } else if(yArrLength < xArrLength) {
        const addZeroes = xArrLength - yArrLength;
        for(let i = 0; i < addZeroes; i++){
            yArr.unshift('0');
        }
    }
    
    for(let i = 0; i < xArr.length; i++){
        if(xArr[i] !== yArr[i]){
            counter++;
        }
    }
    
    return counter;
};