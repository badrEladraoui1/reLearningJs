// Setup
const contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

console.log(lookUpProfile("Akira", "address"))


function lookUpProfile(name, prop) {
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name)
            return contacts[i][prop] || "No such property"
    }
    return "No such contact"
}

console.log(lookUpProfile("Akira", "address"))


// Math.random() : for random numbers between 0 inclusive and 1 exclusive


// Math.floor() : to round up the number tho the nearest whole one

function randomWholeNum() {
    return Math.floor(Math.random() * 20)
}

console.log(randomWholeNum())

/*
Remember that Math.random() can never quite return a 1, so it's impossible to actually get 20 since you are rounding down with Math.floor(). 
This process will give you a random whole number in the range from 0 to 19.
*/



// This formula gives a random whole number in the range from min to max. Take a moment to read it and try to understand what this code is doing:
function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

console.log(randomRange(5, 10))


//parseInt function : 

function convertToInteger(str) {
    return parseInt(str)
}

console.log(convertToInteger("007"));
console.log(convertToInteger("b007"));
console.log(convertToInteger("1b007"));
console.log(convertToInteger("2uu001b007"));

// The above function converts the string 007 to the integer 7. If the first character in the string can't be converted into a number, then it returns NaN.




// The parseInt() function parses a string and returns an integer. 
// It takes a second argument for the radix, which specifies the base of the number in the string.
// The radix can be an integer between 2 and 36.

function convertToInteger(str) {
    return parseInt(str, 2)
}

console.log(convertToInteger("11"));


// The radix variable says that 11 is in the binary system, or base 2. This example converts the string 11 to an integer 3.


// ternary op
function checkEqual(a, b) {
    return a === b ? "Equal" : "Not Equal"
}

console.log(checkEqual(1, 1))


//In the previous challenge, you used a single conditional operator. You can also chain them together to check for multiple conditions.

function checkSign(num) {
    return (num > 0) ? "positive"
        : (num < 0) ? "negative"
            : "zero"
}

console.log(checkSign(0));


/*

    Function Call countup(5) is initiated:
        countup(5) is called.

    Condition Check:
        Since n = 5 is not less than 1, the else block is executed.

    Recursive Call:
        countup(5) calls countup(4) and waits for its result.

    Recursive Call Stack:
        At this point, countup(5) is waiting for countup(4) to complete its execution and return a value.
        The execution waits at this line: const countArray = countup(4);.

    Further Recursive Calls:
        The same process continues down the line until countup(0) is called.
        At countup(0), it returns an empty array [].

    Unwinding of Recursive Calls:
        Once countup(0) returns [], the recursive calls start to unwind.

    Building the Array:
        The unwinding happens in reverse order of the recursive calls.
        At each step, the function does the following:
            It receives the array returned from the previous call (countArray).
            It adds the current value of n to that array (countArray.push(n)).
            It returns the modified array.

    Sequence of Array Building:
        countup(1) receives [], adds 1 to it, and returns [1].
        countup(2) receives [1], adds 2 to it, and returns [1, 2].
        countup(3) receives [1, 2], adds 3 to it, and returns [1, 2, 3].
        countup(4) receives [1, 2, 3], adds 4 to it, and returns [1, 2, 3, 4].
        countup(5) receives [1, 2, 3, 4], adds 5 to it, and returns [1, 2, 3, 4, 5].

    Final Result:
        The final result of countup(5) is the array [1, 2, 3, 4, 5].

The recursion allows the function to keep calling itself with decreasing values of n. When the base case (n < 1) is reached, the function starts returning and "building" the array by adding the current value of n to the array obtained from the previous call.

This process continues until the initial call (countup(5)) has received the full array from the recursive calls and then returns the complete array [1, 2, 3, 4, 5].

*/

function countup(n) {
    if (n < 1) {
        return [];
    } else {
        const countArray = countup(n - 1);
        countArray.push(n);
        return countArray;
    }
}
console.log(countup(5));


// another example


function countdown(n) {
    if (n <= 0) return []
    else {
        const newArr = countdown(n - 1)
        newArr.unshift(n)
        return newArr
    }
}

console.log(countdown(3))
