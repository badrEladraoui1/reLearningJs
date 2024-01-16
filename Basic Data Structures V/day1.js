// ! Use an Array to Store a Collection of Data

{
    let yourArray = ["badr", "eladr", 1, false, undefined, null];
    console.log(yourArray)
}

{
    let complexArray = [
        [
            {
                one: 1,
                two: 2
            },
            {
                three: 3,
                four: 4
            }
        ],
        [
            {
                a: "a",
                b: "b"
            },
            {
                c: "c",
                d: "d"
            }
        ]
    ];

    console.log(complexArray)
}






// ! Access an Array's Contents Using Bracket Notation

let ourVariable = ourArray[0];

// * Now ourVariable has the value of a.
// * In addition to accessing the value associated with an index, you can also set an index to a value using the same notation:

ourArray[1] = "not b anymore";

// * Using bracket notation, we have now reset the item at index 1 from the string b, to not b anymore.
// * Now ourArray is ["a", "not b anymore", "c"].

// * Example

{
    let myArray = ["a", "b", "c", "d"];
    // Only change code below this line
    myArray[1] = "bb"
    // Only change code above this line
    console.log(myArray);
}







// ! Add Items to an Array with push() and unshift()

// * Array.push() // adds to the end
// and
// * Array.unshift() // adds to the beginning

// * Both methods take one or more elements as parameters


{
    let twentyThree = 'XXIII';
    let romanNumerals = ['XXI', 'XXII'];

    romanNumerals.unshift('XIX', 'XX');
    console.log(romanNumerals)

    romanNumerals.push(twentyThree);
    console.log(romanNumerals)
}

// * Example

{
    function mixedNumbers(arr) {
        // Only change code below this line
        arr.unshift('I', 2, 'three')
        arr.push(7, 'VIII', 9)
        // Only change code above this line
        return arr;
    }

    console.log(mixedNumbers(['IV', 5, 'six']));
}





// ! Remove Items from an Array with pop() and shift()

// *  pop() removes an element from the end of an array, while shift() removes an element from the beginning.

// *  neither method takes parameters, and each only allows an array to be modified by a single element at a time.

{
    let greetings = ['whats up?', 'hello', 'see ya!'];
    console.log(greetings)
    greetings.pop();
    console.log(greetings)
    greetings.shift();
    console.log(greetings)
    let popped = greetings.pop();
    console.log(popped + " got popped !!!")
    console.log(greetings)
}

// * Example

{
    function popShift(arr) {
        let popped = arr.pop(); // Change this line
        let shifted = arr.shift(); // Change this line
        return [shifted, popped];
    }

    console.log(popShift(['challenge', 'is', 'not', 'complete']));
}







// ! Remove Items Using splice()

// * splice() allows us to remove any number of consecutive elements from anywhere in an array.

// *  splice()'s first parameter represents the index on the array from which to begin removing elements,
// * while the second parameter indicates the number of elements to delete. For example:

// * splice() not only modifies the array it's being called on,
// * but it also returns a new array containing the value of the removed elements:

{
    let array = ['today', 'was', 'not', 'so', 'great'];
    console.log(array)
    let newArray = array.splice(0, 3); // ? removed elements in newArray
    console.log(newArray)
    console.log(array)
}

// * Here we remove 2 elements, beginning with the third element (at index 2). array would have the value ['today', 'was', 'great'].

{
    let array = ['I', 'am', 'feeling', 'really', 'happy'];
    console.log(array)
    let newArray = array.splice(3, 2);
    console.log(array)
    console.log(newArray)
}


//*We've initialized an array arr.Use splice() to remove elements from arr,so that it only contains elements that sum to the value of 10.

{
    const arr = [2, 4, 5, 1, 7, 5, 2, 1];
    // Only change code below this line
    const removedElements = arr.splice(1, 4)
    // Only change code above this line
    console.log(arr);
}






// ! Add Items Using splice()

