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
    let newArray = array.splice(2, 2); // ? removed elements in  newArray
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

