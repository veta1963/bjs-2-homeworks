function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let avg;

  for(let i = 0; i < arr.length; i++) {
    if (arr[i] > max){
      max = arr[i];
    }  
    if (arr[i] < min) {
      min = arr[i];
    } 
      sum += arr[i]; 
      
      avg = +(sum/arr.length).toFixed(2);    
  }
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
  if (arr.length > 0) {
  const add = arr.reduce((a, b) => a + b, 0);   
  return(add);
  }
}

function differenceMaxMinWorker(...arr) {
  if (arr.length > 0) {  
  let max = Math.max(null, ...arr);
  let min = Math.min(null, ...arr);  
  return(max-min);
  }
  console.log(summElementsWorker()); // 0
  console.log(summElementsWorker(10, 10, 11, 20, 10)); // 61
}

function differenceEvenOddWorker(...arr) {
  if (arr.length > 0) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
    for(let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sumEvenElement += arr[i];
      }else if (arr[i] % 1 === 0) {
        sumOddElement += arr[i];
      }
    }
    return(sumEvenElement-sumOddElement);
  }
  console.log(differenceMaxMinWorker()); // 0
  console.log(differenceMaxMinWorker(10, 10, 11, 20, 10)); // 20 - 10 => 10
}

function averageEvenElementsWorker(...arr) {
  if (arr.length > 0) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    }else if (arr[i] % 2 === 0) 
      countEvenElement += arr.length;
    }
    return(sumEvenElement / countEvenElement);
  }
  console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9)); // [2, 4, 6, 8] => 5
  console.log(averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // [64, 10, 40] => 38
}

function makeWork (arrOfArr, func) { 
 
  let maxWorkerResult = func(...arrOfArr[0]);
  for(let i = 1; i < arrOfArr.length; i++) {
    const max = func(...arrOfArr[i]);
    if(max > maxWorkerResult) {
      max = maxWorkerResult;
    }
  }

  return max;
  /*const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];
  console.log(makeWork(arr, summElementsWorker)); // максимум из 61, 206, 328, 284 => 328
  console.log(makeWork(arr, differenceMaxMinWorker)); // максимум из 10, 86, 44, 66 => 86
  console.log(makeWork(arr, differenceEvenOddWorker)); // максимум из 39, -6, -184, 92 => 92
  console.log(makeWork(arr, averageEvenElementsWorker)); // максимум из 12.5, 33.333, 72, 62.666 => 72*/
}
