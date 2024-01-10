// ! Convert Celsius to Fahrenheit

// * The formula to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

{
    function convertCtoF(celsius) {
        let fahrenheit = (celsius * (9 / 5) + 32)
        return fahrenheit;
    }

    console.log(convertCtoF(30))

}






// ! Reverse a String

// * Example // ? this is my solution

{
    function reverseString(str) {
        let str2 = '';
        for (let i = str.length - 1; i >= 0; i--) {
            str2 += str[i]
        }
        console.log(str2)
        return str2
    }

    reverseString("hello");
}

// * a better approach :

{
    const idk = "idk"
    console.log(idk)
    const splitting = idk.split('')
    console.log(splitting)
    const reversing = splitting.reverse()
    console.log(reversing)
    const joining = reversing.join('')
    console.log(joining)
}

// * solution recommended by chatGpt

{
    function reverseString2(str) {
        return str.split('').reverse().join('')
    }
    console.log(reverseString2("hello"))
}






// ! Factorialize a Number

{
    function factorialize1(num) {
        if (num === 0 || num === 1) return 1
        else return num * factorialize(num - 1)
    }

    function factorialize2(num) {
        let fac = 1
        for (let i = 1; i <= num; i++) { // ? for(let i = num ; i >= 1 ; i--)
            fac *= i
        }
        return fac
    }

    console.log(factorialize1(5))
    console.log(factorialize2(5))
}






// ! Find the Longest Word in a String

// ? longest by word function : 
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

