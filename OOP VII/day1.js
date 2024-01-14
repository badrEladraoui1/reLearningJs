// ! Create a Basic JavaScript Object

{
    let dog = {
        name: 'doggo',
        numLegs: 4
    };
}






// ! Use Dot Notation to Access the Properties of an Object

{
    let dog = {
        name: "Spot",
        numLegs: 4
    };
    // Only change code below this line

    console.log(dog.name)
    console.log(dog.numLegs)
}








// ! Create a Method on an Object

{
    let dog = {
        name: "Spot",
        numLegs: 4,
        sayLegs: function () { return `This dog has ${dog.numLegs} legs.` }
    };

    console.log(dog.sayLegs())
}






// ! Make Code More Reusable with the this Keyword

// * better way is to use the this keyWord : 

// ? this is a deep topic, and the above example is only one way to use it. In the current context,
// ? this refers to the object that the method is associated with: duck. If the object's name is changed to mallard,
// ?  it is not necessary to find all the references to duck in the code. It makes the code reusable and easier to read.

{
    let dog = {
        name: "Spot",
        numLegs: 4,
        sayLegs: function () { return "This dog has " + this.numLegs + " legs."; }
    };

    console.log(dog.sayLegs());
}





// ! Define a Constructor Function

{
    function Bird() {
        this.name = "Albert";
        this.color = "blue";
        this.numLegs = 2;
    }
}

// * Constructors are defined with a capitalized name to distinguish them from other functions that are not constructors.
// * Constructors use the keyword this to set properties of the object they will create. Inside the constructor,
// * this refers to the new object it will create.
// * Constructors define properties and behaviors instead of returning a value as other functions might.

{
    function Dog() {
        this.name = "DWAG";
        this.color = "brown";
        this.numLegs = 4;
    }
}








// ! Use a Constructor to Create Objects

{
    function Bird() {
        this.name = "Albert";
        this.color = "blue";
        this.numLegs = 2;
    }

    let blueBird = new Bird();
    console.log("blueBird : ", blueBird)

    console.log(blueBird.name);
    console.log(blueBird.color);
    console.log(blueBird.numLegs);

    blueBird.name = 'Elvira';
    console.log(blueBird.name);
}

// ? NOTE: this inside the constructor always refers to the object being created.

// * Notice that the new operator is used when calling a constructor. This tells JavaScript to create a new instance of Bird called
// *  blueBird. Without the new operator, this inside the constructor would not point to the newly created object,
// * giving unexpected results. Now blueBird has all the properties defined inside the Bird constructor:

{
    function Dog() {
        this.name = "Rupert";
        this.color = "brown";
        this.numLegs = 4;
    }
    // Only change code below this line

    let hound = new Dog();
    console.log(hound)
}









// ! Extend Constructors to Receive Arguments

// * better way to write a constructor for whatEver value

{
    function Bird(name, color) {
        this.name = name;
        this.color = color;
        this.numLegs = 2;
    }

    let cardinal = new Bird("birdyBirdy", "yellow")
    console.log(cardinal)

    console.log(cardinal.name)
    console.log(cardinal.color)
    console.log(cardinal.numLegs)
}


{
    function Dog(name, color) {
        this.name = name;
        this.color = color;
        this.numLegs = 4;
    }

    let terrier = new Dog("dawggy", "black")
    console.log(terrier)
}






// ! Verify an Object's Constructor with instanceof

// * Anytime a constructor function creates a new object, that object is said to be an instance of its constructor.
// * JavaScript gives a convenient way to verify this with the instanceof operator.
// * instanceof allows you to compare an object to a constructor,
// * returning true or false based on whether or not that object was created with the constructor.Here's an example:

{
    let Dog = function (name, color) {
        this.name = name;
        this.color = color;
        this.numLegs = 4;
    }

    let Bird = function (name, color) {
        this.name = name;
        this.color = color;
        this.numLegs = 2;
    }

    let crow = new Bird("Alexis", "black");

    console.log(crow instanceof Bird);
    console.log(crow instanceof Dog);
}

