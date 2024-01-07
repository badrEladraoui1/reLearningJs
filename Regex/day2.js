// ! Match Everything But Letters and Numbers : \W

// * You can search for the opposite of the \w with \W. Note, the opposite pattern uses a capital letter.
// * This shortcut is the same as [^A-Za-z0-9_].

let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand); // ? ["%"]
sentence.match(shortHand); // ? ["!"]

// * Example

{
    let quoteSample = "The five boxing wizards jump quickly.";
    let nonAlphabetRegex = /\W/g;
    let result = quoteSample.match(nonAlphabetRegex).length;
    console.log(quoteSample.match(nonAlphabetRegex)) // ? [ ' ', ' ', ' ', ' ', ' ', '.' ]
    console.log(result) // ?  6
}




// ! Match All Numbers : \d

// * The shortcut to look for digit characters is \d, with a lowercase d. This is equal to the character class [0-9],
// * which looks for a single character of any number between zero and nine.

{
    let movieName = "2001: A Space Odyssey";
    let numRegex = /\d/g;
    let result = movieName.match(numRegex).length;
    console.log(movieName.match(numRegex)) // ? [ '2', '0', '0', '1' ]
    console.log(result) // ? 4
}




// ! Match All Non-Numbers : \D

// * The shortcut to look for non-digit characters is \D. This is equal to the character class [^0-9],
// * which looks for a single character that is not a number between zero and nine.

{
    let movieName = "2001: A Space Odyssey";
    let noNumRegex = /\D/g;
    let result = movieName.match(noNumRegex).length;
    console.log(movieName.match(noNumRegex)) // ? [ ':',' ','A',' ','S','p','a','c','e',' ','O','d','y', c's','s','e','y' ]
    console.log(result) // ? 17
}







// ! Restrict Possible Usernames

{
    let username = "Z97";
    let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;// Change this line
    let result = userCheck.test(username);
    console.log(result)
}

// *  ^ - start of input
// *  [a-z] - first character is a letter
// *  [a-z]+ - following characters are letters
// *  \d*$ - input ends with 0 or more digits
// *  | - or
// *  ^[a-z] - first character is a letter
// *  \d\d+ - following characters are 2 or more digits
// *  $ - end of input







// ! Match Whitespace : \s

// *You can search for whitespace using \s, which is a lowercase s. This pattern not only matches whitespace,
// * but also carriage return, tab, form feed, and new line characters.
// * You can think of it as similar to the character class [ \r\t\f\n\v].

{
    let sample = "Whitespace is important in separating words";
    let countWhiteSpace = /\s/g;
    let result = sample.match(countWhiteSpace);
    console.log(result) // ? [ ' ', ' ', ' ', ' ', ' ' ]
}








// ! Match Non-Whitespace Characters

// * Search for non-whitespace using \S, which is an uppercase s. This pattern will not match whitespace,
// * carriage return, tab, form feed, and new line characters. You can think of it being similar to the character class [^ \r\t\f\n\v].

{
    let sample = "Whitespace is important in separating words";
    let countNonWhiteSpace = /\S/g;
    let result = sample.match(countNonWhiteSpace).length;
    console.log(sample.match(countNonWhiteSpace)) // ? all the characters but whitespace
    console.log(result) // ? 38
}







// ! Specify Upper and Lower Number of Matches

// * You can specify the lower and upper number of patterns with quantity specifiers.
// * Quantity specifiers are used with curly brackets ({ and }). You put two numbers between the curly brackets
// *  - for the lower and upper number of patterns.

// * For example, to match only the letter a appearing between 3 and 5 times in the string ah, your regex would be /a{3,5}h/.


{
    let A4 = "aaaah";
    let A2 = "aah";
    let multipleA = /a{3,5}h/;
    multipleA.test(A4); // ? true
    multipleA.test(A2); // ? false
}
// * Example


// * match the entire phrase Oh no only when it has 3 to 6 letter h's.
{
    let ohStr = "Ohhh no";
    let ohRegex = /Oh{3,6}\sno/;
    let result = ohRegex.test(ohStr);
    console.log(result)
}








// ! Specify Only the Lower Number of Matches

// * To only specify the lower number of patterns, keep the first number followed by a comma.

// * For example, to match only the string hah with the letter a appearing at least 3 times, your regex would be /ha{3,}h/.

{
    let A4 = "haaaah";
    let A2 = "haah";
    let A100 = "h" + "a".repeat(100) + "h";
    let multipleA = /ha{3,}h/;
    multipleA.test(A4); // ? true
    multipleA.test(A2); // ? false
    multipleA.test(A100); // ? true
}

// * Example

{
    let haStr = "Hazzzzah";
    let haRegex = /Haz{4,}ah/; // * 4 or more letter z's
    let result = haRegex.test(haStr);
}









// ! Specify Exact Number of Matches

// * To specify a certain number of patterns, just have that one number between the curly brackets.

{
    let A4 = "haaaah";
    let A3 = "haaah";
    let A100 = "h" + "a".repeat(100) + "h";
    let multipleHA = /ha{3}h/;
    multipleHA.test(A4); // ? false
    multipleHA.test(A3); // ? true
    multipleHA.test(A100); // ? false
}

// * Example :

{
    let timStr = "Timmmmber";
    let timRegex = /Tim{4}ber/; // Change this line
    let result = timRegex.test(timStr);
}






