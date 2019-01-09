// Given two non-negative integers x and y, an integer is powerful 
// if it is equal to x^i + y^j for integers i >= 0 and j >= 0.

// Return a list of all powerful integers that have value less than or equal to bound.

// You may return the answer in any order.  In your answer, each value should occur at most once.

var powerfulIntegers = function(x, y, bound) {
  let powerfulInts = new Set();
  for (let i = 1; i <= bound; i *= x) {
    for (let j = 1; j <= bound; j *= y) {
      if (i + j <= bound) {
        powerfulInts.add(i + j);
      }
      if (y === 1) break
    }
    if (x === 1) break
  }
  
  return Array.from(powerfulInts);
};

// Tests
let test = powerfulIntegers(2, 3, 10);
console.log(test);
// [2,3,4,5,7,9,10]