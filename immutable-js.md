# Immutable.js

"Maximum reliance on immutable objects is widely accepted as a sound strategy for creating simple, reliable code." - [source - Oracle](Oracle - Immutability](https://docs.oracle.com/javase/tutorial/essential/concurrency/immutable.html)

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

Symbol is used to make object properties that are anonymous. This data type is used as the key for an object property when the property is intended to be private, for the internal use of a class or an object type.

[source - MDN Glossary](https://developer.mozilla.org/en-US/docs/Glossary/Symbol)

We will deal with `const` and `Object.assign` later in the talk.

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

[source MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)

![Meme: So you're telling me there's a chance](http://s2.quickmeme.com/img/80/80585fa126afe931d3686d9aa0c47e36d7b7b3db27bf52f7ce66f9e86bf91b3e.jpg "Meme: So you're telling me there's a chance")

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

    for (let i = 0; i < urls.length; i++) {
        sendXHR(urls[i])
    }

[XKCD - Side Effects](https://xkcd.com/1312/)

### 5. Immutable Objects Avoid Identity Mutability Issues

In my research, I found 2 different opinions on what Object Identity means. 
    
    * Reference Identity - the identity of an object is what address it points to in memory 
    * Value Identity - the identity of an object consists of the values it contains. 

#### Equality

i.e. With regard to Reference Identity, 2 objects are considered equal if they both point to the same place in memory. Re Value Identity, 2 objects are considered equal if they contain the same values.

[source - Oracle](https://community.oracle.com/docs/DOC-983568)

For the purposes of this lecture, I'm only going to deal with **Value Identity**.

#### Indentity Mutability Issues

In certain situations, you may want to use an Object Identity as a key in a Map (key value pairs). If this object is mutable, and its identity changes, it will no longer be usable as a key in that Map.

    let d1 = new Date()
    let guests = {}
    guests[d1] = "Value"
    console.log(guests[d1])         // Value
    d1.setDate(d1.getDate() + 1)    // Changed by something else
    console.log(guests[d1])         // Undefined

If using a `Date` object as a key is unpaletable to you, then consider if we were to use an object property as the key. 

e.g. 

    let person = new Person({id: 1234, name: "Ben"})
    let guests = {}
    guests[person.id] = "Ben Grunfeld"
    person.id = "4321"


### 6. Immutable Objects Avoid Invalid State

Ensuring that a mutable object maintains a valid state can be extremely difficult. Imagine we have a rate (e.g. APR) that has a minimum and a maximum, and that the current value must stay between those two limits.

    let rate1 = new Rate({min: 1, max: 100, current: 50})
    rate1.max = 45

The object is now in an invalid state. Of course, we can enforce coding standards by convention, but it's hard to know how other parts of the application will use our code and if they will follow our conventions. If our object is mutable, then we have to start checking validity both in the constructor (when the object is created) and on any mutation. 

Here is an incomplete list of rules to ensure valid state when using mutable objects:

* Rule 1: Always re-validate every rule to ensure the correctness of an object.
* Rule 2: You must always validate before mutating.
* Rule 3: The second rule doesn't need to be followed in a constructor. In a constructor you are always allowed to mutate and then validate afterwards.
* Rule 4: If there is a way to fix an invalid object, you are allowed to mutate and validate even outside of a constructor.
* Rule 5A: Mutable objects must have some kind of notification mechanism when they change.
* Rule 5B: Mutable objects must have a Copy function that can create deep copies of an object.
* Rule 6A: Every mutable object we return must have a `changed` event that gets fired when an object was mutated.
* Rule 6B: Never return mutable objects directly. Return defensive copies instead.
* Rule 6C: Don't allow access to internal mutable objects at all.
* Rule 7: Events can only be used if there is a way to fix an invalid object. If there is no way to fix an invalid object, use defensive copies.
* Rule 8: If your mutable objects are accessed by multiple threads (mutable shared state) you also must add synchronization primitives to avoid race conditions that can bring an object into an invalid state.
* Bonus Rule: Just because every method of an object has synchronization primitives doesn't mean it is thread-safe. Because of this, you probably want to ignore Rule 8.

Agreeing on a set list of such rules inside of a large engineering team is *difficult* (to say the least). As the saying goes, "2 programmers, 3 opinions". Educating new devs in the above rules and enforcing/ensuring that they are ALL implemented becomes a big headache really quickly, and I'd argue that it borders on being impossible. People make mistakes, especially when things are complex - it's simply human nature. 

Alternatively, when using truly Immutable objects, there are only two rules for ensuring valid state.

* Rule 1: All validation logic must be contained in the constructor.
* Rule 2: The constructor must be used when instantiating an object.

Now that is MUCH simpler, and easier to agree upon and enforce in a large engineering team. 

[source](https://sidburn.github.io/blog/2017/02/27/mutability-vs-immutability-validation)


### 7. Immutable Objects Increase Predictability

If you don't truly know what the contents of the object you're working with are, it becomes much harder to predict what will happen. 

### 8. Immutable Objects Cause Increased Performance

### 9. Immutable Objects Enable Mutation Tracking

### 10. Immutable Objects Provide Failure Atomicity



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

One workaround 

    const a = { name: "Ben"}
    const b = Object.assign({}, a)


## Other Sources

* [Objects Should be Immutable](http://www.yegor256.com/2014/06/09/objects-should-be-immutable.html)
* [Three Benefits of Using Immutable Object](https://medium.com/web-engineering-vox/3-benefits-of-using-immutable-objects-886ca2c56e85)
* [Why is immutability so important(or needed) in javascript?](https://stackoverflow.com/a/34385684)
* [XKCD - Side Effects](https://xkcd.com/1312/)
* [About Thread Safety in Javascript](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
* [Mutability vs Immutability re Valid State](https://sidburn.github.io/blog/2017/02/27/mutability-vs-immutability-validation)


https://facebook.github.io/immutable-js/
https://www.google.com/search?q=benefits+of+immutability&oq=benefits+&aqs=chrome.1.69i57j69i59j69i60l2j69i61j0.75443j0j7&sourceid=chrome&ie=UTF-8
