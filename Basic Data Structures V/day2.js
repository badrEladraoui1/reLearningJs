// ! Iterate Through All an Array's Items Using For Loops

// * JavaScript offers several built in methods that each iterate over arrays in slightly different ways to achieve different results
// ?  (such as every(), forEach(), map(), etc.),
// * however the technique which is most flexible and offers us the greatest amount of control is a simple for loop.

{
    function greaterThanTen(arr) {
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > 10) {
                newArr.push(arr[i]);
            }
        }
        return newArr;
    }

    greaterThanTen([2, 12, 8, 14, 80, 0, 1]);
}

// * GOOD EXAMPLE 

{
    function filteredArray(arr, elem) {
        let newArr = [];
        // Only change code below this line
        for (let i = 0; i < arr.length; i++) {
            let isElem = false;
            for (let j = 0; j < arr[i].length; j++) {
                if (arr[i][j] === elem) {
                    console.log(arr[i][j])
                    isElem = true
                    break
                }
            }
            if (!isElem) newArr.push(arr[i])
        }
        // Only change code above this line
        return newArr;
    }

    console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18));
}






// ! Create complex multi-dimensional arrays

{
    let nestedArray = [
        ['deep'],
        [
            ['deeper'], ['deeper']
        ],
        [
            [
                ['deepest'], ['deepest']
            ],
            [
                [
                    ['deepest-est?', 'hi']
                ]
            ]
        ]
    ];

    console.log(nestedArray[2][1][0][0][0]);

    nestedArray[2][1][0][0][0] = 'deeper still';
    console.log(nestedArray[2][1][0][0][0]);

}
// * The deep array is nested 2 levels deep. The deeper arrays are 3 levels deep. The deepest arrays are 4 levels, and the deepest-est? is 5.

{
    let myNestedArray = [
        // change code below this line
        ["unshift", false, 1, 2, 3, "complex", "nested"],
        ["loop", "shift", 6, 7, 1000, "method"],
        ["concat", false, true, "spread", "array", ["deep"]],
        ["mutate", 1327.98, "splice", "slice", "push", [["deeper"]]],
        ["iterate", 1.3849, 7, "8.4876", "arbitrary", "depth", [[["deepest"]]]]
        // change code above this line
    ];

    console.log(myNestedArray)
}







// ! Add Key-Value Pairs to JavaScript Objects

// * At their most basic, objects are just collections of key-value pairs. In other words,
// *  they are pieces of data (values) mapped to unique identifiers called properties (keys). Take a look at an example:

{
    const tekkenCharacter = {
        player: 'Hwoarang',
        fightingStyle: 'Tae Kwon Doe',
        human: true
    };
    console.log(tekkenCharacter)

    tekkenCharacter.origin = 'South Korea';
    console.log(tekkenCharacter)

    tekkenCharacter['hair color'] = 'dyed orange';
    console.log(tekkenCharacter)

    const eyes = 'eye color';
    tekkenCharacter[eyes] = 'brown';
    console.log(tekkenCharacter)
}


// * Example :

{
    const foods = {
        apples: 25,
        oranges: 32,
        plums: 28
    };

    // Only change code below this line
    let bananas = 'bananas'
    foods[bananas] = 13
    foods['grapes'] = 35
    foods.strawberries = 27
    // Only change code above this line

    console.log(foods);
}






// ! Modify an Object Nested Within an Object

{
    let nestedObject = {
        id: 28802695164,
        date: 'December 31, 2016',
        data: {
            totalUsers: 99,
            online: 80,
            onlineStatus: {
                active: 67,
                away: 13,
                busy: 8
            }
        }
    };

    nestedObject.data.onlineStatus.busy = 10;
}

// * Example 

{
    let userActivity = {
        id: 23894201352,
        date: 'January 1, 2017',
        data: {
            totalUsers: 51,
            online: 42
        }
    };

    // Only change code below this line
    userActivity.data.online = 45
    // Only change code above this line

    console.log(userActivity);
}









// ! Access Property Names with Bracket Notation

let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};
// Only change code below this line
const checkInventory = scannedItem => foods[scannedItem]
// Only change code above this line
console.log(checkInventory("apples"));










