console.log("Hello World!")
function calculateSum(a, b){
    return a + b;
}

if (typeof alert === "function"){
    alert("the sum of 5 + 7 is " + calculateSum(5, 7));
}
else{
    console.log("the sum of 5 + 7 is " + calculateSum(5, 7));
}

const prompt = require('prompt-sync')();

let input = prompt("Enter 5 cities seperated with commas:");
let cities = input.split(", ").map(city => city.trim());

console.log(cities);
console.log(cities.length);
cities.push(prompt("Enter a city:"));
console.log(cities);


