// Do not change any of the function names

function invokeCallback(cb) {
  cb();
}

function sumArray(numbers, cb) {
  var sum = numbers.reduce(function(acc,item){return acc+item;});
  cb(sum);
}

function forEach(arr, cb) {
  arr.forEach(cb);
}

function map(arr, cb) {
  var result = arr.map(cb);
  return result;
  // create a new array
  // iterate over each value in arr, pass it to cb, then place the value returned from cb into the new arr
  // the new array should be the same length as the array argument
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  invokeCallback,
  sumArray,
  forEach,
  map,
};
