# Ecmascript 6

## Trasnpiling to ES5

Because ES6 still isn't accepted across 100% of browsers (most notably IE11 and previous), it is sometimes a good idea to transpile it to ES5 first.

Babel tends to support the most features.

## The `let` Keyword

The let keyword allows us to create block-scoping in JS. We weren't able to do this before.

`let x = 5;`

## The `const` keyword

Creates a constant variable that cannot be reassigned a new value.

`const x = 5;`

## Tempalate Strings

Similar to a templating languages. Allows you to format your Javascript code with dynamic variables. Just use bat ticks.

    function hello(fname) {
    console.log(`Good morning $(fname)`);
    }

    hello('ben');

## The `...` Spread Operator

The spread operator can turn the elements of an array into arguments of a function, or into elements of an array literal.

var cat = ["shitty", "annoying", "useless"];
var animals = ["dogs", ...cats, "bears"];

Instead of `cats` appearing as a sub-array, it will populate `animals`

## The `=>` Fat Arrow Operator

Synactic Sugar to create functions with much less verbose code. 

    var hello = (msg) => console.log(msg);
    hello('good morning');

They also help us deal with the scope of `this`.

## Destructuring

You can grab array or object variables using destructuring. Usually you grab array values like so:

    var fruit = ['apples', 'pears', 'bananas', 'grapes'];
    console.log(fruit[0], fruit[2]);

But you can do the same using destructuring:

    var [first,, third,,] = ['apples', 'pears', 'bananas', 'oranges', 'grapes'];
    console.log(first, third);    

As well with objects. Here is the old way:

    var obj = {first: 5, second: 7, third: 8, fourth: 9, fifth: 10}
    console.log(obj.first, obj.third);

And here is the new way

    var {first, third} = {first: 5, second: 7, third: 8, fourth: 9, fifth: 10}
    console.log(first, third);

You can even get a bit more complex with it, like so:

    var coder = {name: 'ben', age: 37};
    function aboutCoder({name, age}){ 
        console.log(`Coder name: ${name}, Age: ${age}`)
    }
    aboutCoder(coder);

## Generators

Generators are a new type of function that allow us to pause functions in the middle of execution to be resumed later.

Generators are denoted by an asterisk after the function keyword or before the function name. We hit pause within our function by using the `yield` keyword.

    function* count(){
      yield "one";
      yield "two";
      yield "three";
    }

    var c = count();

    console.log(c.next());
    console.log(c.next().value);
    console.log(c.next());

You need to store the function as a variable for this to work, as it stores the last returned object which can be used for the next iteration.

The object returned by `c.next()` also has a `done` attribute, which returns false if there are more `yield` statements left to be iterated through and `true` if there aren't. 

Generators are usually used for asynchronous events like http calls or timers.

## ES6 Classes

To create ES6 classes:

    class Coder {
      constructor(name, age) {
        this.name = name;
        this.age = age;
      }
      helloCoder() {
        console.log(`${this.name} is ${this.age} years old`);
      }
    }

    var ben = new Coder('ben', 36);
    ben.helloCoder();

## Inheritance

ES6 allows for inheritance as well

    class Coder {
      constructor(name, age) {
        this.name = name;
        this.age = age;
      }
      helloCoder() {
        console.log(`${this.name} is ${this.age} years old`);
      }
    }
    
    var ben = new Coder('ben', 36);
    ben.helloCoder();
    
    class Employee extends Coder {
      constructor(){
        super('bob', 25);
      }
    }
    
    var bob = new Employee();
    bob.helloCoder();

