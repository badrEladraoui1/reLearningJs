// ! Find the Longest Word in a String

// * my solutions

// ? returning the longest word
{
    function findLongestWordLength(str) {
        const strArr = str.split(' ')
        console.log(strArr)
        let longestInLength = strArr[0]
        for (let i = 1; i < strArr.length; i++) {
            console.log(strArr[i])
            if (strArr[i].length > longestInLength.length) {
                longestInLength = strArr[i]
            } else { ; }
        }
        console.log("the longest is : ", longestInLength)
        return longestInLength
    }

    findLongestWordLength("The quick brown fox jumped over the lazy dog");
}

// ? return the longest length

{
    function findLongestWordLength(str) {
        const strArr = str.split(' ')
        console.log(strArr)
        let longestLength = strArr[0].length
        for (let i = 1; i < strArr.length; i++) {
            console.log(strArr[i])
            if (strArr[i].length > longestLength) {
                longestLength = strArr[i].length
            } else { ; }
        }
        console.log("the longest length is : ", longestLength)
        return longestLength
    }

    findLongestWordLength("What if we try a super-long word such as otorhinolaryngology")
}


// * phind's solution (not really getting it) :

{
    function findLongestWordLength(str) {
        return str.split(' ').reduce((longest, currentWord) => {
            return currentWord.length > longest.length ? currentWord : longest;
        }, "");
    }

    findLongestWordLength("The quick brown fox jumped over the lazy dog");
}







// ! Return Largest Numbers in Arrays

// * my Solution

{
    function largestOfFour(arr) {
        let finalArray = []
        for (let i = 0; i < arr.length; i++) {
            let currentMaxNumber
            if (arr[i].length > 0) currentMaxNumber = arr[i][0]
            console.log(arr[i][0])
            console.log('******')
            for (let j = 1; j < arr[i].length; j++) {
                console.log(arr[i][j])
                if (arr[i][j] > currentMaxNumber) currentMaxNumber = arr[i][j]
                else { ; }
            }
            console.log('******')
            finalArray.push(currentMaxNumber)
        }
        return finalArray;
    }
    console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))
}

// * Chat gpt's answer : 

{
    function largestOfFour(arr) {
        return arr.map(subarray => Math.max(...subarray));
    }
    console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
}






// ! Confirm the Ending // ? without using .endsWith()

// * three methods :

// * first : 

{
    function confirmEnding(str, target) {
        // "Never give up and good luck will find you."

        return str.slice(str.length - target.length) === target;
    }

    confirmEnding("He has to give me a new name", "name");
}

// * second : 

{
    function confirmEnding(str, target) {
        // "Never give up and good luck will find you."

        let re = new RegExp(target + "$", "i");

        return re.test(str);
    }

    console.log(confirmEnding("Bastian", "n"));
}

// * third :

{
    function confirmEnding(str, target) {
        return str.slice(-target.length) === target
    }

    confirmEnding("Bastian", "n");
}






// ! Repeat a String Repeat a String // ? without using .repeat()

// * my Solution : 

{
    function repeatStringNumTimes(str, num) {
        let commutator = '';
        for (let i = 0; i < num; i++) {
            if (num < 0) break
            else commutator += str
        }
        return commutator;
    }
    console.log(repeatStringNumTimes("abc", 2))
}


// * with repeat : 

{
    function repeatStringNumTimes(str, num) {
        return num > 0 ? str.repeat(num) : '';
    }
    console.log(repeatStringNumTimes("abc", 2))
}

// * interesting method

{
    function repeatStringNumTimes(str, num) {
        return num > 0 ? Array(num).fill(str).join('') : '';
    }
    console.log(repeatStringNumTimes("abc", 2))
}

// * explanation

{
    let nbr = 3
    let str = 'hamid'
    const toArr = Array(nbr)
    console.log(toArr)
    const filler = toArr.fill(str)
    console.log(filler)
    const joining = filler.join('')
    console.log(joining)
}







// ! Truncate a String

// * my Solution

{
    function truncateString(str, num) {
        let truncated = '';
        if (str.length > num) {
            truncated = str.slice(0, num).concat('...')
            console.log(truncated)
        } else truncated = str;

        return truncated
    }

    console.log(truncateString("A-tisket a-tasket A green and yellow basket", 123));
}

{
    const truncateString = (str, num) => str.length > num ? str.slice(0, num).concat('...') : str

    console.log(truncateString("A-tisket a-tasket A green and yellow basket", 123));
}










// ! Finders Keepers

// * my Solution

{
    function findElement(arr, func) {
        let num;
        for (let i = 0; i < arr.length; i++) {
            const isPassed = func(arr[i])
            if (isPassed) {
                num = arr[i]
                break
            }
        }
        return num;
    }

    console.log(findElement([1, 2, 3, 4], num => num % 2 === 0))
    console.log(findElement([1, 3, 5, 8, 9, 10], function (num) { return num % 2 === 0; }))

}







// ! Boo who

{
    const booWho = bool => bool === true || bool === false;

    booWho(null);
}

{
    const booWho = bool => typeof bool === 'boolean'

    console.log(booWho(null));
}








// ! Title Case a Sentence

{
    function titleCase(str) {
        const strArr = str.split(' ')
        let newArr = [];
        let result = [];
        for (let i = 0; i < strArr.length; i++) {

            let titleCased = strArr[i].slice(0, 1).toUpperCase()
                .concat(
                    strArr[i].slice(1, strArr[i].length).toLowerCase()
                )
            // console.log(titleCased)

            newArr.push(titleCased)

            result = newArr.join(' ')
            // console.log(result)

        }
        return result;
    }

    console.log(titleCase("sHoRt AnD sToUt"));
    console.log(titleCase("I'm a little tea pot"));
    console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
}


// * chat gpt's

{
    function titleCase(str) {
        const strArr = str.split(' ');
        console.log(strArr)

        const result = strArr.map(word =>
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        ).join(' ');

        return result;
    }

    console.log(titleCase("sHoRt AnD sToUt"));
    console.log(titleCase("I'm a little tea pot"));
    console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
}