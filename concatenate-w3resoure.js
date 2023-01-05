// Concatenate two strings and return the result
// Write a JavaScript program to concatenate two strings and return the result. 
// If the length of the strings are not same then remove the characters from the longer string.
// For example "Python" and "JS" will be "onJS".

let str1 = "Python";
let str2 = "JS";

const m = Math.min(str1.length, str2.length);
console.log(m)

let strEnd = str1.substring(str1.length - m) + str2.substring(str2.length - m);
console.log(strEnd)
