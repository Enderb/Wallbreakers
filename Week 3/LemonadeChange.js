/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let [fives, tens] = [0, 0];
    for(let i = 0; i < bills.length; i++){
        if(bills[i] === 5){
            fives += 1;
        }
        
        if(bills[i] === 10 && fives >= 1){
            fives -= 1;
            tens += 1;;
        } else if(bills[i] === 10 && fives < 1){
            return false
        }
        
        if(bills[i] === 20 && tens >= 1 && fives >= 1) {
            tens -= 1;
            fives -= 1;
        } else if(bills[i] === 20 && fives >= 3){
            fives -= 3;
        } else if(bills[i] === 20){
            return false;
        }
    }
    return true;
};