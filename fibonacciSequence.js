/*
The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, 
such that each number is the sum of the two preceding ones, starting from 0 and 1.
F(N) = F(N - 1) + F(N - 2)

Given N, calculate F(N).
*/

// Matt's solution
const fib = function(N, current = 1, last = 0, count = 2) {
  if (N <= 1) {
    return N;
  }
  
  if (N === count) {
    return (current + last)
  }

  return fib(N, current + last, current, count + 1);
};

// iterative solution
const fibIterative = N => {
  let arr = [0, 1];
  
  for (let i = 2; i <= N; i++) {
      arr.push(arr[i-2] + arr[i-1]);
  }
  return arr[N];
};

// one line solution
const fibOneLine = N => N < 2 ? N : fibOneLine(N - 1) + fibOneLine(N - 2)

// Tests
for (let i = 0; i <= 30; i++) {
  console.log(fibOneLine(i));
}