const args = process.argv;
let words = args.slice(2);

const reverseWords = function() {
  let reversedString = "";
  for (let word of words) {
    for (let i = 1; i < word.length; i++) {
      let letter = `${word[i]}`;
      reversedString += letter;
    }
    reversedString += `${word[0]}ay `;
  }
  return reversedString;
};

console.log(reverseWords());