// * Remember in the last challenge we mentioned that splice() can take up to three parameters? Well, you can use the third parameter,
// *  comprised of one or more element(s), to add to the array. This can be incredibly useful for quickly switching out an element,
// *  or a set of elements, for another.

{
    const numbers = [10, 11, 12, 12, 15];
    const startIndex = 3;
    const amountToDelete = 1;

    numbers.splice(startIndex, amountToDelete, 13, 14);
    console.log(numbers);
}

// * The second occurrence of 12 is removed, and we add 13 and 14 at the same index.
// * The numbers array would now be [ 10, 11, 12, 13, 14, 15 ].



// * We have defined a function, htmlColorNames, which takes an array of HTML colors as an argument.
// * Modify the function using splice() to remove the first two elements of the array
// * and add 'DarkSalmon' and 'BlanchedAlmond' in their respective places.
{
    function htmlColorNames(arr) {
        // Only change code below this line
        arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond')
        // Only change code above this line
        return arr;
    }

    console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
}








// ! Copy Array Items Using slice()

// * The next method we will cover is slice(). Rather than modifying an array, slice() copies or extracts a given number of elements to
// * a new array, leaving the array it is called upon untouched. slice() takes only 2 parameters — the first is the index at which to begin
// * extraction, and the second is the index at which to stop extraction (extraction will occur up to, but not including the element
// * at this index). Consider this:

{
    let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];
    console.log(weatherConditions)
    let todaysWeather = weatherConditions.slice(1, 3);
    console.log(todaysWeather)
    console.log(weatherConditions)
}

// * Example : 

{
    function forecast(arr) {
        const newArr = arr.slice(2, 4)
        return newArr;
    }
    console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
}






// ! Copy an Array with the Spread Operator

{
    const old = [1, 2, 3, 4, 5]
    console.log("old array : ", old)
    let news = old
    console.log("new arr from old array affecting normally without spreading : ", news)
    news.pop()
    console.log("new array after popping: ", news)
    console.log("old array do also change cause we didn't use the spreading so it with have the reference of the other array and change the both: ", old)
}

// ? In JavaScript, when you assign an array (or any object) to a new variable without using any cloning technique,
// ? you're not creating a new array; instead, you're creating a reference to the original array. This means both variables
// ? the original and the new one) point to the same array in memory. Any changes made to one will reflect in the other because
// ? they are essentially the same array.

{
    const old = [1, 2, 3, 4, 5]
    console.log("old array : ", old)
    let news = [...old] // ? creates a shallow copy of the old ,it creates a new array in memory with the same elements as old
    console.log("new arr from old array affecting by the spread operator : ", news)
    news.pop()
    console.log("new array after popping : ", news)
    console.log("old array doesn't change : ", old)
}

// * Example : 

{
    function copyMachine(arr, num) {
        let newArr = [];
        while (num >= 1) {
            // Only change code below this line
            newArr.push([...arr])
            // Only change code above this line
            num--;
        }
        return newArr;
    }

    console.log(copyMachine([true, false, true], 3));
}






// ! Combine Arrays with the Spread Operator

{
    let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];
    let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];
    console.log(thatArray)
}

// * Example : 

{
    function spreadOut() {
        let fragment = ['to', 'code'];
        let sentence = ["learning", ...fragment, "is", "fun"]; // Change this line
        return sentence;
    }

    console.log(spreadOut());
}






// ! Check For The Presence of an Element With indexOf() : indexOf()

// * indexOf() takes an element as a parameter, and when called, it returns the position, or index, of that element,
// *  or -1 if the element does not exist on the array.

{
    let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];
    console.log(fruits.indexOf('dates'));
    console.log(fruits.indexOf('oranges'));
    console.log(fruits.indexOf('pears'));
}



{
    function quickCheck(arr, elem) { // * checks for an element if it is there or not
        // Only change code below this line
        if (arr.indexOf(elem) !== -1) return true
        else return false
        // Only change code above this line
    }
    console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
}









