"use strict"
function solveEquation(a, b, c) {
  const arr = [];
  let discriminantFirst;
  let discriminantSecond;
  const d = Math.pow(b,2) - 4 * a * c;

  if (d>0) {
    discriminantFirst = (-b + Math.sqrt(d))/(2*a);
    discriminantSecond = (-b - Math.sqrt(d))/(2*a);
    arr.push(discriminantFirst);
    arr.push(discriminantSecond); 
    console.log("Первый корень: " + arr[0] + "Второй корень: " + arr[1]);

  } else if (d===0) {
    discriminantFirst = (-b/(2*a));
    arr.push(discriminantFirst);
    console.log(arr);

  } else
    console.log("Корней нет.") 
   
  return arr;  
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let totalAmount; 
  let bodyCredit;
  let contributionMonth;

 if (
    isNaN(percent) ||
    isNaN(contribution) ||
    isNaN(amount) ||
    isNaN(countMonths)
    ) {
       console.log('Один из параметров содержит неверное значение');
       return false;
    } else

  percent = percent / 100 / 12; 
  bodyCredit = amount - contribution;  
  contributionMonth = bodyCredit * (percent + (percent / ((Math.pow((1 + percent), countMonths)) - 1)));
  totalAmount = +((contributionMonth * countMonths).toFixed(2));

  return totalAmount;
}