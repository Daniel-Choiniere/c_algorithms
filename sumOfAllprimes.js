// Sum all the prime numbers up to and including the provided number.
// A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number
// because it's only divisible by one and two.

function isPrime(val){

  //test if number is prime
  for(var i=2; i < val; i++){
    if(val % i === 0){
      return false;
    }
  }
  return true;
}

function sumPrimes(num) {
  var answer = 0;

  //loop through all numbers from 2 to input value
  for(var i=2; i <= num; i++){

    //sum only prime numbers, skip all others
    if(isPrime(i)){
      answer += i;
    }
  }
  return answer;
}

sumPrimes(977);