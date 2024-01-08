// ! Use the JavaScript Console to Check the Value of a Variable

let a = 5;
let b = 1;
a++;
// Only change code below this line

let sumAB = a + b;
console.log(sumAB);
console.log(a)







// ! Understanding the Differences between the freeCodeCamp and Browser Console

let output = "Get this to show once in the freeCodeCamp console and not at all in the browser console";
console.log(output)
console.clear() // ? clears the browser's console








// ! Use typeof to Check the Type of a Variable

/*

 *JavaScript recognizes seven primitive 
 *(immutable) data types: Boolean, Null, Undefined, Number, String, Symbol (new with ES6), and BigInt (new with ES2020),
 *and one type for mutable items: Object. Note that in JavaScript, arrays are technically a type of object.

*/

console.log(typeof "");
console.log(typeof 0);
console.log(typeof []);
console.log(typeof {});

let seven = 7;
console.log(typeof (seven))
let three = "3";
console.log(typeof (three))

console.log(seven + three);







// ! Catch Misspelled Variable and Function Names

// * Transposed, missing, or miscapitalized characters in a variable or function name will have the browser looking for an object
// * that doesn't exist - and complain in the form of a reference error.
// * JavaScript variable and function names are case-sensitive.

{
    let receivables = 10;
    let payables = 8;
    let netWorkingCapital = recievables - payable;
    console.log(`Net working capital is: ${netWorkingCapital}`);
}








// ! Catch Unclosed Parentheses, Brackets, Braces and Quotes

/*

Another syntax error to be aware of is that all opening parentheses, brackets, curly braces, and quotes have a closing pair.
Forgetting a piece tends to happen when you're editing existing code and inserting items with one of the pair types.
Also, take care when nesting code blocks into others, such as adding a callback function as an argument to a method.

*/

// * for Example :

{
    // let myArray = [1, 2, 3;
    // let arraySum = myArray.reduce((previous, current => previous + current);
    // console.log(`Sum of array values is: ${arraySum}`);
}








// ! Catch Mixed Usage of Single and Double Quotes


/*

JavaScript allows the use of both single (') and double (") quotes to declare a string. Deciding which one to use
 generally comes down to personal preference, with some exceptions.

Having two choices is great when a string has contractions or another piece of text that's in quotes.
 Just be careful that you don't close the string too early, which causes a syntax error.

Here are some examples of mixing quotes:

*/

{
    const grouchoContraction = "I've had a perfectly wonderful evening, but this wasn't it.";
    const quoteInString = "Groucho Marx once said 'Quote me as saying I was mis-quoted.'";
    // const uhOhGroucho = 'I've had a perfectly wonderful evening, but this wasn't it.';
}

// * or do this : 

{ const allSameQuotes = 'I\'ve had a perfectly wonderful evening, but this wasn\'t it.'; }


// * Example : 
{
    let innerHtml = "<p>Click here to <a href=\"#Home\">return home</a></p>";
    console.log(innerHtml);
}









// ! Catch Use of Assignment Operator Instead of Equality Operator

//* Almost every value on its own in JavaScript evaluates to true,
//* except what are known as the "falsy" values: false, 0, "" (an empty string), NaN, undefined, and null.

{
    let x = 7;
    let y = 9;
    let result = "to come";

    if (x === y) { // * do not use =
        result = "Equal!";
    } else {
        result = "Not equal!";
    }

    console.log(result);
}






// ! Catch Missing Open and Closing Parenthesis After a Function Call

{
    function myFunction() {
        return "You rock!";
    }
    let varOne = myFunction;
    let varTwo = myFunction();

    // * Here varOne is the function myFunction, and varTwo is the string You rock!.

    console.log(varOne) // ? [Function: myFunction]
    console.log(varTwo) // ? You rock!
    console.log(varOne()) // ? You rock!
    console.log(varTwo()) // ? TypeError: varTwo is not a function
}


// * Example

{
    function getNine() {
        let x = 6;
        let y = 3;
        return x + y;
    }

    let result = getNine();
    console.log(result);
}



// ! Catch Arguments Passed in the Wrong Order When Calling a Function

// *  Make sure to supply all required arguments, in the proper order to avoid these issues.

{
    function raiseToPower(b, e) {
        return Math.pow(b, e);
    }

    let base = 2;
    let exp = 3;
    let power = raiseToPower(base, exp);
    console.log(power);
}







// ! Catch Off By One Errors When Using Indexing

// *  "index out of range" PROBLEM to avoid

{
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let len = alphabet.length;
    for (let i = 0; i <= len; i++) { // ? bad
        console.log(alphabet[i]);
    }
    for (let j = 1; j < len; j++) { // ? bad
        console.log(alphabet[j]);
    }
    for (let k = 0; k < len; k++) { // ? good
        console.log(alphabet[k]);
    }
}









// ! Use Caution When Reinitializing Variables Inside a Loop

// * be careful about where to put you variables 

function zeroArray(m, n) {
    // Creates a 2-D array with m rows and n columns of zeroes
    let newArray = [];
    // let row = []; // * if we had it called here it would'nt return the expected results
    for (let i = 0; i < m; i++) {
        // Adds the m-th row into newArray
        let row = [];
        for (let j = 0; j < n; j++) {
            // Pushes n zeroes into the current row to create the columns
            row.push(0);
        }
        // Pushes the current row, which now has n zeroes in it, to the array
        newArray.push(row);
    }
    return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);








// ! Prevent Infinite Loops with a Valid Terminal Condition

// * prevent infinite loops 

function myFunc() {
    for (let i = 1; i != 4; i += 2) { // * this loop will never end since i will always be different than 4
        console.log("Still going!");
    }
}