module.exports = function getZerosCount(number) {
   var sum = 0;
   var fives = 5;
   var zeros = 1;
   while (fives < number) {
       sum += Math.floor(number/fives);
       fives = fives*5;
   }
   return sum;
}
  
