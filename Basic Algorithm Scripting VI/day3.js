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

// ! Where do I Belong