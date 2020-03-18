// In this kata you have to write a method that folds a given array of integers by the middle x-times.

// An example says more than thousand words:

// Fold 1-times:
// [1,2,3,4,5] -> [6,6,3]

// A little visualization (NOT for the algorithm but for the idea of folding):

//  Step 1         Step 2        Step 3       Step 4       Step5
//                      5/           5|         5\          
//                     4/            4|          4\      
// 1 2 3 4 5      1 2 3/         1 2 3|       1 2 3\       6 6 3
// ----*----      ----*          ----*        ----*        ----*


// Fold 2-times:
// [1,2,3,4,5] -> [9,6]

// As you see, if the count of numbers is odd, the middle number will stay. Otherwise the fold-point is between the middle-numbers, so all numbers would be added in a way.

// The array will always contain numbers and will never be null. The parameter runs will always be a positive integer greater than 0 and says how many runs of folding your method has to do.

// If an array with one element is folded, it stays as the same array.
// The input array should not be modified!

function foldArray(array, runs) {
  let finalResult = array;
  let iterationCount = 0;
  
  do{
    const creaseIndex = Math.floor(finalResult.length / 2);
    if(finalResult.length === 1) {
      return finalResult;
    } 
    iterationCount++; 
    console.log('iteration count: ', iterationCount, '; runs: ', runs);
    const runResult = [];
    for(let i = 0; i < creaseIndex; i++) {
      runResult.push(finalResult[i] + finalResult[finalResult.length - 1 - i]);
    }

    
    if(finalResult.length % 2 === 1) {
      runResult.push(finalResult[Math.floor(finalResult.length / 2)]);
    }

    console.log('runResult: ', runResult, '; array: ', array);
    
    finalResult = runResult;
  } while(iterationCount < runs);

  console.log('final result: ', finalResult);

  return finalResult;
}

module.exports = foldArray;

