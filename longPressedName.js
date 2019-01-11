// Your friend is typing his name into a keyboard.  Sometimes, when typing a character c, 
// the key might get long pressed, and the character will be typed 1 or more times.

// You examine the typed characters of the keyboard.  Return True if it is possible that it 
// was your friends name, with some characters (possibly none) being long pressed.

var isLongPressedName = function(name, typed) {
  let counter = 0;
  let lastPress = null;
  for (let i = 0; i < typed.length; i++) {
    if (counter === name.length) return true;
    if (typed[i] === name[counter]) {
      lastPress = name[counter];
      counter++;
    } else if (typed[i] !== lastPress) {
      return false;
    }
  }
  return counter === name.length;
};


//tests
let answer1 = isLongPressedName("alex", "aaleex");
let answer2 = isLongPressedName("saeed", "ssaaedd");
let answer3 = isLongPressedName("leelee", "lleeelee");
let answer4 = isLongPressedName("laiden", "laiden");
let answer5 = isLongPressedName("pyplrz", "ppyypllr");

console.log(answer1);
console.log(answer2);
console.log(answer3);
console.log(answer4);
console.log(answer5);
//true false true true false