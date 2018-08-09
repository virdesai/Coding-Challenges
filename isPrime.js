let knownPrimes = [2, 3, 5, 7, 11, 13, 17]; // editable list to improve efficiency of checks loops
function isPrime(number) {
  if (!Number.isInteger(number)) {
    return false;
  }

  if (number <= 1) {
    return false;
  }

  let largestPrime = 2;
  let indexOfLargestPrime = 0;
  let half = Math.round(Math.sqrt(number));

  for(let i = 0; i < knownPrimes.length; i++) {
    let prime = knownPrimes[i];
    if(prime <= half) {
      largestPrime = prime;
      indexOfLargestPrime = i;
      if(number % prime === 0){
        return false;
      }
    }
  };

  if (indexOfLargestPrime !== knownPrimes.length - 1) {
    largestPrime = knownPrimes[indexOfLargestPrime + 1];
  } else {
    largestPrime++;
  }

  for(let i = largestPrime; i <= half; i++) {
    if(number % i === 0) {
      return false;
    }
  }

  return true;
}
