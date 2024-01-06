// ! Using the Test Method

let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);


// * Example 1

let myString = "Hello, World!";
let myRegex = /Hello/;
let result1 = myRegex.test(myString); // returns true 
console.log(result1)


// * Example 2 

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/;
let result2 = waldoRegex.test(waldoIsHiding);
console.log(result2)





// ! Match a Literal String with Different Possibilities


// * Example 1

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird/; // . You can search for multiple patterns using the alternation or OR operator: |.
let result = petRegex.test(petString);
console.log(result)







// ! Ignore Case While Matching


/*

* You can match both cases using what is called a flag. 
* There are other flags but here you'll focus on the flag that ignores case - the i flag. You can use it by appending it to the regex.
* An example of using this flag is /ignorecase/i. This regex can match the strings ignorecase, igNoreCase, and IgnoreCase.

*/


let myString3 = "freeCodeCamp";
let fccRegex = /FreeCodeCamp/i; // i => (ignores the case)
let result3 = fccRegex.test(myString3);
console.log(result3) // true





// ! Extract Matches

// * To use the .match() method, apply the method on a string and pass in the regex inside the parentheses.

"Hello, World!".match(/Hello/);
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex); // ? ["expressions"]


// * Example

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result4 = extractStr.match(codingRegex)
console.log(result4)


// * Note that the .match syntax is the "opposite" of the .test method you have been using thus far:

// ! IMPORTANT
'string'.match(/regex/);
/regex/.test('string');
// ! IMPORTANT





// ! Find More Than the First Match

// * To search or extract a pattern more than once, you can use the global search flag: g.

let testStr4 = "Repeat, Repeat, Repeat";
let repeatRegex = /Repeat/g;
testStr4.match(repeatRegex); // ? ["Repeat", "Repeat", "Repeat"]

// * You can have multiple flags on your regex like /search/gi

// * Example

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/ig;
let result5 = twinkleStar.match(starRegex)
console.log(result5) // ? [ 'Twinkle', 'twinkle' ]





// ! Match Anything with Wildcard Period

// * The wildcard character . will match any one character.

let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr); // true
huRegex.test(hugStr); // true


// * Example

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
let result6 = unRegex.test(exampleStr);
console.log(result6)






// ! Match Single Character with Multiple Possibilities


// * You can search for a literal pattern with some flexibility with character classes.
// * Character classes allow you to define a group of characters you wish to match by placing them inside square ([ and ]) brackets.

// * For example, you want to match bag, big, and bug but not bog. You can create the regex /b[aiu]g/ to do this.
// * The [aiu] is the character class that will only match the characters a, i, or u.

let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex);  // ? ["big"]
bagStr.match(bgRegex);  // ? ["bag"]
bugStr.match(bgRegex);  // ? ["bug"]
bogStr.match(bgRegex);  // ? null

// * [aiu] is the character class

// * BETTER Example

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig; // *  find all the vowels in the string quoteSample  /  both upper- and lowercase vowels.
let result7 = quoteSample.match(vowelRegex);
console.log(result7) // ? [ 'e','a','e','o','u','i','e','a','o','e','o','e','I','a','e','o','o','e','i','o','e','o','i','e','i' ]






// ! Match Letters of the Alphabet

// * Inside a character set, you can define a range of characters to match using a hyphen character: -.
// * For example, to match lowercase letters a through e you would use [a-e].

let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex2 = /[a-e]at/;
catStr.match(bgRegex2); // ? ["cat"]
batStr.match(bgRegex2); // ? ["bat"]
matStr.match(bgRegex2); // ? null


let quoteSample1 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // * Matches all the letters in the string quoteSample , both uppercase and lowercase letters.
let result8 = quoteSample1.match(alphabetRegex)
console.log(result8) // ? [ 'T','h','e','q','u','i','c','k','b','r','o','w','n','f','o','x','j','u','m','p','s','o','v','e','r','t','h','e','l','a','z','y','d','o','g' ]








// ! Match Numbers and Letters of the Alphabet

// *Using the hyphen (-) to match a range of characters is not limited to letters. It also works to match a range of numbers.
// *For example, /[0-5]/ matches any number between 0 and 5, including the 0 and 5.

let jennyStr = "Jenny8675309";
let myRegex1 = /[a-z0-9]/ig; // * matches all the letters any case , and 0 from 9  . all globally 
jennyStr.match(myRegex1); // ? [ 'J', 'e', 'n', 'n', 'y', '8', '6', '7', '5', '3', '0', '9' ]

// * Example 

let quoteSample2 = "Blueberry 3.141592653s are delicious.";
let myRegex2 = /[h-s2-6]/ig;
let result9 = quoteSample2.match(myRegex2);
console.log(result9)







// ! Match Single Characters Not Specified

// * To create a negated character set, you place a caret character (^) after the opening bracket and before the characters you do not want to match.

let quoteSample3 = "3 blind mice.";
let myRegex3 = /[^0-9aeiou]/gi; // * matches all the characters besides those in the brackets and the vowels
let result10 = quoteSample3.match(myRegex3);
console.log(result10)






// ! Match Characters that Occur One or More Times

