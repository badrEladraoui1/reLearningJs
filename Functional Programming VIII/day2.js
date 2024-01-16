// ! Understand the Hazards of Using Imperative Code

// * Examine the code in the editor. It's using a method that has side effects in the program, causing incorrect behaviour.
// *  The final list of open tabs, stored in finalTabs.tabs, should be ['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab',
// *  'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab'] but the list produced by the code is
// *  slightly different.

{// tabs is an array of titles of each site open within the window
    const Window = function (tabs) {
        this.tabs = tabs; // We keep a record of the array inside the object
    };

    // When you join two windows into one window
    Window.prototype.join = function (otherWindow) {
        this.tabs = this.tabs.concat(otherWindow.tabs);
        return this;
    };

    // When you open a new tab at the end
    Window.prototype.tabOpen = function (tab) {
        this.tabs.push('new tab'); // Let's open a new tab for now
        return this;
    };

    // When you close a tab
    Window.prototype.tabClose = function (index) {

        // Only change code below this line

        const tabsBeforeIndex = this.tabs.slice(0, index); // Get the tabs before the tab // we switched splice with slice to prevent the loss of data from the original array
        const tabsAfterIndex = this.tabs.slice(index + 1); // Get the tabs after the tab // we switched splice with slice to prevent the loss of data from the original array

        this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together

        // Only change code above this line

        return this;
    };

    // Let's create three browser windows
    const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
    const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
    const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites

    // Now perform the tab opening, closing, and other operations
    const finalTabs = socialWindow
        .tabOpen() // Open a new tab for cat memes
        .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
        .join(workWindow.tabClose(1).tabOpen());
    console.log(finalTabs.tabs);
}









// ! Avoid Mutations and Side Effects Using Functional Programming

// * If you haven't already figured it out, the issue in the previous challenge was with the splice call in the tabClose() function.
// * Unfortunately, splice changes the original array it is called on,
// * so the second call to it used a modified array, and gave unexpected results

// * Recall that in functional programming, changing or altering things is called mutation, and the outcome is called a side effect.
// * A function, ideally, should be a pure function, meaning that it does not cause any side effects

// The global variable
let fixedValue = 4;

function incrementer() {
    // Only change code below this line
    return fixedValue + 1
    // Only change code above this line
}

console.log(incrementer())
console.log(fixedValue)









// ! Pass Arguments to Avoid External Dependence in a Function

// * Another principle of functional programming is to always declare your dependencies explicitly.
// *  This means if a function depends on a variable or object being present, then pass that variable
// *  or object directly into the function as an argument

// * the function would always produce the same output for the same set of inputs, no matter what part of the code executes it.

{
    // The global variable
    let fixedValue = 4;

    // Only change code below this line
    function incrementer(value) {
        return value + 1
        // Only change code above this line
    }
    console.log(incrementer(fixedValue))
    console.log(fixedValue)
}











// ! Refactor Global Variables Out of Functions

// So far, we have seen two distinct principles for functional programming:

//     Don't alter a variable or object - create new variables and objects and return them if need be from a function.
//     Hint: using something like const newArr = arrVar, where arrVar is an array will simply create a reference to the existing variable
//     and not a copy. So changing a value in newArr would change the value in arrVar.

//     Declare function parameters - any computation inside a function depends only on the arguments passed to the function,
//     and not on any global object or variable.

// Adding one to a number is not very exciting, but we can apply these principles when working with arrays or more complex objects.


