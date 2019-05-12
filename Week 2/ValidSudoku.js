/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const row = [{},{},{},{},{},{},{},{},{}]
    const col = [{},{},{},{},{},{},{},{},{}]
    const square = [{},{},{},{},{},{},{},{},{}]
    for(let i = 0; i < 9; i++){
        for(let j = 0; j < 9; j++){
            const currVal = board[i][j];
            if(currVal === '.'){
                continue;
            }
            
            if(currVal in row[i]){
                return false;
            } else {
                row[i][currVal] = 1;
            }
            
            if(currVal in col[j]){
                return false;
            } else {
                col[j][currVal] = 1;
            }
            
            const squareIndex = (Math.floor(i / 3) * 3) + Math.floor(j / 3);
            if(currVal in square[squareIndex]){
                return false;
            } else {
                square[squareIndex][currVal] = 1;
            }
        }
    }
    
    return true;
};
            