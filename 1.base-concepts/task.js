"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2-4*a*c;
  if (d>0) {
    let d1=(-b + Math.sqrt(d))/(2*a);
    let d2=(-b - Math.sqrt(d))/(2*a);
    alert(d1);
    alert(d2); 
  
  } else if (d==0) {
    let d3=(-b/(2*a));
    alert(d3);
    
  } else
  return; {
    return arr;
  }
  
  
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