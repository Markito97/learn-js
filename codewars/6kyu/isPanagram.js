// A pangram is a sentence that contains every single letter of the alphabet at least once.
// For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram,
// because it uses the letters A-Z at least once (case is irrelevant).
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not.
// Ignore numbers and punctuation.

const isPanagram = (string) => {
  string = string.toLowerCase();
  let hasLetter = new Set();
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const arrOfStrings = string.split("");
  for (let i = 0; i < arrOfStrings.length; i++) {
    if (alphabet.includes(arrOfStrings[i])) {
      hasLetter.add(arrOfStrings[i]);
    }
  }
  if (hasLetter.size === 26) return true;
  return false;
};

const result = isPanagram("The quick brown fox jumps over the lazy dog.");
console.log(result);
