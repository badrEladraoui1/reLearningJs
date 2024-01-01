
// just the important things that i came across

// commenting multi lines

/* js has 8 types :
 undefined ,
 null ,
 string ,
 boolean ,
 symbol ,
 bigint ,
 number ,
 object
*/

//When JavaScript variables are declared, they have an initial value of *undefined*

//If you do a mathematical operation on an undefined variable your result will be NaN which means "Not a Number"

//If you concatenate a string with an undefined variable, you will get a string of undefined

//In JavaScript all variables and function names are case sensitive. This means that capitalization matters.

// var let const

/* operators :

+
-
*
/

*/

// String values in JavaScript may be written with single or double quotes, as long as you start and end with the same type of quote

/*

Code	Output

\'	    single quote
\"	    double quote
\\	    backslash
\n	    newline
\t	    tab
\r	    carriage return
\b	    backspace
\f	    form feed

*/


/*
In JavaScript, when the + operator is used with a String value, it is called the concatenation operator.
You can build a new string out of other strings by concatenating them together.
 */

//Note: Watch out for spaces. Concatenation does not add spaces between concatenated strings, so you'll need to add them yourself.


//In JavaScript, String values are immutable, which means that they cannot be altered once created.




// ARRAYS ************


// Unlike strings, the entries of arrays are mutable and can be changed freely, even if the array was declared with const.


//push : add to the end of an array


//An easy way to append data to the end of an array is via the push() method.
//The push() method takes one or more arguments and appends them to the end of the array, in the order in which they appear. It returns the new length of the array


//pop : removes from the end of an array and returns the removed item


//Another way to change the data in an array is with the .pop() function.
//.pop() is used to pop a value off of the end of an array. We can store this popped off value by assigning it to a variable.
//In other words, .pop() removes the last element from an array and returns that element


//shift : removes from the start of an array and returns the removed item


//pop() always removes the last element of an array. What if you want to remove the first?
//That's where .shift() comes in. It works just like .pop(), except it removes the first element instead of the last


//unshift : adds element at the beginning of the array


//Not only can you shift elements off of the beginning of an array, you can also unshift elements to the beginning of an array i.e. add elements in front of the array.
//.unshift() works exactly like .push(), but instead of adding the element at the end of the array, unshift() adds the element at the beginning of the array.


// if we don't use var , let or const to a new variable it will be global by default even inside a function




// It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.



/* 
In Computer Science a queue is an abstract Data Structure where items are kept in order. New items can be added at the back of the queue and old items are taken off from the front of the queue.

Write a function nextInLine which takes an array (arr) and a number (item) as arguments.

Add the number to the end of the array, then remove the first element of the array.

The nextInLine function should then return the element that was removed.

*/

function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item) // adding to the end
    const removedElem = arr.shift() // removing the first element element and assign it to a variable
    return removedElem;
    // Only change code above this line
}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));


// booleans

// Note: Boolean values are never written with quotes. The strings "true" and "false" are not Boolean and have no special meaning in JavaScript.

// the equality operator (==)
// The equality operator compares two values and returns true if they're equivalent or false if they are not
// which attempts to convert both values being compared to a common type

1 == 1  // true
1 == 2  // false
1 == '1' // true
"3" == 3  // true


// Strict equality (===)
//  the strict equality operator does not perform a type conversion.

3 ===  3  // true
3 === '3' // false


// Examples

// 3 == '3' returns true because JavaScript performs type conversion from string to number.
//  3 === '3' returns false because the types are different and type conversion is not performed.


// Note: In JavaScript, you can determine the type of a variable or a value with the typeof operator, as follows:


//The inequality operator (!=) is the opposite of the equality operator. It means not equal and returns false where equality would return true and vice versa.
// Like the equality operator, the inequality operator will convert data types of values while comparing.

1 !=  2    // true
1 != "1"   // false
1 != '1'   // false
1 != true  // false // true is coerced to its numeric equivalent, which is 1. Therefore, 1 is not different from 1, hence the result is false.
0 != false // false // same for this case


//The strict inequality operator (!==) is the logical opposite of the strict equality operator.
// It means "Strictly Not Equal" and returns false where strict equality would return true and vice versa. 
// The strict inequality operator will not convert data types.

3 !==  3  // false
3 !== '3' // true
4 !==  3  // true


//The greater than operator (>) compares the values of two numbers. If the number to the left is greater than the number to the right, it returns true. Otherwise, it returns false.
//Like the equality operator, the greater than operator will convert data types of values while comparing.

5   >  3  // true
7   > '3' // true
2   >  3  // false
'1' >  9  // false

//he greater than or equal to operator (>=) compares the values of two numbers. 
//If the number to the left is greater than or equal to the number to the right, it returns true. Otherwise, it returns false.
// Like the equality operator, the greater than or equal to operator will convert data types while comparing.

6   >=  6  // true
7   >= '3' // true
2   >=  3  // false
'7' >=  9  // false