// ! Check for All or None : ?

// * You can specify the possible existence of an element with a question mark, ?. This checks for zero or one of the preceding element.
// * You can think of this symbol as saying the previous element is optional.

{
    let american = "color";
    let british = "colour";
    let rainbowRegex = /colou?r/;
    rainbowRegex.test(american); // ? true
    rainbowRegex.test(british); // ? true
}

// * Example

{
    let favWord = "favorite";
    let favRegex = /favou?rite/;
    let result = favRegex.test(favWord);// ? true
}






// ! Positive and Negative Lookahead

/*

    ! Lookaheads are patterns that tell JavaScript to look-ahead in your string to check for patterns further along.
    ! This can be useful when you want to search for multiple patterns over the same string.

    ? There are two kinds of lookaheads: positive lookahead and negative lookahead.

    * A positive lookahead will look to make sure the element in the search pattern is there, but won't actually match it.
    * A positive lookahead is used as (?=...) where the ... is the required part that is not matched.

    * On the other hand, a negative lookahead will look to make sure the element in the search pattern is not there.
    *A negative lookahead is used as (?!...) where the ... is the pattern that you do not want to be there.
    *The rest of the pattern is returned if the negative lookahead part is not present.

*/

//* Example

{
    let sampleWord = "abc123";
    let pwRegex = /^(?=\w{6,})(?=.*\d{2})/g; // Change this line
    let result = pwRegex.test(sampleWord);
    console.log(result)
}

// ^: Asserts the start of the string.
// (?=\w{6,}): Checks that the password contains at least 6 word characters.
// (?=.*\d{2}): Checks that the password contains at least two consecutive digits anywhere within the string.
// The combination of ^ and (?=...) ensures that both conditions are met.






// ! Check For Mixed Grouping of Characters

// * If you want to find either Penguin or Pumpkin in a string, you can use the following Regular Expression: /P(engu|umpk)in/g

{
    let testStr = "Pumpkin";
    let testRegex = /P(engu|umpk)in/; // ? true
    testRegex.test(testStr);
}

// * Good Example

// ? Fix the regex so that it checks for the names of Franklin Roosevelt or Eleanor Roosevelt in a case sensitive manner
// ?  and it should make concessions for middle names.

{
    let myString = "Franklin D. Roosevelt";
    let myRegex = /^(Franklin|Eleanor)\s(([A-Z]\.?|[A-Z][a-z]+)\s)?Roosevelt$/;
    let result = myRegex.test(myString);
    console.log(result)
}








// ! Reuse Patterns Using Capture Groups

/*

Say you want to match a word that occurs multiple times like below.

let repeatStr = "row row row your boat";

You could use /row row row/, but what if you don't know the specific word repeated?
Capture groups can be used to find repeated substrings.

Capture groups are constructed by enclosing the regex pattern to be captured in parentheses.
In this case, the goal is to capture a word consisting of alphanumeric characters so the capture group will be \w+ enclosed by parentheses: /(\w+)/.

The substring matched by the group is saved to a temporary "variable",
which can be accessed within the same regex using a backslash and the number of the capture group (e.g. \1).
Capture groups are automatically numbered by the position of their opening parentheses (left to right), starting at 1.

*/

{
    let repeatStr = "row row row your boat";
    let repeatRegex = /(\w+) \1 \1/;
    repeatRegex.test(repeatStr); // Returns true
    repeatStr.match(repeatRegex); // Returns ["row row row", "row"]
}

// * good Example

{
    let repeatNum = "42 42 42";
    let reRegex = /^(\d+) \1 \1$/; // * exactly 3
    let result = reRegex.test(repeatNum);
    console.log(result)

    let result2 = repeatNum.match(reRegex);
    console.log(result2)
}








// ! Use Capture Groups to Search and Replace

/*

You can search and replace text in a string using .replace() on a string. The inputs for .replace()
is first the regex pattern you want to search for. The second parameter is the string to replace the match or a function to do something.

let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");

The replace call would return the string The sky is blue..

You can also access capture groups in the replacement string with dollar signs ($).

"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');

The replace call would return the string Camp Code.

*/


// * Example

{
    let str = "one two three";
    let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
    let replaceText = '$3 $2 $1'; // Change this line
    let result = str.replace(fixRegex, replaceText);
    console.log(result)
}

// * Example 2

{
    const txt = "badr eldr"
    console.log(txt)

    const reg = "eldr"
    const newTxt = txt.replace(reg, "eladraoui")
    console.log(newTxt)

    const reg2 = /(\w+)\s(\w+)/
    const swipe = '$2 $1'
    const newTxt2 = txt.replace(reg2, swipe)
    console.log(newTxt2)
}








// ! Remove Whitespace from Start and End

// * Method 1:

{
    let hello = "   Hello, World!  ";
    let wsRegex = /\s+(\w+)(\W)\s(\w+)(\W)\s+/; // Change this line
    const filtering = '$1$2 $3$4'
    let result = hello.replace(wsRegex, filtering); // Change this line
    console.log(result)
}

// * Better method

{
    let hello = "   Hello, World!  ";
    let wsRegex = /^\s+|\s+$/g
    let result = hello.replace(wsRegex, ""); // Change this line
    console.log(result)
}



