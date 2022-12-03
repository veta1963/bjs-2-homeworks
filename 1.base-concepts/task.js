"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d1;
  let d2;
  let d = Math.pow(b,2) - 4 * a * c;

  if (d>0) {
    d1 = (-b + Math.sqrt(d))/(2*a);
    d2 = (-b - Math.sqrt(d))/(2*a);
    arr.push(d1);
    arr.push(d2); 
    console.log("Первый корень: " + arr[0] + "Второй корень: " + arr[1]);

  } else if (d===0) {
    d1 = (-b/(2*a));
    arr.push(d1);
    console.log(arr);

  } else
    console.log("Корней нет.") 
   
  return arr;  
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let P = percent/12;
  let S = contribution;
  let amount;
  let n = countMonths;
  isNaN("percent");
  isNaN("contribution");
  isNaN("amount");
  isNaN("countMonths");
  function amount(){
    let amountMonth = S * (P + (P / (((1 + P)**n) - 1)));
    amount = amountMonth*n;
  } 
  amount();
}