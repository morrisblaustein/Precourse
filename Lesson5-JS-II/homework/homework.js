// Do not change any of the function names

function multiplyArguments() {
  var a = arguments;
  if (a.length ==0){
    return 0;
  }
  var sum = 1;
  for ( var i = 0; i < a.length; i ++){
    if (!a[i])
    return 0;
    sum*=a[i];
  }
  return sum;
}

function getBiggest(x, y) {
  return ( x>y ? x : y);
}

function greeting(language) {
  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  // language: 'Mandarin' -> 'Ni Hao!'
  // language: 'Spanish' -> 'Hola!'
  // if language is undefined return 'Hello!'\
  if (language == 'German'){
    return 'Guten Tag!';
  }
  if (language == 'Mandarin'){
    return 'Ni Hao!';
  }
  if (language == 'Spanish'){
    return 'Hola!';
  }
  return 'Hello!';
  
}

function isTenOrFive(num) {
  if ( num === 10 || num === 5){
    return true;
  }
  return false;
}

function isInRange(num) {
  if ( num < 50 && num > 20){
    return true;
  }
  return false;
}

function isInteger(num) {
  return (Math.floor(num)==num);
}

function fizzBuzz(num) {
  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num
  if (num%5==0&&num%3==0){
    return 'fizzbuzz';
  }
  if ( num%3==0){
    return 'fizz';
  }
  if (num%5==0){
    return 'buzz';
  }

  return num;
}

function isPrime(num) {
  if (num ==0|| num ==1){
    return false;
  }
  for ( var i = 2; i < num; i ++){
    if (num%i==0){

      return false;
    }
  }
  return true;
}



// Do not modify code below this line.
// --------------------------------

module.exports = {
  multiplyArguments,
  getBiggest,
  greeting,
  isTenOrFive,
  isInRange,
  isInteger,
  fizzBuzz,
  isPrime,
};
