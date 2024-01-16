// ! Understand the Hazards of Using Imperative Code

// * Examine the code in the editor. It's using a method that has side effects in the program, causing incorrect behaviour.
// *  The final list of open tabs, stored in finalTabs.tabs, should be ['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab',
// *  'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab'] but the list produced by the code is
// *  slightly different.

{// tabs is an array of titles of each site open within the window
    const Window = function (tabs) {
        this.tabs = tabs; // We keep a record of the array inside the object
    };

    // When you join two windows into one window
    Window.prototype.join = function (otherWindow) {
        this.tabs = this.tabs.concat(otherWindow.tabs);
        return this;
    };

    // When you open a new tab at the end
    Window.prototype.tabOpen = function (tab) {
        this.tabs.push('new tab'); // Let's open a new tab for now
        return this;
    };

    // When you close a tab
    Window.prototype.tabClose = function (index) {

        // Only change code below this line

        const tabsBeforeIndex = this.tabs.slice(0, index); // Get the tabs before the tab // we switched splice with slice to prevent the loss of data from the original array
        const tabsAfterIndex = this.tabs.slice(index + 1); // Get the tabs after the tab // we switched splice with slice to prevent the loss of data from the original array

        this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together

        // Only change code above this line

        return this;
    };

    // Let's create three browser windows
    const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
    const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
    const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites

    // Now perform the tab opening, closing, and other operations
    const finalTabs = socialWindow
        .tabOpen() // Open a new tab for cat memes
        .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
        .join(workWindow.tabClose(1).tabOpen());
    console.log(finalTabs.tabs);
}









// ! Avoid Mutations and Side Effects Using Functional Programming

// * If you haven't already figured it out, the issue in the previous challenge was with the splice call in the tabClose() function.
// * Unfortunately, splice changes the original array it is called on,
// * so the second call to it used a modified array, and gave unexpected results

// * Recall that in functional programming, changing or altering things is called mutation, and the outcome is called a side effect.
// * A function, ideally, should be a pure function, meaning that it does not cause any side effects

// The global variable
let fixedValue = 4;

function incrementer() {
    // Only change code below this line
    return fixedValue + 1
    // Only change code above this line
}

console.log(incrementer())
console.log(fixedValue)









// ! Pass Arguments to Avoid External Dependence in a Function

// * Another principle of functional programming is to always declare your dependencies explicitly.
// *  This means if a function depends on a variable or object being present, then pass that variable
// *  or object directly into the function as an argument

// * the function would always produce the same output for the same set of inputs, no matter what part of the code executes it.

{
    // The global variable
    let fixedValue = 4;

    // Only change code below this line
    function incrementer(value) {
        return value + 1
        // Only change code above this line
    }
    console.log(incrementer(fixedValue))
    console.log(fixedValue)
}











// ! Refactor Global Variables Out of Functions

// So far, we have seen two distinct principles for functional programming:

//     Don't alter a variable or object - create new variables and objects and return them if need be from a function.
//     Hint: using something like const newArr = arrVar, where arrVar is an array will simply create a reference to the existing variable
//     and not a copy. So changing a value in newArr would change the value in arrVar.

//     Declare function parameters - any computation inside a function depends only on the arguments passed to the function,
//     and not on any global object or variable.

// Adding one to a number is not very exciting, but we can apply these principles when working with arrays or more complex objects.


// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];


{
    function add(bookList, bookName) {
        return [...bookList, bookName]
    }


    function remove(bookList, bookName) {
        const book_index = bookList.indexOf(bookName);
        if (book_index >= 0) {
            return bookList.slice(0, book_index).concat(bookList.slice(book_index + 1));
            return [...bookList.slice(0, book_index), ...bookList.slice(book_index + 1)] // ?  we can do this too
        }
    }

    console.log("original bookList at first : ", bookList)

    console.log("Adding KITAB : ", add(bookList, 'KITAB'))
    console.log("original bookList after adding : ", bookList)

    console.log("removing The Hound of the Baskervilles : ", remove(bookList, 'The Hound of the Baskervilles'))
    console.log("original bookList after removing : ", bookList)

    console.log("remove add : ", remove(add(bookList, "A Brief History of Time"), "On The Electrodynamics of Moving Bodies"))
    console.log("original bookList after remove add : ", bookList)
}








// ! Use the map Method to Extract Data from an Array : .map()

// * This is only the beginning.As its name suggests, functional programming is centered around a theory of functions.

// * It would make sense to be able to pass them as arguments to other functions, and return a function from another function.
// * Functions are considered first class objects in JavaScript, which means they can be used like any other object
// * They can be saved in variables, stored in an object, or passed as function arguments.

// * Let's start with some simple array functions, which are methods on the array object prototype.
// * In this exercise we are looking at Array.prototype.map(), or more simply map.

// * The map method iterates over each item in an array and returns a new array containing the results of calling the callback function on each element.
// * It does this without mutating the original array.

// ? When the callback is used, it is passed three arguments. The first argument is the current element being processed.
// ? The second is the index of that element and the third is the array upon which the map method was called.

