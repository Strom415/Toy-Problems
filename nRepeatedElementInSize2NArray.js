//In a array A of size 2N, there are N+1 unique elements, and exactly one of these elements is repeated N times.
//Return the element repeated N times.

var repeatedNTimes = function(A) {  
  let storage = {};
  
  for (let a of A) {
    if (storage[a] === undefined) {
      storage[a] = 1;
    } else {
      return a;
    }
  }
};