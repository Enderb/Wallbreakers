/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
    let left = 0;
    let right = s.length - 1;
    const sArr = s.split('');
    
    while(left < right){
         if(vowels.includes(sArr[left]) && vowels.includes(sArr[right])){
            let temp = sArr[left];
            sArr[left] = sArr[right];
            sArr[right] = temp;
            
            left++;
            right--;
        } else {
            if(!vowels.includes(sArr[left])){
                left++;
            }
            if(!vowels.includes(sArr[right])){
                right--;
            }
        }
    }
    
    return sArr.join('');
}