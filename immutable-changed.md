"Maximum reliance on immutable objects is widely accepted as a sound strategy for creating simple, reliable code." - [source - Oracle](https://docs.oracle.com/javase/tutorial/essential/concurrency/immutable.html)

## Definition of an Immutable Object

"In object-oriented and functional programming, an immutable object is an object whose state cannot be modified after it is created." – [Source - Wikipedia](https://en.wikipedia.org/wiki/Immutable_object)

## Example of a Mutable Object

    let username = 'Ben'
    username = 'Charles'

## Example of an Immutable Object

    const username = 'Ben'
    username = 'Charles'
    
    Uncaught TypeError: Assignment to constant variable.
    at <anonymous>:1:10

[[MORE]]

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

[source - MDN Glossary](https://developer.mozilla.org/en-US/docs/Glossary/Mutable)

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

[source](https://benmccormick.org/2016/06/04/what-are-mutable-and-immutable-data-structures-2/)

Symbol is used to make object properties that are anonymous. This data type is used as the key for an object property when the property is intended to be private, for the internal use of a class or an object type.

[source - MDN Glossary](https://developer.mozilla.org/en-US/docs/Glossary/Symbol)

We will deal with `const` and `Object.assign` later in the talk.

## Benefits of Immutability

Immutable objects:

1. are thread safe
2. are simpler to construct, test, and use
3. avoid temporal coupling
4. avoid side effects
5. avoid identity mutability issues
6. avoid invalid state
7. increase predictability
8. increase performance `*`
9. enable mutation tracking
10. provide failure atomicity
11. are much easier to cache
12. prevent NULL references, which are bad

`*` - debateable

### 1. Immutable Objects are Thread Safe

Immutable objects are thread safe. This means that multiple threads can access the same object at the same time without clashing with one another.

If no object methods can modify its state, no matter how many of them and how often they are being called parallel — they will work in their own memory space in stack.

In Javascript, Thread Safety is *usually* not an issue since the Browser is single threaded, meaning that only one command (of your code) is executed at a time.

That said, multi-threading is possible with Web Workers, which spawn real OS-level threads.

> However, since web workers have carefully controlled communication points with other threads, it's actually very hard to cause concurrency problems. There's no access to non-threadsafe components or the DOM. And you have to pass specific data in and out of a thread through serialized objects. So you have to work really hard to cause problems in your code.
  
That said, MDN themselves provide an example of a threading error using Web Workers, so it's possible.

[source MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)

![Meme: So you're telling me there's a chance](http://i0.kym-cdn.com/photos/images/original/000/840/283/350.png "Meme: So you're telling me there's a chance")

### 2. Immutable objects are simpler to construct, test, and use

Mutable objects can have different internal states throughout their lifetime, all of which need to be tested explicitly. 

Imagine having to test the following:

    let request = new Request()

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

If `request` is mutable, then by the time it gets to `sendHXR`, you're not really sure what's in it. You have to write lots of extra tests to check and verify its internal state. 

If `request` was immutable, there would be no such uncertainty.

**Check this example with Bryce!!**

### 3. Immutable Objects Avoid Temporal Coupling

> Temporal Coupling occurs when two actions are bundled together into one module just because they happen to occur at the same time.

[source - Wikipedia](https://en.wikipedia.org/wiki/Coupling_(computer_programming)#Object-oriented_programming)

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

> A function or expression is said to have a **side effect** if it modifies some state outside its scope or has an observable interaction with its calling functions or the outside world besides returning a value.

[source](https://en.wikipedia.org/wiki/Side_effect_(computer_science))

In the following code, we only intended to send requests to 2 URLs, but another part of the app added a url, and now a side effect has occured where an unexpected & unwanted request is being sent. If `urls` was immutable, this could not have happened.

    let urls = ['cred.com', 'loans.com']
    
    // Some other part of the app makes an unexpected addition
    urls.push('refi.com')

    for (let i = 0; i  -2) {
        data.repeat(--size)
    }
    // Uncaught RangeError: Invalid count value

After this code runs, the `size` object will be left in an inconsistent (negative) state, causing any future method invocations on the object to fail.

Now lets try the same example using immutable objects

    const size = 3
    const data = 'abc'
    
    function repeater(num) {
      console.log(data.repeat(size - num))
      console.log(num) 
      if (num > 5)
        return 
    
      repeater(num + 1)
    }
    
    repeater(0)

You still get the error, but `size` is in a consistent and usable state

> After an object throws an exception, it is generally desirable that the object still be in a well-defined, usable state, even if the failure occurred in the midst of performing an operation. This is especially true for checked exceptions, from which the caller is expected to recover. Generally speaking, a failed method invocation should leave the object in the state that it was in prior to the invocation. A method with this property is said to be failure atomic.

> There are several ways to achieve this effect. The simplest is to design immutable objects. If an object is immutable, failure atomicity is free. If an operation fails, it may prevent a new object from getting created, but it will never leave an existing object in an inconsistent state, because the state of each object is consistent when it is created and can’t be modified thereafter.

> For methods that operate on mutable objects, the most common way to chieve failure atomicity is to check parameters for validity before performing the operation (Item 38). This causes any exception to get thrown before object modification commences.

[source](http://jtechies.blogspot.com/2012/07/item-64-strive-for-failure-atomicity.html)

### 11. Immutable Objects are much easier to cache

You can freely share and cache references to immutable objects without having to copy or clone them; you can cache their fields or the results of their methods without worrying about the values becoming stale or inconsistent with the rest of the object's state.

If an object is mutable, you have to exercise some care when storing a reference to it

[source](https://www.ibm.com/developerworks/library/j-jtp02183/index.html)

### 12. Immutable Objects prevent NULL references, which are bad

Tony Hoare once said: I call it my billion-dollar mistake. It was the invention of the null reference in 1965.

One reason why `null` references are evil is that you cannot see if a function could return null or not. There are many others. 

[source](http://sidburn.github.io/blog/2016/03/20/null-is-evil)

[source2](http://www.yegor256.com/2014/05/13/why-null-is-bad.html)



## Arguments Against Immutability

### 1. “It's cheaper to update an existing object than create a new one”. 
 
Oracle thinks that “The impact of object creation is often overestimated and can be offset by some of the efficiency associated with immutable objects. These include decreased overhead due to garbage collection, and the elimination of code needed to protect mutable objects from corruption.”

[source](https://docs.oracle.com/javase/tutorial/essential/concurrency/immutable.html)

Regarding Javascript the general consensus regarding low-level slowdown *without* using a library like Immutable that is highly optimized is that "it depends".

[source](https://softwareengineering.stackexchange.com/questions/304574/does-immutability-hurt-performance-in-javascript)

## Enforcing Immutability by Convention

### The Problem with `const`

> [const] does not mean the value it holds is immutable, just that the variable identifier cannot be reassigned.

`const` was created to move Javascript in the right direction regarding immutability. It creates an read-only variable, although if the variable is an object or an array, its properties are still mutable.

    const a = 5
    a = 6           // Uncaught TypeError: Assignment to constant variable.
    const b = { name: "Ben" }
    b.name = "Bob"  // Works without error
    const c = [1, 2, 3]
    c[0] = 5        // Works without error


### Defensive Copying

If Javascript, we use `Object.assign` to perform defensive copying. As noted above, extensive use of defensive copying has a significant performance cost, which is it is best to use optimized libraries like Immutable.js, which mitigate a lot of these performance costs. 

    const a = { name: "Ben"}
    const b = Object.assign({}, a)


## Other Sources

* [Objects Should be Immutable](http://www.yegor256.com/2014/06/09/objects-should-be-immutable.html)
* [Three Benefits of Using Immutable Object](https://medium.com/web-engineering-vox/3-benefits-of-using-immutable-objects-886ca2c56e85)
* [Why is immutability so important(or needed) in javascript?](https://stackoverflow.com/a/34385684)
* [XKCD - Side Effects](https://xkcd.com/1312/)
* [About Thread Safety in Javascript](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
* [Mutability vs Immutability re Valid State](https://sidburn.github.io/blog/2017/02/27/mutability-vs-immutability-validation)
* [IMB - To mutate or not to mutate](https://www.ibm.com/developerworks/library/j-jtp02183/index.html)
* [Null References: The Billion Dollar Mistake](https://www.infoq.com/presentations/Null-References-The-Billion-Dollar-Mistake-Tony-Hoare)
 </anonymous>