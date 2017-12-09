# Immutable.js

"Maximum reliance on immutable objects is widely accepted as a sound strategy for creating simple, reliable code." - *s1 - Oracle*

## Definition of an Immutable Object

"In object-oriented and functional programming, an immutable object is an object whose state cannot be modified after it is created." – *s2*

## Example of a Mutable Object

    Some code

## Example of an Immutable Object

    Some more code

## Understanding Immutability in Javascript - Under the Hood

In JavaScript, only `Objects` and `Arrays` are **mutable**, not primitive values - e.g. `Strings` and `Numbers`, which are **immutable**. 

Immutability in this case means that the place in memory where the string is stored in will not be modified.

    let a = 'hello'
    a = a + ' world'
    console.log(a)  // hello world

### What's happening

1. The existing value of `a` is retrieved from memory
2. "World" is appended to the existing value of `a`
3. The resultant value is then allocated to a new block of memory
4. `a` object now points to the newly created memory space
5. Previously created memory space is now available for garbage collection.

- *s3*

### Javascript Native Objects that are Mutable

* Objects 
* Arrays
* Functions
* Classes
* Sets
* Maps

### Javascript Primitive Data Types that are Immutable

* String
* Number
* Boolean
* Null
* Undefined
* Symbol

Symbol is used to make object properties that are anonymous. This data type is used as the key for an object property when the property is intended to be private, for the internal use of a class or an object type.

- *s4*

## Ten Benefits of Immutability

Immutable object:

1. are **Thread Safe**
2. are simpler to construct, test, and use
3. avoid temporal coupling
4. avoid side effects
5. avoid identity mutability issues
6. avoid invalid state
7. increased predictability
8. increased performance
9. enable mutation tracking
10. provide failure atomicity

### 1. Thread Safety

In Javascript, Thread Safety is *usually* not an issue since the Browser is single threaded, meaning that only one command (of your code) is executed at a time.

Immutable objects are thread-safe. This means that multiple threads can access the same object at the same time, without clashing with another thread.

If no object methods can modify its state, no matter how many of them and how often are being called parallel — they will work in their own memory space in stack.

### 2. Immutable objects are simpler to construct, test, and use

Which would you rather write a Unit Test for?

    const getPosts = () => {
        
    }

## Sources

* s1: [Oracle - Immutability](https://docs.oracle.com/javase/tutorial/essential/concurrency/immutable.html)
* s2: [Wikipedia - Immutable Objects](https://en.wikipedia.org/wiki/Immutable_object)
* s3: [MDN Glossary - Mutable](https://developer.mozilla.org/en-US/docs/Glossary/Mutable)
* s4: [MDN Glossary - Symbol](https://developer.mozilla.org/en-US/docs/Glossary/Symbol)


* [Objects Should be Immutable](http://www.yegor256.com/2014/06/09/objects-should-be-immutable.html)
* [Three Benefits of Using Immutable Object](https://medium.com/web-engineering-vox/3-benefits-of-using-immutable-objects-886ca2c56e85)
* [Why is immutability so important(or needed) in javascript?](https://stackoverflow.com/a/34385684)
* [Temporal Coupling](https://en.wikipedia.org/wiki/Coupling_(computer_programming))
* [XKCD - Side Effects](https://xkcd.com/1312/)
* [About Thread Safety in Javascript](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
* 


https://facebook.github.io/immutable-js/
https://www.google.com/search?q=benefits+of+immutability&oq=benefits+&aqs=chrome.1.69i57j69i59j69i60l2j69i61j0.75443j0j7&sourceid=chrome&ie=UTF-8
