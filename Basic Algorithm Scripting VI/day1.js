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

