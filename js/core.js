var num_of_dice = localStorage.num_of_dice == undefined ? 1 : parseInt(localStorage.num_of_dice);
var max_size_of_dice = localStorage.max_size_of_dice == undefined ? 12 : parseInt(localStorage.max_size_of_dice);

function rollDice(size) {
    return Math.ceil(Math.random()*size);
}

function rollMultiDices(number, size) {
    if (number <= 0) {
        return false;
    }
  
    var result = [];
  
    while(number-- > 0) {
        result.push(rollDice(size));
    }
  
    return result;
}

