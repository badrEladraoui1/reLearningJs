// Compare Scopes of the var and let Keywords

/*

When you declare a variable with the var keyword, it is declared globally, or locally if declared inside a function.

The let keyword behaves similarly, but with some extra features. When you declare a variable with the let keyword inside a block,

statement, or expression, its scope is limited to that block, statement, or expression.

*/

var printNumTwo;
for (var i = 0; i < 3; i++) {
    if (i === 2) {
        printNumTwo = function () {
            return i;
        };
    }
}
console.log(printNumTwo());  // Here the console will display the value 3.



let printNumTwo;
for (let i = 0; i < 3; i++) {
    if (i === 2) {
        printNumTwo = function () {
            return i;
        };
    }
}
console.log(printNumTwo()); // Here the console will display the value 2, 
console.log(i);  // and an error that i is not defined.



// example :


function checkScope() {
    let i = 'function scope';
    if (true) {
        let i = 'block scope';
        console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
}

console.log(checkScope())


// Mutate an Array Declared with const

/*

Some developers prefer to assign all their variables using const by default, unless they know they will need to reassign the value.
 Only in that case, they use let.

However, it is important to understand that objects (including arrays and functions) assigned to a variable using const are still mutable.
 Using the const declaration only prevents reassignment of the variable identifier.

*/

// Using const with an object
const myObj = {
    name: 'John',
    age: 30
};

// We can modify properties of the object
myObj.age = 31;
console.log(myObj); // Output: { name: 'John', age: 31 }

// We can't reassign the variable to a new object
// This line will throw an error: "Assignment to constant variable"
// myObj = { name: 'Alice', age: 25 };

// Using const with an array
const myArr = [1, 2, 3];

// We can modify the array
myArr.push(4);
console.log(myArr); // Output: [1, 2, 3, 4]

// We can't reassign the variable to a new array
// This line will throw an error: "Assignment to constant variable"
// myArr = [5, 6, 7];

// Using const with a function
const myFunc = () => {
    console.log('This is a function');
};

// We can't reassign the variable to a new function
// This line will throw an error: "Assignment to constant variable"
// myFunc = () => { console.log('New function'); };

// But we can still invoke the function and modify internal behavior or properties
myFunc(); // Output: "This is a function"


//example

let s = [5, 7, 2];
function editInPlace() {
    // Only change code below this line
    s[0] = 2
    s[1] = 5
    s[2] = 7
    // Using s = [2, 5, 7] would be invalid
    return s
    // Only change code above this line
}
console.log(editInPlace());



// new knowledge : Object.freeze(theObjectHere)

// As seen in the previous challenge, const declaration alone doesn't really protect your data from mutation.
// To ensure your data doesn't change, JavaScript provides a function Object.freeze to prevent data mutation.


let obj = {
    name: "FreeCodeCamp",
    review: "Awesome"
};
Object.freeze(obj);
obj.review = "bad";
obj.newProp = "Test";
console.log(obj);

// another one

function freezeObj() {
    const MATH_CONSTANTS = {
        PI: 3.14
    };
    // Only change code below this line

    Object.freeze(MATH_CONSTANTS)

    // Only change code above this line
    try {
        MATH_CONSTANTS.PI = 99;
    } catch (ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();


// Use Arrow Functions to Write Concise Anonymous Functions

const magic = () => new Date();

console.log(magic())

function magic2() {
    return new Date()
}

console.log(magic2())


// arr1.concat(arr2) // used to concatenate two arrays 

const myConcat = (arr1, arr2) => arr1.concat(arr2)
console.log(myConcat([1, 2], [3, 4, 5]));



// Set Default Parameters for Your Functions

const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));
console.log(greeting());

// ex 2 :

// Only change code below this line
const increment = (number, value = 1) => number + value;
// Only change code above this line

console.log(increment(1)) // outputs 2



// Use the Rest Parameter with Function Parameters

/*

In order to help us create more flexible functions, ES6 introduces the rest parameter for function parameters.
With the rest parameter, you can create functions that take a variable number of arguments.
These arguments are stored in an array that can be accessed later from inside the function.

*/

function howMany(...args) {
    return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], {}));

// The rest parameter eliminates the need to use the arguments object and allows us to use array methods
// on the array of parameters passed to the function howMany.




// slice method : 
// slice() method in JavaScript is used to extract a section of an array and returns a new array without modifying the original array.

array.slice(startIndex, endIndex);

const arr3 = [1, 2, 3, 4, 5];

const slicedArray3 = arr.slice(1, 4);
console.log(slicedArray3); // Output: [2, 3, 4]

