function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] > max){
      max = arr[i];
    } 
    if (arr[i] < min) {
      min = arr[i];
    } 
      sum += arr[i];         
  }

  const avg = +(sum/arr.length).toFixed(2);   
  return { min: min, max: max, avg: avg };
}

function testCase() {
  const result = getArrayParams(-99, 99, 10);
  if (result.min === -99 && result.max === 99 && result.avg === 3.33 ){
    console.log("правильно");
  } else {
    console.log("не правильно");
  }
}
testCase();

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }      
  const sum = arr.reduce((a, b) => a + b, 0);   
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }   
    const max = Math.max(...arr);
    const min = Math.min(...arr);  
    return max-min;  
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  } 
  let sumEvenElement = 0;
  let sumOddElement = 0;
    for(let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sumEvenElement += arr[i];
      }
      if (arr[i] % 2 !== 0) {
        sumOddElement += arr[i];
      }
    }
    return sumEvenElement-sumOddElement;   
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  } 
    let sumEvenElement = 0;
    let countEvenElement = 0;  
    for(let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sumEvenElement += arr[i];      
        countEvenElement += 1;
      }   
    } 
    return sumEvenElement / countEvenElement; 
}

function makeWork (arrOfArr, func) {  
  let maxWorkerResult  = -Infinity;
  for(let i = 0; i < arrOfArr.length; i++) {
    const variable = func (...arrOfArr[i]);
      if(variable > maxWorkerResult) {
      maxWorkerResult = variable;
    }
  }
  return maxWorkerResult; 
}

