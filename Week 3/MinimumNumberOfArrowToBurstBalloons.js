/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    if(points.length < 1){
        return 0;
    }
    let hit = [];
    points.sort((a,b) => a[0] - b[0]);
    left = [...points];
    let arrows = 0;
    
    let index = points.reduce((minIndex, point) => {
        if(point[0] < minIndex){
            minIndex = point[0];
        }
        return minIndex;
    }, Number.MAX_SAFE_INTEGER);
    
    while(left.length > 0){
        for(let j = 0; j < hit.length; j++){
            if(hit[j][0] > index || hit[j][1] < index){
                arrows++;
                hit = [];
            }
        }
        
        let leftLength = left.length;
        for(let i = 0; i < leftLength; i++){
            if(left[i][0] <= index && left[i][1] >= index){
                hit.push(left.splice(i,1)[0]);
                i--;
                leftLength--;
            }
        }
        
        if(left.length < 1){
            break;
        }
        index = left[0][0];
    }
    
    if(hit.length > 0){
        arrows++;
    }
    
    return arrows;
};