//arr.slice(1, 4) extracts elements starting from index 1 up to, but not including, index 4 from the original array arr.




//If startIndex is a negative number, slice() starts counting from the end of the array.
// For instance, -1 refers to the last element of the array, -2 refers to the second-to-last element, and so on.

//startIndex (optional): The zero-based index at which to begin extraction.
// If omitted, it extracts the entire array from the startIndex to the end.

//endIndex (optional): The zero-based index before which to end extraction. slice() extracts up to but does not include endIndex.
// If omitted, it extracts through the end of the array.

const arr = [1, 2, 3, 4, 5];

const slicedArray = arr.slice(-3);
console.log(slicedArray); // Output: [3, 4, 5]



// recursion with rest op

const sum = (...args) => {

    // let total = 0;
    // for (let i = 0; i < args.length; i++) {
    //   total += args[i];
    // }
    // return total;

    if (args.length === 0) return 0
    else {
        const firstNumbr = args[0] // 1 // 2 // 3
        const restNumbrs = args.slice(1) // [2, 3] // [3] // []
        const totalOfRest = sum(...restNumbrs)  // sum([2,3]) // sum([3]) // sum([])
        return totalOfRest + firstNumbr // 3  // 2 + 3 // 1 + 2 + 3
    }
}

// out of context
// An array literal in JavaScript is a way to create an array by directly specifying its elements within square brackets [].




// Use the Spread Operator to Evaluate Arrays In-Place

// ES6 introduces the spread operator, which allows us to expand arrays and other expressions in places where multiple parameters
// or elements are expected.

const arr2 = [6, 89, 3, 45];
const maximus = Math.max(...arr);

//...arr returns an unpacked array. In other words, it spreads the array. However, the spread operator only works in-place




// Use Destructuring Assignment to Extract Values from Objects

// Destructuring assignment is special syntax introduced in ES6, for neatly assigning values taken directly from an object.


const user = { name: 'John Doe', age: 34 };

{
    const name = user.name;
    const age = user.age;
}

// same as this : 

const { name, age } = user;



// Use Destructuring Assignment to Assign Variables from Objects

// Destructuring allows you to assign a new variable name when extracting values.
// You can do this by putting the new name after a colon when assigning the value


const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};

// Only change code below this line

// const highToday = HIGH_TEMPERATURES.today;
// const highTomorrow = HIGH_TEMPERATURES.tomorrow; 

const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES

console.log(highToday)
console.log(highTomorrow)

// Only change code above this line



// Use Destructuring Assignment to Assign Variables from Nested Objects



//You can use the same principles from the previous two lessons to destructure values from nested objects.

//Using an object similar to previous examples:

const users = {
    johnDoe: {
        aged: 34,
        email: 'johnDoe@freeCodeCamp.com'
    }
};

//Here's how to extract the values of object properties and assign them to variables with the same name:

const { johnDoe: { aged, email } } = users;

//And here's how you can assign an object properties' values to variables with different names:

const { johnDoe: { aged: userAge, email: userEmail } } = users;
console.log(userAge)

// another one 

const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
};

// Only change code below this line

// const lowToday = LOCAL_FORECAST.today.low;
// const highToday = LOCAL_FORECAST.today.high;

const { today: { low: todayLow, high: todayHigh } } = LOCAL_FORECAST
console.log(todayLow)
console.log(todayHigh)

// Only change code above this line





// Use Destructuring Assignment to Assign Variables from Arrays


// ES6 makes destructuring arrays as easy as destructuring objects.

// One key difference between the spread operator and array destructuring is that the spread operator 
//unpacks all contents of an array into a comma-separated list. Consequently, you cannot pick or choose which elements 
//you want to assign to variables.

//Destructuring an array lets us do exactly that:

const [a1, b1] = [1, 2, 3, 4, 5, 6];
console.log(a1, b1);
//The console will display the values of a and b as 1, 2.

const [a, b, , , c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);
// The console will display the values of a, b, and c as 1, 2, 5.

let ax = 8, bx = 6;
// Only change code below this line
const arrx = [ax, bx] = [bx, ax]
console.log(arrx) // [ 6, 8 ]




// Destructuring via rest elements

const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b);
console.log(arr);

/*
Variables a and b take the first and second values from the array. After that, because of the rest syntax presence,
 arr gets the rest of the values in the form of an array. The rest element only works correctly as the last variable in the list.
  As in, you cannot use the rest syntax to catch a subarray that leaves out the last element of the original array.
*/