{
    function Dog(name, color) {
        this.name = name;
        this.color = color;
        this.numLegs = 4;
    }

    function Bird(name, color) {
        this.name = name;
        this.color = color;
        this.numLegs = 2;
    }

    let crow = new Bird("Alexis", "black");

    console.log(crow instanceof Bird);
    console.log(crow instanceof Dog);
}


// * If an object is created without using a constructor, instanceof will verify that it is not an instance of that constructor:

{
    function Bird(name, color) {
        this.name = name;
        this.color = color;
        this.numLegs = 2;
    }

    let canary = {
        name: "Mildred",
        color: "Yellow",
        numLegs: 2
    };

    console.log(canary instanceof Bird); // ? false
}


{
    function House(numBedrooms) {
        this.numBedrooms = numBedrooms;
    }

    let myHouse = new House(16)
    console.log(myHouse instanceof House)

    // Only change code below this line
}








// ! Understand Own Properties

// * Adding the own properties of canary to the array ownProps

function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Only change code below this line

for (let property in canary) {
    if (canary.hasOwnProperty(property)) {
        ownProps.push(property)
    }
}

console.log(ownProps)







// ! Use Prototype Properties to Reduce Duplicate Code

// ? Since numLegs will probably have the same value for all instances of Bird, you essentially have a duplicated variable numLegs inside each Bird instance.
// ? This may not be an issue when there are only two instances, but imagine if there are millions of instances.That would be a lot of duplicated variables.
// ? A better way is to use the prototype of Bird.Properties in the prototype are shared among ALL instances of Bird.Here's how to add numLegs to the Bird prototype:


{
    function Dog(name) {
        this.name = name;
    }

    Dog.prototype.numLegs = 2;


    // Only change code above this line
    let beagle = new Dog("Snoopy");
    console.log(beagle)
    console.log(beagle.numLegs)
}



{
    // * an eXample :
    {
        function Animal(name) {
            this.name = name;
        }

        // Adding a method to the prototype
        Animal.prototype.makeSound = function () {
            console.log("Some generic sound");
        };

        let dog = new Animal("Buddy");

        // The "name" property is an own property of the "dog" object.
        console.log(dog.name); // Output: Buddy

        // The "makeSound" method is not found in "dog," so JavaScript looks in the prototype.
        // It finds "makeSound" in the prototype chain and executes it.
        dog.makeSound(); // Output: Some generic sound
    }
}



// ! Iterate Over All Properties

// * Add all of the own properties of beagle to the array ownProps.
// *  Add all of the prototype properties of Dog to the array prototypeProps.

{
    function Dog(name) {
        this.name = name;
    }

    Dog.prototype.numLegs = 4;

    let beagle = new Dog("Snoopy");

    let ownProps = [];
    let prototypeProps = [];

    for (let prop in beagle) {
        if (beagle.hasOwnProperty(prop)) {
            ownProps.push(prop)
        }
        else {
            prototypeProps.push(prop)
        }
    }
    console.log("Own Properties:", ownProps);
    console.log("Prototype Properties:", prototypeProps);
    // Only change code below this line
}






// ! Understand the Constructor Property


{
    let duck = new Bird();
    let beagle = new Dog();

    console.log(duck.constructor === Bird);
    console.log(beagle.constructor === Dog);

    function joinBirdFraternity(candidate) {
        if (candidate.constructor === Bird) {
            return true;
        } else {
            return false;
        }
    }
}

// * Note: Since the constructor property can be overwritten (which will be covered in the next two challenges)
// *  it’s generally better to use the instanceof method to check the type of an object.







// ! Change the Prototype to a New Object

{
    Bird.prototype = {
        numLegs: 2,
        eat: function () {
            console.log("nom nom nom");
        },
        describe: function () {
            console.log("My name is " + this.name);
        }
    };
}