/*

 *You can use the + character to check if that is the case. Remember, the character or pattern has to be present consecutively.
 *That is, the character has to repeat one after the other.

 * For example, /a+/g would find one match in abc and return ["a"].
 *Because of the +, it would also find a single match in aabc and return ["aa"].

 *If it were instead checking the string abab,
 *it would find two matches and return ["a", "a"] because the a characters are not in a row - there is a b between them.
 *'Finally, since there is no a in the string bcd, it wouldn't find a match.

*/

let difficultSpelling = "Mississippi";
let myRegex4 = /s+/ig;
let result11 = difficultSpelling.match(myRegex4);
console.log(result11) // ? [ 'ss', 'ss' ]







// ! Match Characters that Occur Zero or More Times

// * The character to do this is the asterisk or star: *.

let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/; // * this means the word should start with the letter g and the letter o can occur zero or many times
soccerWord.match(goRegex);
gPhrase.match(goRegex);
oPhrase.match(goRegex);

// * Example

const chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!"
// Only change code below this line
let chewieRegex = /Aa*/; // * matches only the words that start with upperCase A and zero or more occurrences of a 
// Only change code above this line
let result12 = chewieQuote.match(chewieRegex);
console.log(result12) // * Aaaaaaaaaaaaaaaa







// ! Find Characters with Lazy Matching



/*

 * You can apply the regex /t[a-z]*i/ to the string "titanic".  
 * This regex is basically a pattern that starts with t, ends with i, and has some letters in between.

*/

/*

 * Regular expressions are by default greedy, so the match would return ["titani"]
 * It finds the largest sub-string possible to fit the pattern.

*/

/*

 * However, you can use the ? character to change it to lazy matching. 
 * "titanic" matched against the adjusted regex of /t[a-z]*?i/ returns ["ti"]
 * 
 ! It stops matching as soon as it finds the minimum sequence that satisfies the pattern.

*/

/*

 * Note: Parsing HTML with regular expressions should be avoided, 
 * but pattern matching an HTML string with regular expressions is completely fine.

*/


let text = "<h1>Winter is coming</h1>";
let myRegex5 = /<..*?>/; // * .. is for the h1 and * for the rest but ? after the * made it lazy so it would display just the minimum
let result13 = text.match(myRegex5);
console.log(result13) // ? [ '<h1>',index: 0,input: '<h1>Winter is coming</h1>',groups: undefined ]








// ! Find One or More Criminals in a Hunt

/*

* Time to pause and test your new regex writing skills. A group of criminals escaped from jail and ran away,
* but you don't know how many. However, you do know that they stay close together when they are around other people.
* You are responsible for finding all of the criminals at once.

*/

// let reCriminals = /C+/g; // Change this line
// const word = "CaCbCC"
// console.log(word.match(reCriminals))

const people = ["z", "zzzzzz", "ABCzzzCz", "zCzzzABC", "abczzzzzzzzzzzzzzzzzzzzzabc", "C"
]

var reCriminals = /C+/g;

const prisonCellOfCriminals = (arrOfCriminals) => {
    let criminals;
    let prison = []
    for (let i = 0; i < arrOfCriminals.length; i++) {
        criminals = arrOfCriminals[i].match(reCriminals)
        if (criminals) prison.push(criminals)
    }
    return prison
}

console.log(prisonCellOfCriminals(people))

console.log(howManyCriminals(people))








// ! Match Beginning String Patterns

/*

* In an earlier challenge, you used the caret character (^) inside a character set to create a negated character
* set in the form [^thingsThatWillNotBeMatched]. Outside of a character set, the caret is used to search for patterns
* at the beginning of strings.

*/

let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString); // ? true
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst); // ? false

// * Example

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result14 = calRegex.test(rickyAndCal);
console.log(result14)






// ! Match Ending String Patterns

// * You can search the end of strings using the dollar sign character $ at the end of the regex.
let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding); // ? true
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding); // ? false

// * Example

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result15 = lastRegex.test(caboose);

console.log(result15)






// ! Match All Letters and Numbers

let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers); // ? true
shortHand.test(numbers); // ? true
longHand.test(varNames); // ? true 
shortHand.test(varNames); // ? true

// * These shortcut character classes are also known as shorthand character classes.


// * Example

let quoteSample4 = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g;
let result16 = quoteSample4.match(alphabetRegexV2).length;
console.log(result16)

/*  

                                        ! difference between /\w/g and /\w+/g

! /\w/g:
This regex matches individual word characters (alphanumeric characters and underscores _) separately.
The \w matches a single word character.
The g flag indicates a global search, finding all matches in the string.
When you use .match(/\w/g) on the string "The five boxing wizards jump quickly.", it will return an array containing all individual word characters found: ["T", "h", "e", "f", "i", "v", "e", "b", "o", "x", "i", "n", "g", "w", "i", "z", "a", "r", "d", "s", "j", "u", "m", "p", "q", "u", "i", "c", "k", "l", "y"].
Calling .length on this array will return the count of individual word characters, which is 31.

! /\w+/g:
This regex matches sequences of word characters (alphanumeric characters and underscores _) that occur together.
The \w+ matches one or more consecutive word characters.
The g flag again signifies a global search to find all matches in the string.
When using .match(/\w+/g) on the string "The five boxing wizards jump quickly.", it returns an array containing all sequences of word characters: ["The", "five", "boxing", "wizards", "jump", "quickly"].
Calling .length on this array returns the count of matched sequences, which is 6.

*/



