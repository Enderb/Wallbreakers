/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    const binaryString = num.toString(2).split('');
    return parseInt(binaryString.map(binaryChar => {
        return binaryChar === '0' ? '1' : '0';
    }).join(''), 2);
};