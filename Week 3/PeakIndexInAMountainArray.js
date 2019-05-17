/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
    let start = 0;
    let end = A.length;
    let midPoint = Math.floor((end - start) / 2)
    while(start < end){
        if(A[midPoint] > A[midPoint - 1] && A[midPoint] > A[midPoint + 1]) {
            return midPoint;
        } else if(A[midPoint] > A[midPoint - 1]){
            start = midPoint;
            midPoint += Math.floor((end - start) / 2)
        } else if(A[midPoint] < A[midPoint - 1]){
            end = midPoint;
            midPoint = Math.floor((end - start) / 2)
        }
    }
};