{
    function Dog(name) {
        this.name = name;
    }

    Dog.prototype = {
        // Only change code below this line
        numLegs: 2,
        eat: function () {
            return "eating..."
        },
        describe: function () {
            return "describing..."
        }
    };

    let newDoggy = new Dog("dogyo")

    const ownPropsArr = []
    const protosArr = []

    for (let prop in newDoggy) {
        if (newDoggy.hasOwnProperty(prop)) ownPropsArr.push(prop)
        else protosArr.push(prop)
    }

    console.log(ownPropsArr)
    console.log(protosArr)

    console.log(newDoggy.describe())
    console.log(newDoggy.name)
    console.log(newDoggy.numLegs)
}







// ! Remember to Set the Constructor Property when Changing the Prototype

// * There is one crucial side effect of manually setting the prototype to a new object.It erases the constructor property!
// * This property can be used to check which constructor function created the instance,
// * but since the property has been overwritten, it now gives false results:

{
    duck.constructor === Bird; // ? false
    duck.constructor === Object; // ? true
    duck instanceof Bird; // ? true
}

// * To fix this, whenever a prototype is manually set to a new object, remember to define the constructor property:

{
    Bird.prototype = {
        constructor: Bird,
        numLegs: 2,
        eat: function () {
            console.log("nom nom nom");
        },
        describe: function () {
            console.log("My name is " + this.name);
        }
    };
}

{
    function Dog(name) {
        this.name = name;
    }

    // Only change code below this line
    Dog.prototype = {
        constructor: Dog,
        numLegs: 4,
        eat: function () {
            console.log("nom nom nom");
        },
        describe: function () {
            console.log("My name is " + this.name);
        }
    };
}







// ! Understand Where an Object’s Prototype Comes From

{
    function Bird(name) {
        this.name = name;
    }

    let duck = new Bird("Donald");

    Bird.prototype.isPrototypeOf(duck)
}

{
    function Dog(name) {
        this.name = name;
    }

    let beagle = new Dog("Snoopy");

    // Only change code below this line

    console.log(Dog.prototype.isPrototypeOf(beagle))
}









// ! Understand the Prototype Chain

{
    //* All objects in JavaScript(with a few exceptions) have a prototype.Also, an object’s prototype itself is an object.

    function Bird(name) {
        this.name = name;
    }

    console.log(typeof Bird.prototype)

    //* Because a prototype is an object, a prototype can have its own prototype! In this case,
    //*  the prototype of Bird.prototype is Object.prototype:

    console.log(Object.prototype.isPrototypeOf(Bird.prototype));

    // How is this useful ? You may recall the hasOwnProperty method from a previous challenge:

    let duck = new Bird("Donald");
    duck.hasOwnProperty("name");

    //* The hasOwnProperty method is defined in Object.prototype, which can be accessed by Bird.prototype,
    //*  which can then be accessed by duck.This is an example of the prototype chain.In this prototype chain,
    //* Bird is the supertype for duck, while duck is the subtype.Object is a supertype for both Bird and duck.
    //*Object is a supertype for all objects in JavaScript.Therefore, any object can use the hasOwnProperty method.
}

{
    function Dog(name) {
        this.name = name;
    }

    let beagle = new Dog("Snoopy");

    console.log(Dog.prototype.isPrototypeOf(beagle));  // yields true

    // Fix the code below so that it evaluates to true
    console.log(Object.prototype.isPrototypeOf(Dog.prototype))
}







// ! Use Inheritance So You Don't Repeat Yourself

{
    Bird.prototype = {
        constructor: Bird,
        describe: function () {
            console.log("My name is " + this.name);
        }
    };

    Dog.prototype = {
        constructor: Dog,
        describe: function () {
            console.log("My name is " + this.name);
        }
    };
}

// * The describe method is repeated in two places.
// * The code can be edited to follow the DRY principle by creating a supertype (or parent) called Animal:

{
    function Animal() { };

    Animal.prototype = {
        constructor: Animal,
        describe: function () {
            console.log("My name is " + this.name);
        }
    };
}

//* Since Animal includes the describe method, you can remove it from Bird and Dog:

{
    Bird.prototype = {
        constructor: Bird
    };

    Dog.prototype = {
        constructor: Dog
    };
}

// * Example

