// in objects :  .hasOwnProperty(property) checks if an object has a key that matches that property given to it and returns true or false  

//in strings :  .toString() method returns a new string


// if else challenge

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    // Only change code below this line
    if (strokes == 1) return names[0]
    else if (strokes <= par - 2) return names[1]
    else if (strokes == par - 1) return names[2]
    else if (strokes == par) return names[3]
    else if (strokes == par + 1) return names[4]
    else if (strokes == par + 2) return names[5]
    else return names[6]
    // Only change code above this line
}

console.log(golfScore(4, 3))


// switch case

/*If you need to match one value against many options, you can use a switch statement. 
A switch statement compares the value to the case statements which define various possible values. 
Any valid JavaScript statements can be executed inside a case block and will run from the first matched case value until a break is encountered.
*/

//case values are tested with strict equality (===). The break tells JavaScript to stop executing statements. 
//If the break is omitted, the next statement will be executed.


// example : 

function caseInSwitch(val) {
    let answer = "";
    // Only change code below this line
    switch (val) { // case uses === for comparison
        case 1:
            answer = "alpha"
            break
        case 2:
            answer = "beta"
            break
        case 3:
            answer = "gamma"
            break
        case 4:
            answer = "delta"
            break
        default:
            answer = "lol"
    }
    // Only change code above this line
    return answer;
}

console.log(caseInSwitch(1));

// another example : 

function sequentialSizes(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
    }


    // Only change code above this line
    return answer;
}

sequentialSizes(1);


// another one


function chainToSwitch(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {

        case "bob":
            answer = "Marley"
            break

        case 42:
            answer = "The Answer"
            break

        case 1:
            answer = "There is no #1"
            break

        case 99:
            answer = "Missed me by this much!"
            break

        case 7:
            answer = "Ate Nine"
            break

    }
    return answer
}

console.log(chainToSwitch(99));


//   Hint
// Remember that undefined is a keyword, not a string.


// the undefined keyword

function abTest(a, b) {
    // Only change code below this line

    if (a < 0 || b < 0) return undefined

    // Only change code above this line

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2, 2);


// casino game Blackjack

let count = 0;

function cc(card) {
    // Only change code below this line
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break

        case 7:
        case 8:
        case 9:
            break

        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count--;
            break
    }

    let decision = " Hold"
    if (count > 0) decision = " Bet"

    return count + decision;
    // Only change code above this line
}


cc(3); cc(7); cc('K'); cc('A');
console.log(cc('K'));



// Objects


//In this example, all the properties are stored as strings, such as name, legs, and tails. 
//However, you can also use numbers as properties. You can even omit the quotes for single-word string properties, as follows:

const anotherObject = {
    make: "Ford",
    5: "five",
    "model": "focus"
};

// However, if your object has any non-string properties, JavaScript will automatically typecast them as strings.
// There are two ways to access the properties of an object: dot notation (.) and bracket notation ([]), similar to an array.
// Dot notation is what you use when you know the name of the property you're trying to access ahead of time.

// The second way to access the properties of an object is bracket notation ([]).
// If the property of the object you are trying to access has a space in its name, you will need to use bracket notation.


// example with brackets

const testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};

// Only change code below this line
const entreeValue = testObj["an entree"];   // Change this line
const drinkValue = testObj["the drink"];


// we can add a property to the actual object jus like this : 

const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

console.log(myDog)

myDog.bark = "woof"

console.log(myDog)


// to delete a property : // use the delete keyWord 

// Setup
const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
  };
  
  // Only change code below this line
  
  delete myDog.bark
  
  console.log(myDog)