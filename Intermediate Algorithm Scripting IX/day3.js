// ! Wherefore art thou


{
    function whatIsInAName(collection, source) {
        return collection.filter(object => {
            return Object.keys(source).every(sourceKey => object.hasOwnProperty(sourceKey) && object[sourceKey] === source[sourceKey])
        })
    }

    console.log(whatIsInAName(
        [
            { first: "Romeo", last: "Montague" }
            , { first: "Mercutio", last: null }
            , { first: "Tybalt", last: "Capulet" }
        ]
        , { last: "Capulet" }))
}

// * method 2 : 

{
    function whatIsInAName(collection, source) {
        // What's in a name?
        const collectionMatches = [];

        for (let i = 0; i < collection.length; i++) {
            let foundMismatch = false;

            for (const sourceProp in source) {
                if (collection[i][sourceProp] !== source[sourceProp]) {
                    foundMismatch = true;
                }
            }
            if (!foundMismatch) {
                collectionMatches.push(collection[i]);
            }
        }
        return collectionMatches;
    }
}

// * method 3 : 

{
    function whatIsInAName(collection, source) {
        // "What's in a name? that which we call a rose
        // By any other name would smell as sweet.”
        // -- by William Shakespeare, Romeo and Juliet
        const souceKeys = Object.keys(source);

        // filter the collection
        return collection.filter(obj => {
            for (let i = 0; i < souceKeys.length; i++) {
                if (obj[souceKeys[i]] !== source[souceKeys[i]]) {
                    return false;
                }
            }
            return true;
        });
    }
}