{
    function Cat(name) {
        this.name = name;
    }

    Cat.prototype = {
        constructor: Cat,
    };

    function Bear(name) {
        this.name = name;
    }

    Bear.prototype = {
        constructor: Bear,
    };

    function Animal() { }

    Animal.prototype = {
        constructor: Animal,
        eat: function () {
            console.log("nom nom nom");
        }
    };
}






// ! Inherit Behaviors from a Supertype

// * Object.create(obj) creates a new object, and sets obj as the new object's prototype. Recall that the prototype is like the "recipe"
// * for creating an object. By setting the prototype of animal to be the prototype of Animal, you are effectively giving the animal
// * instance the same "recipe" as any other instance of Animal.

{
    function Animal() { }
    Animal.prototype.eat = function () {
        console.log("nom nom nom");
    };

    let animal = Object.create(Animal.prototype);

    console.log(animal.eat())
    console.log(animal instanceof Animal)
}

// * Example :

{
    function Animal() { }

    Animal.prototype = {
        constructor: Animal,
        eat: function () {
            console.log("nom nom nom");
        }
    };

    // Only change code below this line

    let duck = Object.create(Animal.prototype); // Change this line // we dont use this : let duck = new Animal();
    let beagle = Object.create(Animal.prototype) // Change this line

    console.log(duck.eat()) // ? idk why it shows undefined after nom nom nom
    console.log(beagle.eat()) // ? idk why it shows undefined after nom nom nom
}





// ! Set the Child's Prototype to an Instance of the Parent

// * This challenge covers the next step: set the prototype of the subtype (or child)—in this case, Bird—to be an instance of Animal.

{
    Bird.prototype = Object.create(Animal.prototype);

    let duck = new Bird("Donald");
    duck.eat();
}

// * duck inherits all of Animal's properties, including the eat method.

{
    function Animal() { }

    Animal.prototype = {
        constructor: Animal,
        eat: function () {
            console.log("nom nom nom");
        }
    };

    function Dog() { }

    // Only change code below this line

    Dog.prototype = Object.create(Animal.prototype)

    let newDog = new Dog("newDogow")
    console.log(newDog.eat())

    let anotherNewDog = new Dog("newDogowTwo")
    console.log(anotherNewDog.eat())
}






// ! Reset an Inherited Constructor Property

// * When an object inherits its prototype from another object, it also inherits the supertype's constructor property.

// * But duck and all instances of Bird should show that they were constructed by Bird and not Animal.
// * To do so, you can manually set the constructor property of Bird to the Bird object:

{
    function Animal() { }
    Animal.prototype = {
        constructor: Animal,
        eat: function () {
            console.log("nom nom nom");
        }
    };

    function Bird() { }

    Bird.prototype = Object.create(Animal.prototype);

    Bird.prototype.constructor = Bird

    let duck = new Bird();
    console.log(duck.constructor)
    console.log(duck instanceof Animal)
    console.log(duck instanceof Bird)
}

// * Example :

{
    function Animal() { }
    function Bird() { }
    function Dog() { }

    Bird.prototype = Object.create(Animal.prototype);
    Dog.prototype = Object.create(Animal.prototype);

    Bird.prototype.constructor = Bird
    Dog.prototype.constructor = Dog
    // Only change code below this line



    let duck = new Bird();
    console.log(duck.constructor)
    let beagle = new Dog();
    console.log(beagle.constructor)
}





// ! Add Methods After Inheritance

{
    function Animal() { }
    Animal.prototype.eat = function () { console.log("nom nom nom"); };

    function Dog() { }

    // Only change code below this line

    Dog.prototype = Object.create(Animal.prototype) // ? creates a new object that inherits from Animal.prototype, and it sets it as the prototype of Dog.prototype
    Dog.prototype.constructor = Dog // ? is used to correctly set the constructor property after changing the prototype.
    Dog.prototype.bark = function () { // ? Dog.prototype.bark is added to the Dog prototype.
        return "Woof!"
    }

    // Only change code above this line

    let beagle = new Dog();

    console.log(beagle.eat())
    console.log(beagle.bark())
}







