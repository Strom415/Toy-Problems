/*
  In an alien language, surprisingly they also use english lowercase letters, but possibly in a different order. 
  The order of the alphabet is some permutation of lowercase letters.

  Given a sequence of words written in the alien language, and the order of the alphabet, 
  return true if and only if the given words are sorted lexicographicaly in this alien language.
*/

let compareWords = function(a, b, alphabet) {
  if (a === b) {
    return true;
  }
  for (let i = 0; i < a.length && i < b.length; i++) {
    if (alphabet[a[i]] !== alphabet[b[i]]) {
      return alphabet[a[i]] < alphabet[b[i]];
    }
  }
  return a.length < b.length;
}

let isAlienSorted = function(words, order) {
  let alphabet = {};
  for (let i = 0; i < order.length; i++) {
    alphabet[order[i]] = i;
  }
  
  for (let i = 0; i < words.length - 1; i++) {
    if (!compareWords(words[i], words[i + 1], alphabet)) {
      return false;
    }
  }

  return true;
};

let words1 = ["hello","leetcode"];
let order1 = "hlabcdefgijkmnopqrstuvwxyz";

let words2 = ["word","world","row"];
let order2 = "worldabcefghijkmnpqstuvxyz";

let words3 = ["apple","app"];
let order3 = "abcdefghijklmnopqrstuvwxyz";

let answer1 = isAlienSorted(words1, order1);
let answer2 = isAlienSorted(words2, order2);
let answer3 = isAlienSorted(words3, order3);

console.log(answer1, "should equal true");
console.log(answer2, "should equal false");
console.log(answer3, "should equal false");
