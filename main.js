var priceOne = prompt('what is the price of your first item');
var quantOne = prompt('what quanity did you want of this item');
console.log(priceOne + ' ' + quantOne);
var itemOne =(priceOne * quantOne);
var priceTwo = prompt('what is the price of your second item');
var quantTwo = prompt('what quanity did you want of this item');
console.log(priceTwo + ' ' + quantTwo);
var itemTwo =( priceTwo * quantTwo);
var priceThree = prompt('what is the price of your third item');
var quantThree = prompt('what quanity did you want of this item');
console.log(priceThree + ' ' + quantThree);
var itemThree =(priceThree * quantThree);

var sub = itemOne + itemTwo + itemThree;
console.log('subtotal:',sub);
var tax = Math.round(0.055 * 100)/100;
console.log('tax:', tax);
var total =Math.round(sub * 1.055 *100)/100;
console.log('total:','\$' + total);