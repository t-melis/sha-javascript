// Considering the following string
// Add the string to your file and log it
let myString = "hello,this,is,a,difficult,to,read,sentence";

// Log the length of the string
let myStringLength = myString.length;
console.log(myStringLength);

// The commas make that the sentence is quite hard to read. Find a way to remove the commas from the string and replace them with spaces

// Here we will use the replace function attached to the string object and a regular expression matching the commas in the sentence as the first argument of the function. The second argument with me the space string " "

myString = myString.replace(/,/g , " ");

// Log the string to see if you succeeded
console.log(myString);

// Consider the following array:
let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];

// Add a statement that adds Mauro's favorite animal 'turtle' to the existing array.
// Here we can use both push() and unshift() function attached to the array object depending on which index we want to put the new value. If we want to put at the start we will use the unshift function, else at the end the push


favoriteAnimals.push("turtle");

// Log your new array
console.log(favoriteAnimals);

// Now add Jim's favorite animal to the array, its 'meerkat', but make sure it will be placed after 'blowfish' and before 'capricorn'

// What we want here is the splice function on the array object
// splice(index, 0, item) will insert item into the array at the specified index deleting 0 items first that is.

favoriteAnimals.splice(1, 0, "meerkat");

// Write a console.log statement that explains in words you think the new value of the array is

console.log("I think the new array value is: ['blowfish', 'meerkat', 'capricorn','giraffe','turtle']");

// Log your new array
console.log(favoriteAnimals);

// Log the length of the array, add a message: "The array has a length of: (here you should show the length of the array)
console.log("The array has a length of: " + favoriteAnimals.length);

// Jason does not like 'giraffe', delete this animal from the array
// Because giraffe isnt last or first in the array we cannot use pop or shift functions
// Here we can use 2 functions. delete and splice. Their difference is tha tdekete will delete the object property but will not reindex the array or update its length. This isnt something we want so we will use the splice method

favoriteAnimals.splice(4, 1);

// Log your new array
console.log(favoriteAnimals);

// Now if unlike Jim, you done like 'meerkat' and you want to delete it from the array, but you dont know the position or the index of the item in that array, how can you find it?
// We can use the indexOf() method which returns the first index at thich a given element can be found in the array, or returns -1 if its not present

var indexOfGiraffe = favoriteAnimals.indexOf("giraffe");
console.log("The item you are looking for is at index: " + indexOfGiraffe);

// Create a function that takes 2 arguments and returns the sum of these arguments

function add(first, second, third){
	var sum = first + second + third;
	return sum;
}

// Test the function
console.log(add(1,2,3));

// Create a function named colorCar that receives a color, and prints out "a red car" for example

function carColor(color){
	console.log("a " + color + " car");
}

// Test the function
console.log(carColor("yellow"));

// Create an object and a function that takes the object as a parameter and prints out all of its properties and values

function printObj(object){
	console.log(object);
}

// Test the function
var car = {car: "Opel", color: "red"};
printObj(car);

// Create a function named vehicleType that receives a color, and a code, 1 for cat, 2 for motorbike and prints "a blue motorbike" for example when called as vehicleType("blue", 2)

function vehicleType(color, code){
	if(code === 1){
		console.log("A " + color + " car.");
	}else if(code === 2){
		console.log("A " + color + " motorbike.");
	}else{
		console.log("Wrong argument passed");
	}
}

// Test the function
vehicleType("red", 2);

// Wrute the following without the if statement but with just as a single line with console.log(...);

console.log(3 === 3? "yes" : "no");


// Create a function called vehicle, like before but takes another parameter called age, so that vehicle("blue", 1. 5) prints a blue used car

// function vehicle(color, age, code){
// 	if(code === 2){
// 		if(age > 1){
// 			console.log("A " + color + " used car");
// 		} else {
// 			console.log("A " + color + " new car");
// 		}
// 	}
// 	else if(code === 1){
// 		if(age > 1) {
// 			console.log("A " + color + " used motorbike");
// 		} else {
// 			console.log("A " + color + " new motorbike");
// 		}
// 	}
// 	else {
// 		console.log("Wrong code");
// 	}
// }
			
// Make a list of vehicles, you can add "motorbike", "caravan", "bike" or more

let list = ["motorbike", "caravan", "bike"];


// How do you get the third element from that list?

console.log(list[2]);

// Change the function vehicle to use the list of question 7/ So that vehicle("green", 3, 1) prints a green new bike

// vehicle("green", 3, 1);

function vehicle(color, i, age, list){
	console.log("A " + color + " " + ((age === 1)? "new" : "used") + " " + list[i-1]);
}


vehicle("green", 3, 1, list);

var myStr = "";
for(var i = 0; i < list.length; i++){
	myStr += list[i] + "s,";
}

myStr = "Amazing Joe's Garage, we service "+ myStr.replace(/.$/,".");
console.log(myStr);

let teachers = [{name: "Kostas"}, {name: "Kosmas"}];

teachers.forEach(teacher => {
	teacher.teaches = "Javascript";
})

console.log(teachers);

let o1 = {foo: 'bar'};
let o2 = {foo: 'bar'};
let o3 = o2;

o2.bar = 'foo';
console.log(o3);
console.log(o1);
console.log("It does not");


let x = [1,2,3];
let y = [1,2,3];
let z = y;

// Arrays are reference type meaning they 
// get saved on the heap memory of the computer
// So although they have the same values they 
// have different place in memory
// So comparing x and y will be false
// z = y means that now z is a pointer to y so changing y
// will also change z! so z is equal to y but not x
console.log(x == y);
console.log(x === y);
console.log(z == x);
console.log(z == y);

// typeof returns a string so typeof typeof
// will return a string
let bar = 42;
console.log(typeof typeof bar);







