let diStringMatch = function(S) {
  let output = [];
  let bot = 0;
  let top = S.length;
  
  for (let i = S.length; i >= 0; i--) {
    if (S[i - 1] === "I") {
      output[i] = top;
      top--;
    } else {
      output[i] = bot;
      bot++
    }
  }
  return output;
};

/*
"DDIIDI"
[3,2,1,4,5,0,6]
"IIDIDI"
[2,3,4,1,5,0,6]
"IIIDDD"
[3,4,5,6,2,1,0]
*/

let test1 = diStringMatch("DDIIDI");
let test2 = diStringMatch("IIDIDI");
let test3 = diStringMatch("IIIDDD");

console.log(test1);
console.log(test2);
console.log(test3);