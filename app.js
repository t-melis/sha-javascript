
// Hello World in English
console.log("Hello World!");

// Hello World in Greek
console.log("Γεια Κοσμε");

// Hello World in Spanish
console.log("Hola, mundo!");

// On the next example there is an error parsing the javascript.
// The error comes from the " ' " where the string ends before it should
// and after the apostroph the next caracters become unrecognizable by the
// interpreter
// console.log('I'm awesome!');
// The solution is to use escape character " / " or use double quotes
console.log('I\'m awesome');
console.log("I'm awesome");

// Declare a variable x and initialize it with an interger
// First Declare x
let x;
console.log("The value of my variable x will be: undefined");
console.log(x);

x = 0;
console.log("The value of my variable x will be: 0");
console.log(x);

let y = "o.O";
console.log("The value of y will be: o.O");
console.log(y);
console.log("I think o.O will be logged to the screen");
console.log(y);

// Here we round the number 7.25 to the nearest integer

let z = 7.25;
console.log(z);

// We round 7.25 to the nearest integer and assign it to var a
let a = Math.floor(z);
console.log(a);
// We log the highest one of those 2 variables
console.log(Math.max(a, z));

let elements = [];
console.log("I think elements is an empty object {}");
console.log(elements);
let animals = ["Zebra", "Girafaree", "Rhino", "Panther", "Cheetah"];
console.log(animals);
animals.push("baby pig");
console.log(animals);

let myString = "this is a test";
console.log(myString);
let stringLength = myString.length;
console.log(stringLength);

let first = 1;
let second = true;
let third = "Oops";
let fourth = { name: "Ok"};
console.log("First variable type is " + typeof first);
console.log("Second variable type is " + typeof second);
console.log("Thirs variable type is " + typeof third);
console.log("Fourth variable type is " + typeof fourth);

function checkIfSame(x, y){
	if((typeof x) === (typeof y)){
		console.log("SAME TYPE");
	} else {
		console.log("DIFFERENT TYPE");
	}
}
checkIfSame(first, second);
checkIfSame(second, third);
let one = 2;
let two = 3;
checkIfSame(one, two);


// Modulo operator represents the remainder 
// For example 5 % 2 = 1 because 2x2 = 4, 5-4 = 1
// 10 % 2 = 0 becaise 2x5 = 10, 10 - 10 = 0
x = 7;
x = x % 3;
console.log("x will be 1");
console.log(x);

// Can you store multiple types in an array? Number and strings?
// Yes i can!
// Example

let arr = [];
arr.push(2);
arr.push("String");
arr.push({name: "Thanos", lastName: "Melistas"});
arr.push(true);

console.log(arr);


