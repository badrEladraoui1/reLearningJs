// ! Mutations

// * my Solution

{
    function mutation(arr) {

        const first = arr[0].toLowerCase()
        const second = arr[1].toLowerCase()

        let result = true

        for (let i = 0; i < second.length; i++) {
            if (!first.includes(second[i])) {
                result = false
                break
            }

        }
        return result
    }

    console.log(mutation(["hello", "Hello"]))
}

// *chat gpt's

{
    function mutation(arr) {
        const first = arr[0].toLowerCase();
        const second = arr[1].toLowerCase();

        for (let i = 0; i < second.length; i++) {
            // Check if the character is NOT found in the first string
            if (first.indexOf(second[i]) === -1) {
                return false; // If not found, return false
            }
        }

        return true; // All characters found, return true
    }

    console.log(mutation(["hello", "Hello"]));
}






// ! Chunky Monkey

// * my solution ( i am impressed i figured this out by myself )

{
    function chunkArrayInGroups(arr, size) {

        const copy = [...arr]
        const newArr = []

        while (copy.length > 0) {
            const portion = copy.splice(0, size)
            newArr.push(portion)
        }
        return newArr;
    }

    console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2))
}