// ! Use the delete Keyword to Remove Object Properties : delete keyWord

{
    delete foods.apples;
}

{
    let foods = {
        apples: 25,
        oranges: 32,
        plums: 28,
        bananas: 13,
        grapes: 35,
        strawberries: 27
    };


    // Only change code below this line
    const deleteFood = food => delete foods[food]

    deleteFood('oranges')
    deleteFood('plums')
    deleteFood('strawberries')

    // Only change code above this line

    console.log(foods);
}








// ! Check if an Object has a Property : hasOwnProperty() || in


{

    let users = {
        Alan: {
            age: 27,
            online: true
        },
        Jeff: {
            age: 32,
            online: true
        },
        Sarah: {
            age: 48,
            online: true
        },
        Ryan: {
            age: 19,
            online: true
        }
    };

    const hasOwnKeyWord = users.hasOwnProperty('Alan');
    console.log(hasOwnKeyWord)
    const inKeyWord = 'Alan' in users;
    console.log(inKeyWord)
}

// * Example

{
    let users = {
        Alan: {
            age: 27,
            online: true
        },
        Jeff: {
            age: 32,
            online: true
        },
        Sarah: {
            age: 48,
            online: true
        },
        Ryan: {
            age: 19,
            online: true
        }
    };

    function isEveryoneHere(userObj) {
        // Only change code below this line
        // Use this method :
        if ('Alan' in userObj && 'Jeff' in userObj && 'Sarah' in userObj && 'Ryan' in userObj) return true;
        return false;
        // Or this one :
        if (userObj.hasOwnProperty('Alan') && userObj.hasOwnProperty('Jeff') && userObj.hasOwnProperty('Sarah') && userObj.hasOwnProperty('Ryan')) return true;
        return false;
        // Only change code above this line
    }

    console.log(isEveryoneHere(users));
}











// ! Iterate Through the Keys of an Object with a for...in Statement :  for...in loop

// * NOTE: Objects do not maintain an ordering to stored keys like arrays do;
// * thus a key's position on an object, or the relative order in which it appears, is irrelevant when referencing or accessing that key.

{
    const users = {
        Alan: {
            online: false
        },
        Jeff: {
            online: true
        },
        Sarah: {
            online: false
        }
    }

    function countOnline(allUsers) {
        // Only change code below this line
        let onlineCounter = 0
        for (const user in allUsers) {
            if (allUsers[user].online === true) onlineCounter++
            else { ; }
        }
        return onlineCounter
        // Only change code above this line
    }

    console.log(countOnline(users));
}






// ! Generate an Array of All Object Keys with Object.keys() : Object.keys(obj)

{
    let users = {
        Alan: {
            age: 27,
            online: false
        },
        Jeff: {
            age: 32,
            online: true
        },
        Sarah: {
            age: 48,
            online: false
        },
        Ryan: {
            age: 19,
            online: true
        }
    };

    function getArrayOfUsers(obj) {
        // Only change code below this line
        return Object.keys(obj) // ? [ 'Alan', 'Jeff', 'Sarah', 'Ryan' ]
        // Only change code above this line
    }

    console.log(getArrayOfUsers(users));
}









// ! Modify an Array Stored in an Object

{
    let user = {
        name: 'Kenneth',
        age: 28,
        data: {
            username: 'kennethCodesAllDay',
            joinDate: 'March 26, 2016',
            organization: 'freeCodeCamp',
            friends: [
                'Sam',
                'Kira',
                'Tomo'
            ],
            location: {
                city: 'San Francisco',
                state: 'CA',
                country: 'USA'
            }
        }
    };

    function addFriend(userObj, friend) {
        // Only change code below this line
        userObj.data.friends.push(friend)
        return userObj.data.friends
        // Only change code above this line
    }

    // * Better practice

    // function addFriend(userObj, friend) {
    //     if(userObj.data && Array.isArray(userObj.data.friends))
    //     userObj.data.friends.push(friend)
    //     return userObj
    // }


    console.log(addFriend(user, 'Pete'));
}

