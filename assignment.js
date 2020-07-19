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