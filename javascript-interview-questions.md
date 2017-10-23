# Javascript Theory Interview Questions

## ES7 Specific Quesitons

1. Explain about Async and Await

[1](https://youtu.be/COKdtOgopWQ)

## ES6 Specific Questions

### 1. Explain the ES6 Promises API

A Promise represents a value which may be available now, or in the future, or never. A promise takes a single parameter - the `executor` function, which itself has the parameters `resolve` and `reject` which are both functions. The executor returns the object that was created. 

`resolve` is used if the promise was successful, and returns the value that the promise was fulfilled with. `reject` is used if there was an error, and returns the reason for the error.

    let p = new Promise((resolve, reject) => {
        let result = some.async.call()
        if (!result.err) {
            resolve('success')
        } else {
            reject('there was an error')
        }
    })

A Promise is in one of these states:

* pending
* fulfilled
* rejected

You can chain promises (composition) with `then` and `catch`. `then` returns a promise which will execute after the current promise fulfills, while `catch` also returns a promise, but only deals with rejected cases.

### 2. Explain how ES6 Generators work

#### Iterators

An object is an iterator when it knows how to access items from a collection one at a time, while keeping track of its current position within that sequence. In JavaScript an iterator is an object that provides a `next()` method which returns the next item in the sequence. This method returns an object with two properties: `done` and `value`.

Building custom iterators is timely and error prone. 

#### ES6 Generators

Generators are functions which can be exited and later re-entered. Their context (variable bindings) will be saved across re-entrances.

A generator is a special type of function that works as a factory for iterators. A function becomes a generator if it contains one or more `yield` expressions and if it uses the `function*` syntax.

#### Iterables

An object is iterable if it defines its iteration behavior, such as what values are looped over in a `for..of` construct. Some built-in types, such as `Array` or `Map`, have a default iteration behavior, while other types (such as `Object`) do not.

`String`, `Array`, `TypedArray`, `Map` and `Set` are all built-in iterables, because the prototype objects of them all have a `Symbol.iterator` method.

#### Generator Expressions and Methods

    function* counter(){ 
      let i = 0
      while (true) {
        yield i
        i += 1
      }
    }
    let count = counter()
    console.log(count.next().value)  // 0
    console.log(count.next().value)  // 1

Once the final `yield` expression has been passed, and JS has reached the end of the function, the `done` value will be set to `true`.

`yield*` expression delegates to another generator or iterable object.

### 3. Explain the Pros and Cons of ES6 over ES5

#### Pros

**ES5:**

* You have a lot of browser support.

**ES6:**

* You have tail call optimization.
* You have import statements.
* Lamba's are pretty chill.
* Immutable and block scoping objects with "const" and "let".
* All your friends who only know ES5 will look at you like a strange but very powerful wizard.
* Classes and OO inheritence.
* Functors, and all that functional goodness.
* String templates that handle interpolation for you.

#### Cons

**ES5:**

It doesn't have everything that ES6 has.

**ES6:**

It doesn't have all the support that ES5 has, but you can always transpile your ES6 code.

WHAT I DON'T LIKE: ES6 classes. They are named and used the same as regular OO classes, but they work on Prototypal inheritance, and are not true classes, like in Java. By using the same naming, you could potentially mislead a new JS developer about how they work. 

### 4. Explain how ES6 classes work



### 5. Explain some new additions to ES6

### 6. What is Callback Hell and how do you solve it?



## Non-ES6 Questions

### 1. Explain how Prototypal inheritance works

### 2. What can you do with Prototypal inheritance that you can't do with regular Class-based inheritance (e.g. Java)

### 3. Explain how Closures work and why you'd want/not want to use them

In computer science, a *Closure* is a *first class function* (see 23), with free variables that are bound in the lexical environment. Such a function is said to be *closed over* its free variables. A closure is defined within the scope of its free variables, and the extent of those variables is at least as long as the lifetime of the closure itself. 

### 4. Explain the difference between `call`, `apply` and `bind`. Give examples of when you'd use each of them. 

### 5. Explain XHR requests

### 6. Explain the difference between `map`, `filter` and `reduce`

### 7. What is the difference between `undefined` and `not defined`

### 8. What is the drawback of creating true private methods in JavaScript

### 9. What is a “closure” in JavaScript? Provide an example

### 10. How to empty an array in JavaScript?

### 11. How do you check if an object is an array or not?

### 12. What does the `delete` command do?

### 13. What is the difference between the following. Are there advantages/disadvantages to either?


    var foo = () => { /* some code */ }
    function foo() { /* some code */ }


### 14. What is function hoisting in JavaScript?

### 15. Explain the difference between asynchronous and synchronous commands

A: Synchronous requests block the execution of code which creates "freezing" on the screen and an unresponsive user experience. 

### 16. What is the `instanceof` operator in JavaScript?

### 17. How do you calculate the length of an associative array

### 18. In what situations should you set up a `try`/`catch` block?

### 19. What is a callback hook and how do you use it?

### 20. Explain Cookies and Sessions

### 21. Explain the event model

### 22. Explain event bubbling

### 23. Explain the difference between `pop`, `push`, `shift` and `unshift`

### 24. What does supporting `first class functions` mean?

In computer science, a language is said to support `first class functions` if it treats `functions` as `first class objects`. That means that the language supports constructing new functions during the execution of a program, storing them in data structures, passing them as arguments to other functions, and returning them as the values of other functions.

### 25. What are the similarities and differences between `high order functions` and `first class functions`?

**Similarities:** Both allow functions as arguments and functions as return values.

**Differences:** *high order* describes a mathematical concept of functions that operate on other functions. 

*first class*, on the other hand, is a computer science term that describes programming language entities that have no restriction on their use. Therefore, first-class functions can appear anywhere in a program that other first class entities (e.g. numbers, arrays) can.

26. Explain what `currying` is.

*High order functions* enable currying, which is a technique in which a function is applied to its arguments, with each application returning a new function that accepts the next argument. 




## Sources

[1](https://www.codementor.io/nihantanu/21-essential-javascript-tech-interview-practice-questions-answers-du107p62z)

[2](https://www.toptal.com/javascript/interview-questions)

[3]