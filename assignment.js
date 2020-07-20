//feetToMile
function feetToMile(feet){
    var mile = feet / 5280;
    return mile;
}
var result = feetToMile(12);
console.log("Mile = ", result);


//woodCalculator
function woodCalculator(chair, table, bed){
    var wood = (chair * 1 + table * 3 + bed * 5);
    return wood;
}
var result = woodCalculator(6, 2, 3);
console.log("Total wood = ", result);

//brickCalculator
function brickCalculator(floor){
    var brick = 0;
    if(floor <= 10){
        brick = floor * 15 * 1000;
    }
    else if (floor <= 20) {
        var firstpart = 10 * 15 * 1000;
        var remain = floor - 10;
        var secondpart = remain * 12 * 1000;
        brick = firstpart + secondpart;
    }
    else{
        var firstpart = 10 * 15 * 1000;
        var secondpart = 10 * 12 * 1000;
        var remain = floor - 20;
        var thirdpart = remain * 10 * 1000;
        brick = firstpart + secondpart + thirdpart;
    }
    return brick;
}
var result = brickCalculator(12);
console.log("Total brick = ", result);




//tinyFriend
function tinyFriend(name){
   var min = name[0];
   for(var i = 0; i < name.length; i++){
       if(name[i] < min){
           min = name[i];
       }
   }
   return min;
}
var array = ["atika","roshni","arif","mahbuba","sanjanaa"];
var result = tinyFriend(array);
console.log(result);