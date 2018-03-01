// Do not change any of the function names

function returnFirst(arr) {
  return arr[0];
}

function returnLast(arr) {
  return arr[arr.length-1];
}

function getArrayLength(arr) {
  return arr.length;
}

function incrementByOne(arr) {
  for ( var i = 0; i < arr.length; i ++){
    arr[i]++;
  }
  return arr;  
}

function addItemToArray(arr, item) {
  arr.push(item);
  return arr;
}

function addItemToFront(arr, item) {
  arr.unshift(item);
  return arr;
}

function wordsToSentence(words) {
  var sentance = '';
  for (var i = 0; i <words.length;i++){
    if (i == words.length-1){
      sentance+=words[i];
    }
    else
    sentance+= words[i] + ' ';
  }  
  return sentance;
}

function contains(arr, item) {
  for (var i=0;i<arr.length;i++){
    if (arr[i] == item)
      return true;
  }
  return false;
}

function addNumbers(numbers) {
  var sum = 0;
  for (var i=0; i <numbers.length;i++){
    sum+=numbers[i];
  }
  return sum;
}

function averageTestScore(testScores) {
  var sum = 0;
  for (var i=0; i <testScores.length;i++){
    sum+=testScores[i];
  }
  return sum/testScores.length;
}

function largestNumber(numbers) {
  var number = numbers[0];
  for ( var i = 1; i < numbers.length; i ++){
    if ( numbers[i]>number){
      number = numbers[i];
    }
  }
  return number;
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  returnFirst,
  returnLast,
  getArrayLength,
  incrementByOne,
  addItemToArray,
  addItemToFront,
  wordsToSentence,
  contains,
  addNumbers,
  averageTestScore,
  largestNumber,
};
