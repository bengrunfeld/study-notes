# Immutable.js

"Maximum reliance on immutable objects is widely accepted as a sound strategy for creating simple, reliable code." - *s1*

## Definition of an Immutable Object

"In object-oriented and functional programming, an immutable object is an object whose state cannot be modified after it is created." – *s2*

## Example of a Mutable Object

    Some code

## Example of an Immutable Object

    Some more code

## Ten Benefits of Immutability

1. Thread Safety
2. Immutable objects are simpler to construct, test, and use
3. Avoid temporal coupling
4. Avoid side effects
5. Avoid identity mutability issues
6. Avoid invalid object’s state
7. Failure atomicity
8. Increase Predictability
9. Increase Performance
10. Mutation Tracking

### 1. Thread Safety

In Javascript, Thread Safety is *usually* not an issue since the Browser is single threaded, meaning that only one command (of your code) is executed at a time.

Immutable objects are thread-safe. This means that multiple threads can access the same object at the same time, without clashing with another thread.

If no object methods can modify its state, no matter how many of them and how often are being called parallel—they will work in their own memory space in stack.

### 2. Immutable objects are simpler to construct, test, and use

Which would you rather write a Unit Test for?

    const getPosts = () => {
        
    }

## Sources

* s1: [Oracle - Immutability](https://docs.oracle.com/javase/tutorial/essential/concurrency/immutable.html)
* s2: [Wikipedia - Immutable Objects](https://en.wikipedia.org/wiki/Immutable_object)


* [Objects Should be Immutable](http://www.yegor256.com/2014/06/09/objects-should-be-immutable.html)
* [Three Benefits of Using Immutable Object](https://medium.com/web-engineering-vox/3-benefits-of-using-immutable-objects-886ca2c56e85)
* [Why is immutability so important(or needed) in javascript?](https://stackoverflow.com/a/34385684)
* [Coupling](https://en.wikipedia.org/wiki/Coupling_(computer_programming))
* [XKCD - Side Effects](https://xkcd.com/1312/)