{
    const users = [
        { name: 'John', age: 34 },
        { name: 'Amy', age: 20 },
        { name: 'camperCat', age: 10 }
    ];

    const names = users.map(user => user.name);
    console.log(names); // ? [ 'John', 'Amy', 'camperCat' ]
}



{// The global variable
    const watchList = [
        {
            "Title": "Inception",
            "Year": "2010",
            "Rated": "PG-13",
            "Released": "16 Jul 2010",
            "Runtime": "148 min",
            "Genre": "Action, Adventure, Crime",
            "Director": "Christopher Nolan",
            "Writer": "Christopher Nolan",
            "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
            "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
            "Language": "English, Japanese, French",
            "Country": "USA, UK",
            "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
            "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
            "Metascore": "74",
            "imdbRating": "8.8",
            "imdbVotes": "1,446,708",
            "imdbID": "tt1375666",
            "Type": "movie",
            "Response": "True"
        },
        {
            "Title": "Interstellar",
            "Year": "2014",
            "Rated": "PG-13",
            "Released": "07 Nov 2014",
            "Runtime": "169 min",
            "Genre": "Adventure, Drama, Sci-Fi",
            "Director": "Christopher Nolan",
            "Writer": "Jonathan Nolan, Christopher Nolan",
            "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
            "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
            "Language": "English",
            "Country": "USA, UK",
            "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
            "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
            "Metascore": "74",
            "imdbRating": "8.6",
            "imdbVotes": "910,366",
            "imdbID": "tt0816692",
            "Type": "movie",
            "Response": "True"
        },
        {
            "Title": "The Dark Knight",
            "Year": "2008",
            "Rated": "PG-13",
            "Released": "18 Jul 2008",
            "Runtime": "152 min",
            "Genre": "Action, Adventure, Crime",
            "Director": "Christopher Nolan",
            "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
            "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
            "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
            "Language": "English, Mandarin",
            "Country": "USA, UK",
            "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
            "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
            "Metascore": "82",
            "imdbRating": "9.0",
            "imdbVotes": "1,652,832",
            "imdbID": "tt0468569",
            "Type": "movie",
            "Response": "True"
        },
        {
            "Title": "Batman Begins",
            "Year": "2005",
            "Rated": "PG-13",
            "Released": "15 Jun 2005",
            "Runtime": "140 min",
            "Genre": "Action, Adventure",
            "Director": "Christopher Nolan",
            "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
            "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
            "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
            "Language": "English, Urdu, Mandarin",
            "Country": "USA, UK",
            "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
            "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
            "Metascore": "70",
            "imdbRating": "8.3",
            "imdbVotes": "972,584",
            "imdbID": "tt0372784",
            "Type": "movie",
            "Response": "True"
        },
        {
            "Title": "Avatar",
            "Year": "2009",
            "Rated": "PG-13",
            "Released": "18 Dec 2009",
            "Runtime": "162 min",
            "Genre": "Action, Adventure, Fantasy",
            "Director": "James Cameron",
            "Writer": "James Cameron",
            "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
            "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
            "Language": "English, Spanish",
            "Country": "USA, UK",
            "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
            "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
            "Metascore": "83",
            "imdbRating": "7.9",
            "imdbVotes": "876,575",
            "imdbID": "tt0499549",
            "Type": "movie",
            "Response": "True"
        }
    ];

    // Only change code below this line

    // const ratings = [];
    // for (let i = 0; i < watchList.length; i++) {
    //   ratings.push({title: watchList[i]["Title"], rating: watchList[i]["imdbRating"]});
    // }

    const ratings = watchList.map(item => {
        return {
            title: item.Title,
            rating: item.imdbRating,
        }
    })

    // Only change code above this line

    console.log(JSON.stringify(ratings));
}



// The for...in loop in JavaScript is used for iterating over the enumerable properties of an object. It is not specifically designed for iterating over the elements of an array, although it can be used for that purpose. Here's the basic syntax of the for...in loop:

{
    for (variable in object) {
        // code to be executed
    }
}

// variable: A variable that will be assigned the property name (or index in the case of an array) on each iteration.
// object: The object (or array) whose enumerable properties you want to iterate over.


// ! Implement map on a Prototype

// * Method 1 : for loop
{
    Array.prototype.myMap = function (callback) {
        const newArray = [];
        // Only change code below this line
        for (let i = 0; i < this.length; i++) {
            newArray.push(callback(this[i], i, this))
        };
        return newArray
    }

    const result = [23, 65, 98, 5, 13].myMap(item => item * 2)
    console.log(result)
    // [46, 130, 196, 10, 26]
}

// * Method 2 : forEach loop the callback function can take up to three parameters currentValue , index (optional) , array (optional)
{
    Array.prototype.myMap = function (callback) {
        const newArray = [];
        // Only change code below this line
        this.forEach((element, index, originalArr) =>
            newArray.push(callback(element, index, originalArr))
        );
        return newArray
    }
    const result = [23, 65, 98, 5, 13].myMap(item => item * 2)
    console.log(result)
    // [46, 130, 196, 10, 26]
}







// ! Use the filter Method to Extract Data from an Array : .filter()

