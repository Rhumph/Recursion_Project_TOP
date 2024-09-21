// Fibonnacci sequence using iteration
function fibs(number) {
  let fibsArray = [0, 1];

  if (fibsArray[fibsArray.length - 1] < number) {
    for (index = fibsArray.length; index < number; index++) {
      const nextNo =
        fibsArray[fibsArray.length - 1] + fibsArray[fibsArray.length - 2];
      fibsArray.push(nextNo);
      console.log(fibsArray[fibsArray.length - 1]);
    }
  }

  return fibsArray;
}

// Fibonnacci sequence using recursion
function fibsRec(number, fibArray = [0, 1]) {
  if (fibArray.length >= number) return fibArray;

  const nextFib = fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2];
  fibArray.push(nextFib);

  return fibsRec(number, fibArray);
}

// Merge Sort using Recursion
function mergeSort(array) {
    if (array.length <= 1) {
      return array;
    }
  
    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);
  
    const merge = (left, right) => {
      let resultArray = [];
      let leftIndex = 0;
      let rightIndex = 0;
  
      while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
          resultArray.push(left[leftIndex]);
          leftIndex++;
        } else {
          resultArray.push(right[rightIndex]);
          rightIndex++;
        }
      }
  
      return resultArray
              .concat(left.slice(leftIndex))
              .concat(right.slice(rightIndex));
    };
  
    return merge(mergeSort(left), mergeSort(right));
  }
  
  const array = [34, 7, 23, 32, 5, 62];
  const sortedArray = mergeSort(array);
  console.log(sortedArray);

// fibs(12);
// console.log(fibsRec(8));
