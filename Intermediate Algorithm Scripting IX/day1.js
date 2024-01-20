// ! Sum All Numbers in a Range

// * 

// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.
// For example, sumAll([4, 1]) should return 10 because sum of all the numbers between 1 and 4(both inclusive) is 10.


// * My solution : 

{
    function sumAll(arr) {
        let sum = 0;
        const first = parseInt(arr.shift())
        const last = parseInt(arr.pop())
        if (first < last) {
            for (let i = first; i <= last; i++) {
                sum += i;
            }
        } else {
            for (let i = last; i <= first; i++) {
                sum += i;
            }
        }
        return sum
    }



    console.log((sumAll([5, 10])))
}

// *  freeCodeCamp's solution (i liked)
{
    function sumAll(arr) {
        let sumBetween = 0;
        for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
            sumBetween += i;
        }
        return sumBetween;
    }

    sumAll([1, 4]);
}

//* more complicated one with recursion : 
{
    const sumAll = (arr) => {
        const [first, last] = arr.sort((a, b) => a - b);
        return first !== last
            ? first + sumAll([first + 1, last])
            : first
    }



    console.log((sumAll([5, 10])))
}









// ! Diff Two Arrays


// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
// Note: You can return the array with its elements in any order.

// * my solution : 

{
    function diffArray(arr1, arr2) {
        let newArr = [];

        const concatenated = arr1.concat(arr2)
        console.log(concatenated)
        for (let i = 0; i < concatenated.length; i++) {
            if (arr1.includes(concatenated[i]) && arr2.includes(concatenated[i])) {
                ;
            } else {
                newArr.push(concatenated[i])
            }
        }

        return newArr
    }

    console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))
}

// * freeCodeCamp's

{
    function diffArray(arr1, arr2) {
        return arr1
            .concat(arr2)
            .filter(item => !arr1.includes(item) || !arr2.includes(item));
    }

    diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
}

{
    function diffArray(arr1, arr2) {
        return [...diff(arr1, arr2), ...diff(arr2, arr1)];

        function diff(a, b) {
            return a.filter(item => b.indexOf(item) === -1);
        }
    }
}

// * with a Set 

{
    function diffArray(arr1, arr2) {
        const diff = new Set(arr1);
        arr2.forEach(elem => diff.has(elem) ? diff.delete(elem) : diff.add(elem))
        return Array.from(diff)
    }

    console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))
}