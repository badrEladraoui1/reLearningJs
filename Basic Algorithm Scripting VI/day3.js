// ! Slice and Splice

{
    function frankenSplice(arr1, arr2, n) {

        // const copy = [...arr2]
        const copy = arr2.slice()
        copy.splice(n, 0, ...arr1)
        return copy;

    }

    console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

}






// ! Falsy Bouncer

{
    const FALSYS = [false, null, 0, "", undefined, NaN]

    function bouncer(arr) {
        const filtered = arr.filter(item => isNotfalsy(item))
        return filtered
    }

    // function isNotfalsy(item){
    //   for(let i = 0 ; i < FALSYS.length ; i++){
    //     if(item === FALSYS[i]) return false
    //   }
    // return true
    // }

    function isNotfalsy(item) { return !FALSYS.includes(item) }


    console.log(bouncer([7, "ate", "", false, 9]))
}

// * or : 

{
    function bouncer(arr) {
        return arr.filter(Boolean);
    }
    console.log(bouncer([7, "ate", "", false, 9]))
}

// * or : 

{
    function bouncer(arr) {
        const filteredArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i]) filteredArr.push(arr[i]);
        }
        return filteredArr;
    }
}

// ! Where do I Belong

// * my Solution 

{
    function getIndexToIns(arr, num) {

        let index

        const newArr = [...arr]
        newArr.push(num)
        const sorted = newArr.sort((a, b) => a - b)
        index = sorted.indexOf(num)
        return index;

    }

    console.log(getIndexToIns([2, 5, 10], 15))
}

// * chat gpt's : 

{
    function getIndexToIns(arr, num) {
        // Insert num into arr at the correct position
        arr.push(num);
        arr.sort((a, b) => a - b);

        // Find the index of num in the sorted array
        const index = arr.indexOf(num);

        return index;
    }

    console.log(getIndexToIns([2, 5, 10], 15));
}

// * best one : 

{
    function getIndexToIns(arr, num) {
        const sortedIndex = arr.findIndex(element => element >= num);
        return sortedIndex === -1 ? arr.length : sortedIndex;
    }

    console.log(getIndexToIns([2, 5, 10], 15)); // Output: 3

    // ? This version uses findIndex to locate the index where element is greater than or equal to num. If no such element is found,
    // ? it returns arr.length, indicating that num should be inserted at the end of the array.
    // ? This approach avoids sorting the entire array, making it more efficient for larger arrays.
}