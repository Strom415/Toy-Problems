var validMountainArray = function(A) {
  let up = true;

  if (A.length < 3) return false;
  
  for (let i = 0; i < A.length - 1; i++) {
    if (A[i] === A[i + 1]) {
      return false
    }
    if (up) {
      if (A[i] > A[i + 1]) {
        up = false;
        if (i === 0) return false;
      }
    } else {
      if (A[i] < A[i + 1]) {
        return false;
      }
    }
  }
  return up === false;
};

let array = [2, 1];
let array2 = [3, 5, 5];
let array3 = [0, 3, 2 , 1]

let test = validMountainArray(array);
let test2 = validMountainArray(array2);
let test3 = validMountainArray(array3);
console.log(test);
console.log(test2);
console.log(test3);