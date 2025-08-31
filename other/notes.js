// to convert in string -> .toString(base)
const number = 100;
const stringNotation = number.toString(16);
console.log(typeof stringNotation, stringNotation);

// string to number
const strNum = "1234";
const strToNum = Number(strNum);
console.log(typeof strToNum, strToNum);

// reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

