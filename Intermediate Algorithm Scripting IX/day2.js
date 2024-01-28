// ! Seek and Destroy

/*


You will be provided with an initial array as the first argument to the destroyer function, followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

The function must accept an indeterminate number of arguments, also known as a variadic function. You can access the additional arguments by adding a rest parameter to the function definition or using the arguments object.

*/



{
    function destroyer(arr, ...numbers) {

        const newArray = []

        for (let i = 0; i < arr.length; i++) {
            let isMatched = false;

            for (let j = 0; j < numbers.length; j++) {
                if (arr[i] === numbers[j]) {
                    isMatched = true
                    // console.log("arr["+i+"] :" , arr[i])
                    // console.log("numbers["+j+"] :" , numbers[j])
                    // console.log("")
                    break
                }
            }
            if (!isMatched) newArray.push(arr[i])
        }
        return newArray;

    }

    console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))
}


// * better one :
{
    function destroyer(arr, ...numbers) {
        return arr
            .filter(element => !numbers.includes(element))
    }

    console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))
}

