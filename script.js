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

return fibsArray
}

// Fibonnacci sequence using recursion
function fibsRec(number, fibArray = [0, 1]){ 

    if (fibArray.length >= number)
        return fibArray

    const nextFib = fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2];
    fibArray.push(nextFib);

    return fibsRec(number, fibArray);
}

fibs(12);
console.log(fibsRec(8))
