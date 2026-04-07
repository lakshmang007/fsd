const prompt = require('prompt-sync')();

let str = prompt("Enter a string:");
let length = str.length;
let lowerStr = str.toLowerCase();
let extracted = "";
let new_str = str;
if (lowerStr.includes("javascript")) {
    extracted = "JavaScript";
    new_str = str.replace(/javascript/i, "TypeScript");
} else {
    extracted = "nothing extracted";
}
ck
let reversed = str.split('').reverse().join('');
let palindrome = (str === reversed);

console.log(
"Length: " + length +
"\nExtracted: " + extracted +
"\nNew String: " + new_str +
"\nPalindrome: " + palindrome
);