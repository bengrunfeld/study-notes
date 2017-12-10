# Immutable.js

"Maximum reliance on immutable objects is widely accepted as a sound strategy for creating simple, reliable code." - *s1 - Oracle*

## Definition of an Immutable Object

"In object-oriented and functional programming, an immutable object is an object whose state cannot be modified after it is created." – *s2*

## Example of a Mutable Object

    let username = 'Ben'
    username = 'Charles'

## Example of an Immutable Object

    const username = 'Ben'
    username = 'Charles'
    
    Uncaught TypeError: Assignment to constant variable.
    at <anonymous>:1:10

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

Immutable objects:

1. are thread safe
2. are simpler to construct, test, and use
3. avoid temporal coupling
4. avoid side effects
5. avoid identity mutability issues
6. avoid invalid state
7. increased predictability
8. increased performance
9. enable mutation tracking
10. provide failure atomicity

### 1. Immutable Objects are Thread Safe

Immutable objects are thread safe. This means that multiple threads can access the same object at the same time without clashing with one another.

If no object methods can modify its state, no matter how many of them and how often they are being called parallel — they will work in their own memory space in stack.

In Javascript, Thread Safety is *usually* not an issue since the Browser is single threaded, meaning that only one command (of your code) is executed at a time.

That said, multi-threading is possible with Web Workers, which spawn real OS-level threads.

> However, since web workers have carefully controlled communication points with other threads, it's actually very hard to cause concurrency problems. There's no access to non-threadsafe components or the DOM. And you have to pass specific data in and out of a thread through serialized objects. So you have to work really hard to cause problems in your code.
  
That said, MDN themselves provide an example of a threading error using Web Workers, so it's possible.

*s5: About thread safety*

![Meme: So you're telling me there's a chance](http://s2.quickmeme.com/img/80/80585fa126afe931d3686d9aa0c47e36d7b7b3db27bf52f7ce66f9e86bf91b3e.jpg "Meme: So you're telling me there's a chance")

### 2. Immutable objects are simpler to construct, test, and use

Mutable objects can have different internal states throughout their lifetime, all of which need to be tested explicitly. 

Imagine having to test the following:

    let request = new Request("https://credible.com")

    let updateComments = comments => {
        request.method = "PUT"
        request.payload = comments
        sendXHR(request)
    }

    let fetchPosts = () => {
        request.method = "GET"
        return sendXHR(request)
        // payload may have been set by updateComments
    }

    let sendXHR = request => {
        $.ajax(request)
    }

If you're writing a Unit Test for `request`, you will have to test every possible combination of its state. If `request` was immutable, there would be no uncertainty about its state.

**Check this example with Bryce!!**

### 3. Immutable Objects Avoid Temporal Coupling

> Temporal Coupling occurs when two actions are bundled together into one module just because they happen to occur at the same time.

*s6 Temporal Coupling*

    let request = new Request(url)
    request.method = "POST"
    let first = request.send()
    request.body = payload
    let second = request.send()

This code works. However, you must remember that the first request should be configured before the second one may happen. If we decide to remove the first request from the script, we will remove the second and the third line, and won't get any errors from the compiler:

    let request = new Request(url)
    // request.method = "POST"
    // let first = request.send()
    request.body = payload
    let second = request.send()

Now the script is broken although it compiled without errors. This is what temporal coupling is about - there is always some hidden information in the code that a programmer has to remember. In this example, we have to remember that the configuration for the first request is also used for the second one, and that the second request should always stay together and be executed after the first one.

If the `Request` class were immutable, the requests would not be coupled, and removing one will not stop the other from working. 

    const post = new Request(url, "POST")
    const first = post.send()
    const second = post.send(payload)

### 4. Immutable Objects Avoid Side Effects

In computer science, a function or expression is said to have a **side effect** if it modifies some state outside its scope or has an observable interaction with its calling functions or the outside world besides returning a value.

In the following code, we only intended to send requests to 2 URLs, but another part of the app added a url, and now a side effect has occured where an unexpected & unwanted request is being sent. If `urls` was immutable, this could not have happened.

    let urls = ['cred.com', 'loans.com']
    
    // Some other part of the app makes an unexpected addition
    urls.push('refi.com')

    for (let i = 0; i < urls.length; i++) {
        sendXHR(urls[i])
    }

### 5. avoid identity mutability issues


## Sources

* s1: [Oracle - Immutability](https://docs.oracle.com/javase/tutorial/essential/concurrency/immutable.html)
* s2: [Wikipedia - Immutable Objects](https://en.wikipedia.org/wiki/Immutable_object)
* s3: [MDN Glossary - Mutable](https://developer.mozilla.org/en-US/docs/Glossary/Mutable)
* s4: [MDN Glossary - Symbol](https://developer.mozilla.org/en-US/docs/Glossary/Symbol)
* s5: [MDN - Using Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
* s6: [Wikipedia - Temporal Coupling](https://en.wikipedia.org/wiki/Coupling_(computer_programming)#Object-oriented_programming)




* [Objects Should be Immutable](http://www.yegor256.com/2014/06/09/objects-should-be-immutable.html)
* [Three Benefits of Using Immutable Object](https://medium.com/web-engineering-vox/3-benefits-of-using-immutable-objects-886ca2c56e85)
* [Why is immutability so important(or needed) in javascript?](https://stackoverflow.com/a/34385684)
* [Temporal Coupling](https://en.wikipedia.org/wiki/Coupling_(computer_programming))
* [XKCD - Side Effects](https://xkcd.com/1312/)
* [About Thread Safety in Javascript](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
* 


https://facebook.github.io/immutable-js/
https://www.google.com/search?q=benefits+of+immutability&oq=benefits+&aqs=chrome.1.69i57j69i59j69i60l2j69i61j0.75443j0j7&sourceid=chrome&ie=UTF-8