// ! Override Inherited Methods

// * this how you can override a function inherited from a parent object

{
    function Animal() { }
    Animal.prototype.eat = function () {
        return "nom nom nom";
    };
    function Bird() { }

    Bird.prototype = Object.create(Animal.prototype);

    Bird.prototype.eat = function () {
        return "peck peck peck";
    };
}

// *If you have an instance let duck = new Bird(); and you call duck.eat(), this is how JavaScript looks for the method on the prototype chain of duck:
{                                   // ! important to better understand the concept of prototypes : 
    //   duck => Is eat() defined here? No.
    //  ? Bird => Is eat() defined here? => Yes. Execute it and stop searching.
    //  Animal => eat() is also defined, but JavaScript stopped searching before reaching this level.
    //  Object => JavaScript stopped searching before reaching this level.
}

{// * Override the fly() method for Penguin so that it returns the string Alas, this is a flightless bird.

    function Bird() { }

    Bird.prototype.fly = function () { return "I am flying!"; };

    function Penguin() { }
    Penguin.prototype = Object.create(Bird.prototype);
    Penguin.prototype.constructor = Penguin;

    // Only change code below this line

    Penguin.prototype.fly = function () {
        return "Alas, this is a flightless bird."
    }

    // Only change code above this line

    let penguin = new Penguin();
    console.log(penguin.fly());
}







// ! Use a Mixin to Add Common Behavior Between Unrelated Objects

// * Bird and Airplane. They can both fly, but a Bird is not a type of Airplane and vice versa.

// * For unrelated objects, it's better to use mixins. A mixin allows other objects to use a collection of functions.


{
    let flyMixin = function (obj) {
        obj.fly = function () {
            console.log("Flying, wooosh!");
        }
    };

    let bird = {
        name: "Donald",
        numLegs: 2
    };

    let plane = {
        model: "777",
        numPassengers: 524
    };

    flyMixin(bird);
    flyMixin(plane);

    bird.fly();
    plane.fly();
}

// * Example : 

{
    let bird = {
        name: "Donald",
        numLegs: 2
    };

    let boat = {
        name: "Warrior",
        type: "race-boat"
    };

    // Only change code below this line

    const glideMixin = function (obj) {
        obj.glide = function () {
            return "gliding..."
        }
    }

    glideMixin(bird)
    glideMixin(boat)

    console.log(bird.glide())
    console.log(boat.glide())
}








// ! Use Closure to Protect Properties Within an Object from Being Modified Externally

// * In the previous challenge, bird had a public property name.It is considered public because it can be accessed and changed
// * outside of bird's definition.

bird.name = "Duffy";

// * Therefore, any part of your code can easily change the name of bird to any value.Think about things like passwords
// * and bank accounts being easily changeable by any part of your codebase.That could cause a lot of issues.

// * The simplest way to make this public property private is by creating a variable within the constructor function.
// * This changes the scope of that variable to be within the constructor function versus available globally.
// *This way, the variable can only be accessed and changed by methods also within the constructor function.

{
    function Bird() {
        let hatchedEgg = 10;

        this.getHatchedEggCount = function () {
            return hatchedEgg;
        };
    }
    let ducky = new Bird();
    ducky.getHatchedEggCount();
}
// * Here getHatchedEggCount is a privileged method, because it has access to the private variable hatchedEgg.
// *This is possible because hatchedEgg is declared in the same context as getHatchedEggCount.In JavaScript,
// * a function always has access to the context in which it was created.This is called closure.

{
    function Bird() {
        let weight = 15;
        this.getWeight = function () {
            return weight
        }
    }

    let birdy = new Bird();
    console.log(birdy.getWeight())
}





// ! Understand the Immediately Invoked Function Expression (IIFE)

// * A common pattern in JavaScript is to execute a function as soon as it is declared:

{
    (function () {
        console.log("Chirp, chirp!");
    })();
}

{
    (function () {
        console.log("A cozy nest is ready");
    })()
}







// ! Use an IIFE to Create a Module