// Use class Syntax to Define a Constructor Function

// Explicit constructor
class SpaceShuttle {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet;
    }
    takeOff() {
        console.log("To " + this.targetPlanet + "!");
    }
}

// Implicit constructor 
class Rocket {
    launch() {
        console.log("To the moon!");
    }
}

const zeus = new SpaceShuttle('Jupiter');
// prints To Jupiter! in console
zeus.takeOff();

const atlas = new Rocket();
// prints To the moon! in console
atlas.launch();


// my example 

// Only change code below this line

class Vegetable {
    constructor(name) {
        this.name = name;
    }
    color() {
        console.log("mayebe green idk !!!")
    }
}

// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'
carrot.color()





// Use getters and setters to Control Access to an Object

class Book {
    constructor(author) {
        this._author = author;
    }
    // getter
    get writer() {
        return this._author;
    }
    // setter
    set writer(updatedAuthor) {
        this._author = updatedAuthor;
    }
}
const novel = new Book('anonymous');
console.log(novel.writer);
novel.writer = 'newAuthor';
console.log(novel.writer);
// Note: It is convention to precede the name of a private variable with an underscore (_).
// However, the practice itself does not make a variable private.


// exercise : 

// Only change code below this line
class Thermostat {
    constructor(fahrenTemp) {
        this._fahrenTemp = fahrenTemp
    }
    get temperature() {
        return (5 / 9 * (this._fahrenTemp - 32))
    }
    set temperature(celTemp) {
        this._fahrenTemp = (celTemp * 9.0 / 5 + 32)
    }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
console.log(temp)
thermos.temperature = 26; // sets 26 to 78.8 in Fahrenheit
temp = thermos.temperature; // and then this getter transfom it back to 26 in Celsius
console.log(temp) // 26





// Web 

// Create a Module Script


{/* <html>
  <body>
    <!-- Only change code below this line -->
    <script type="module" src="index.js"></script>
    <!-- Only change code above this line -->
  </body>
</html> */}


// In your example, the <script type="module" src="index.js"></script> tag is importing the code from the index.js file as an ECMAScript module.
//  The browser will fetch and execute the index.js file as a module,
//   allowing it to use import and export statements within that file and enabling a modular structure for the JavaScript code in the application.





// Use export to Share a Code Block


const uppercaseString = (string) => {
    return string.toUpperCase();
}

const lowercaseString = (string) => {
    return string.toLowerCase()
}

export { uppercaseString, lowercaseString }


// or


export const uppercaseString1 = (string) => {
    return string.toUpperCase();
}

export const lowercaseString2 = (string) => {
    return string.toLowerCase()
}


// in another file you can import like this : 

import { add } from './math_functions.js';
import { add, subtract } from './math_functions.js';


// exmaple :

import { uppercaseString, lowercaseString } from "./string_functions.js"


// Only change code above this line

uppercaseString("hello");
lowercaseString("WORLD!");





//Use * to Import Everything from a File

import * as myMathModule from "./math_functions.js";
myMathModule.add(2, 3);
myMathModule.subtract(5, 3);

// another example : 

import * as stringFunctions from "./string_functions.js"
// Only change code above this line

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");




//Create an Export Fallback with export default

// There is another export syntax you need to know, known as export default.
//  Usually you will use this syntax if only one value is being exported from a file.
//  It is also used to create a fallback value for a file or module.

export default function add(x, y) {
    return x + y;
}

export default function (x, y) {
    return x + y;
}

// Since export default is used to declare a fallback value for a module or file,
//  you can only have one value be a default export in each module or file.
//  Additionally, you cannot use export default with var, let, or const


export default function subtract(x, y) {
    return x - y;
}

// This default export acts as a fallback value when someone imports from the module without specifying exactly what they're importing.
// For instance, if you have multiple named exports and someone imports from the module without specifying which one to import,
// the default export will be what they get by default.





//Import a Default Export

import subtract from "./math_functions.js"
// Only change code above this line

subtract(7, 4)

// You can use any name here when importing a default.








// Create a JavaScript Promise


/*

A promise in JavaScript is exactly what it sounds like - you use it to make a promise to do something, usually asynchronously.
When the task completes, you either fulfill your promise or fail to do so.
Promise is a constructor function, so you need to use the new keyword to create one.
It takes a function, as its argument, with two parameters - resolve and reject.
These are methods used to determine the outcome of the promise. The syntax looks like this:

*/

const myPromise1 = new Promise((resolve, reject) => {

});

// another example:

const makeServerRequest1 = new Promise((resolve, reject) => {

})


// Complete a Promise with resolve and reject

/*

A promise has three states: pending, fulfilled, and rejected.
The promise you created in the last challenge is forever stuck in the pending state because you did not add a way to complete the promise.
The resolve and reject parameters given to the promise argument are used to do this.
resolve is used when you want your promise to succeed, and reject is used when you want it to fail.
These are methods that take an argument, as seen below.

*/

const myPromise2 = new Promise((resolve, reject) => {
    if ("condition here") {
        resolve("Promise was fulfilled");
    } else {
        reject("Promise was rejected");
    }
});

// The example above uses strings for the argument of these functions, but it can really be anything.
// Often, it might be an object, that you would use data from, to put on your website or elsewhere.

// another example :

const makeServerRequest2 = new Promise((resolve, reject) => {
    // responseFromServer represents a response from a server
    let responseFromServer;

    if (responseFromServer) {
        // Change this line
        resolve("We got the data")
    } else {
        // Change this line
        reject("Data not received")
    }
});




// Handle a Fulfilled Promise with then

/*

Promises are most useful when you have a process that takes an unknown amount of time in your code (i.e. something asynchronous),
often a server request. When you make a server request it takes some amount of time,
and after it completes you usually want to do something with the response from the server.
This can be achieved by using the then method.

*/

Promise.prototype.then(onFulfilled, onRejected) // either fulfillment or rejection , 
//  One of the onFulfilled and onRejected handlers will be executed (it takes one)
// then() only handles the success scenario.

/* 

The then method schedules callback functions for the eventual completion of a Promise - either fulfillment or rejection.
One of the onFulfilled and onRejected handlers will be executed to handle the current promise's fulfillment or rejection.
When the promise is fulfilled with resolve the onFulfilled handler is called.

*/

myPromise.then(result => {
    // console it
});
// result comes from the argument given to the resolve method.


// example : 

const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to true to represent a successful response from a server
    let responseFromServer = true;

    if (responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received");
    }
});

makeServerRequest.then(result => console.log("1 " + result))  // 1

makeServerRequest.then((result) => {  // 2
    console.log("2 " + result)
})

makeServerRequest.then(
    (goodResult) => { console.log("3 :" + goodResult) }, // 3
    (badResult) => { console.log("3 :" + badResult) }
)




/**======================
 *    Handle a Rejected Promise with catch
 *========================**/


/**========================================================================
 *                             COMMENT BLOCK
 *  
 *  catch is the method used when your promise has been rejected.
 *  It is executed immediately after a promise's reject method is called. Here’s the syntax:
 *  
 *  
 *========================================================================**/

myPromise.catch(error => {

});

//* error is the argument passed in to the reject method. 

//exemple

const makeServerRequest3 = new Promise((resolve, reject) => {
    // responseFromServer is set to false to represent an unsuccessful response from a server
    let responseFromServer = false;

    if (responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received");
    }
});

makeServerRequest3.then(result => {
    console.log(result);
});

makeServerRequest3.catch(error => {
    console.log(error);
})




/*============================ END OF SECTION ============================*/

