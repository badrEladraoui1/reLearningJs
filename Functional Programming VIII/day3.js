// ! Return Part of an Array Using the slice Method

// * The slice method returns a copy of certain elements of an array. It can take two arguments, the first gives the index of where to begin the slice, the second is the index for where to end the slice (and it's non-inclusive). If the arguments are not provided, the default is to start at the beginning of the array through the end, which is an easy way to make a copy of the entire array. The slice method does not mutate the original array, but returns a new one.

const arr = ["Cat", "Dog", "Tiger", "Zebra"];
const newArray = arr.slice(1, 3);
// ? const arr = ["Cat", "Dog", "Tiger", "Zebra"];

{
    function sliceArray(anim, beginSlice, endSlice) {
        // Only change code below this line
        const sliced = anim.slice(beginSlice, endSlice)
        return sliced
        // Only change code above this line
    }

    const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
    console.log(sliceArray(inputAnim, 1, 3))
}










// ! Remove Elements from an Array Using slice Instead of splice

// * A common pattern while working with arrays is when you want to remove items and keep the rest of the array. JavaScript offers the splice method for this, which takes arguments for the index of where to start removing items, then the number of items to remove. If the second argument is not provided, the default is to remove items through the end. However, the splice method mutates the original array it is called on. Here's an example
const cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
cities.splice(3, 1);
// ? Here splice returns the string London and deletes it from the cities array. cities will have the value ["Chicago", "Delhi", "Islamabad", "Berlin"].

// As we saw in the last challenge, the slice method does not mutate the original array, but returns a new one which can be saved into a variable. Recall that the slice method takes two arguments for the indices to begin and end the slice (the end is non-inclusive), and returns those items in a new array. Using the slice method instead of splice helps to avoid any array-mutating side effects.

{
    function nonMutatingSplice(cities) {
        const firstThree = cities.slice(0, 3)
        return firstThree
    }

    const cities = ["New York", "Los Angeles", "London", "Tokyo", "Paris", "Sydney", "Berlin", "Rio de Janeiro", "Mumbai", "Dubai"];


    console.log(nonMutatingSplice(cities))
    console.log(cities)
}






// ! Combine Two Arrays Using the concat Method

// Concatenation means to join items end to end. JavaScript offers the concat method for both strings and arrays that work in the same way. For arrays, the method is called on one, then another array is provided as the argument to concat, which is added to the end of the first array. It returns a new array and does not mutate either of the original arrays. Here's an example:

[1, 2, 3].concat([4, 5, 6]);

// ? The returned array would be [1, 2, 3, 4, 5, 6].

// The concat method in JavaScript creates a new array by combining the elements of the original array and the array provided as an argument. It does not modify the original arrays. Therefore, the originalArray and attachArray remain unchanged after calling nonMutatingConcat. This behavior aligns with the non-mutating requirement.

{
    function nonMutatingConcat(original, attach) {
        // Only change code below this line

        return original.concat(attach)

        // Only change code above this line
    }

    const first = [1, 2, 3];
    const second = [4, 5];
    console.log(nonMutatingConcat(first, second))
    console.log(first)
    console.log(second)
}









// ! Add Elements to the End of an Array Using concat Instead of push

// Functional programming is all about creating and using non-mutating functions.

// The last challenge introduced the concat method as a way to merge arrays into a new array without mutating the original arrays.Compare concat to the push method.push adds items to the end of the same array it is called on, which mutates that array.Here's an example:
{
    const arr = [1, 2, 3];
    arr.push(4, 5, 6);
}

// ? arr would have a modified value of [1, 2, 3, 4, 5, 6], which is not the functional programming way.

{
    function nonMutatingPush(original, newItem) {
        // Only change code below this line
        // return original.push(newItem);
        return original.concat(newItem)

        // Only change code above this line
    }

    const first = [1, 2, 3];
    const second = [4, 5];
    console.log(nonMutatingPush(first, second))
    console.log(first)
    console.log(second)
}








// ! Use the reduce Method to Analyze Data

// Array.prototype.reduce(), or simply reduce(), is the most general of all array operations in JavaScript. You can solve almost any array processing problem using the reduce method.
//The reduce method allows for more general forms of array processing, and it's possible to show that both filter and map can be derived as special applications of reduce. The reduce method iterates over each item in an array and returns a single value (i.e. string, number, object, array). This is achieved via a callback function that is called on each iteration.
//The callback function accepts four arguments. The first argument is known as the accumulator, which gets assigned the return value of the callback function from the previous iteration, the second is the current element being processed, the third is the index of that element and the fourth is the array upon which reduce is called.
//In addition to the callback function, reduce has an additional parameter which takes an initial value for the accumulator. If this second parameter is not used, then the first iteration is skipped and the second iteration gets passed the first element of the array as the accumulator.
//See below for an example using reduce on the users array to return the sum of all the users' ages. For simplicity, the example only uses the first and second arguments.

{
    const users = [
        { name: 'John', age: 34 },
        { name: 'Amy', age: 20 },
        { name: 'camperCat', age: 10 }
    ];

    const sumOfAges = users.reduce((sum, user) => sum + user.age, 0);
    console.log(sumOfAges);

    // ? The console would display the value 64.
}

{
    const users = [
        { name: 'John', age: 34 },
        { name: 'Amy', age: 20 },
        { name: 'camperCat', age: 10 }
    ];

    const usersObj = users.reduce((obj, user) => {
        obj[user.name] = user.age;
        return obj;
    }, {});
    console.log(usersObj);

    // ? The console would display the value { John: 34, Amy: 20, camperCat: 10 }.
}


{// The global variable // * not finished yet
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

    function getRating(watchList) {
        // Only change code below this line
        let averageRating;
        averageRating = watchList.filter(item => item.Director === "Christopher Nolan")
            .map(item => parseFloat(item.imdbRating))
            .reduce((acc, item) => {
                let sum = acc + item

            }, 0)

        // Only change code above this line
        return averageRating;
    }

    console.log(getRating(watchList));
}