// * Another useful array function is Array.prototype.filter(), or simply filter().

// * filter calls a function on each element of an array and returns a new array containing only the elements for which that function
// * returns a truthy value - that is, a value which returns true if passed to the Boolean() constructor. In other words, it filters
// * the array, based on the function passed to it. Like map, it does this without needing to modify the original array.

// * The callback function accepts three arguments. The first argument is the current element being processed.
// * The second is the index of that element and the third is the array upon which the filter method was called.

{
    const users = [
        { name: 'John', age: 34 },
        { name: 'Amy', age: 20 },
        { name: 'camperCat', age: 10 }
    ];

    const usersUnder30 = users.filter(user => user.age < 30);
    console.log(usersUnder30); // ? [ { name: 'Amy', age: 20 }, { name: 'camperCat', age: 10 } ]
}


{// The global variable
    const watchList = [
        {
            "Title": "Inception",
            "Year": "2010",
            "Rated": "PG-13",
            "Released": "16 Jul 2010",
            "Runtime": "148 min",
            "Genre": "Action, Adventure, Crime",
            "Director": "Christopher Nolan",
            "Writer": "Christopher Nolan",
            "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
            "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
            "Language": "English, Japanese, French",
            "Country": "USA, UK",
            "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
            "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
            "Metascore": "74",
            "imdbRating": "8.8",
            "imdbVotes": "1,446,708",
            "imdbID": "tt1375666",
            "Type": "movie",
            "Response": "True"
        },
        {
            "Title": "Interstellar",
            "Year": "2014",
            "Rated": "PG-13",
            "Released": "07 Nov 2014",
            "Runtime": "169 min",
            "Genre": "Adventure, Drama, Sci-Fi",
            "Director": "Christopher Nolan",
            "Writer": "Jonathan Nolan, Christopher Nolan",
            "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
            "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
            "Language": "English",
            "Country": "USA, UK",
            "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
            "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
            "Metascore": "74",
            "imdbRating": "8.6",
            "imdbVotes": "910,366",
            "imdbID": "tt0816692",
            "Type": "movie",
            "Response": "True"
        },
        {
            "Title": "The Dark Knight",
            "Year": "2008",
            "Rated": "PG-13",
            "Released": "18 Jul 2008",
            "Runtime": "152 min",
            "Genre": "Action, Adventure, Crime",
            "Director": "Christopher Nolan",
            "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
            "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
            "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
            "Language": "English, Mandarin",
            "Country": "USA, UK",
            "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
            "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
            "Metascore": "82",
            "imdbRating": "9.0",
            "imdbVotes": "1,652,832",
            "imdbID": "tt0468569",
            "Type": "movie",
            "Response": "True"
        },
        {
            "Title": "Batman Begins",
            "Year": "2005",
            "Rated": "PG-13",
            "Released": "15 Jun 2005",
            "Runtime": "140 min",
            "Genre": "Action, Adventure",
            "Director": "Christopher Nolan",
            "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
            "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
            "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
            "Language": "English, Urdu, Mandarin",
            "Country": "USA, UK",
            "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
            "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
            "Metascore": "70",
            "imdbRating": "8.3",
            "imdbVotes": "972,584",
            "imdbID": "tt0372784",
            "Type": "movie",
            "Response": "True"
        },
        {
            "Title": "Avatar",
            "Year": "2009",
            "Rated": "PG-13",
            "Released": "18 Dec 2009",
            "Runtime": "162 min",
            "Genre": "Action, Adventure, Fantasy",
            "Director": "James Cameron",
            "Writer": "James Cameron",
            "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
            "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
            "Language": "English, Spanish",
            "Country": "USA, UK",
            "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
            "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
            "Metascore": "83",
            "imdbRating": "7.9",
            "imdbVotes": "876,575",
            "imdbID": "tt0499549",
            "Type": "movie",
            "Response": "True"
        }
    ];

    // Only change code below this line

    const filteredList = watchList.filter(({ imdbRating }) => parseFloat(imdbRating) > 8.0).map(item => { // we used destructuring here
        return {
            title: item.Title,
            rating: item.imdbRating,
        }
    })

    // * same thing :

    // const filteredList = watchList.filter(item => item.imdbRating > 8.0).map(item => { 
    //     return {
    //       title: item.Title,
    //       rating: item.imdbRating,
    //     }
    //   })

    // Only change code above this line

    console.log(filteredList);
}







// ! Implement the filter Method on a Prototype

{
    Array.prototype.myFilter = function (callback) {
        const newArray = [];
        // Only change code below this line
        for (let i = 0; i < this.length; i++) {
            if (callback(this[i], i, this)) newArray.push(this[i])
        }
        // Only change code above this line
        return newArray;
    };

    const arr = [23, 65, 98, 5, 13]
    console.log(arr.myFilter(item => item % 2))
    const arr2 = ["naomi", "quincy", "camperbot"]
    console.log(arr2.myFilter(element => element === "naomi"))
    const a = [5, 10, 22, 31, 5, 22, 10]
    console.log(a.myFilter((e, i, a) => a.indexOf(e) === i))
}

