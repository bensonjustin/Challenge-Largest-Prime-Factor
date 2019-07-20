exports.largestPrimeFactor = function(n) {
  let primeNumber = 0;
  // do your work here
  let arr = [];
  function isPrime(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }
  const result = [];
  for (let i = 2; i <= n; i++) {
    while (isPrime(i) && n % i === 0) {
      if (!result.includes(i)) result.push(i);
      n /= i;
    }
  }
  return Math.max(...result);
};
