"Maximum reliance on immutable objects is widely accepted as a sound strategy for creating simple, reliable code." - [source - Oracle](https://docs.oracle.com/javase/tutorial/essential/concurrency/immutable.html)

## But first, a joke...

![XKCD - Side Effects](https://imgs.xkcd.com/comics/haskell.png "Side Effects - https://xkcd.com/1312/")

### Definition of an Immutable Object

"In object-oriented and functional programming, an immutable object is an object whose state cannot be modified after it is created." – [Source - Wikipedia](https://en.wikipedia.org/wiki/Immutable_object)

[[MORE]]

### Example of a Mutable Object

    let username = 'Ben'
    username = 'Charles'

### Example of an Immutable Object

    const username = 'Ben'
    username = 'Charles'
    
    Uncaught TypeError: Assignment to constant variable.
    at <anonymous>:1:10

### Understanding Immutability in Javascript - Under the Hood

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
8. improve performance `*`
9. enable mutation tracking
10. provide failure atomicity
11. are much easier to cache
12. prevent NULL references, which are bad

`*` - debatable

### 1. Immutable Objects are Thread Safe

Immutable objects are thread safe. This means that multiple threads can access the same object at the same time without clashing with one another.

If no object methods can modify its state, no matter how many of them and how often they are being called parallel — they will work in their own memory space in stack.

In Javascript, Thread Safety is *usually* not an issue since the Browser is single threaded, meaning that only one command (of your code) is executed at a time.

That said, multi-threading is possible with Web Workers, which spawn real OS-level threads.

> However, since web workers have carefully controlled communication points with other threads, it's actually very hard to cause concurrency problems. There's no access to non-threadsafe components or the DOM. And you have to pass specific data in and out of a thread through serialized objects. So you have to work really hard to cause problems in your code.
  
That said, MDN themselves provide an example of a threading error using Web Workers, so it's possible.

[source MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)

![Meme: So you're telling me there's a chance](http://i0.kym-cdn.com/photos/images/original/000/840/283/350.png "Meme: So you're telling me there's a chance")

### 2. Immutable Objects are Simpler to Construct, Test, and Use

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

In the following code, we only intended to send requests to 2 URLs, but another part of the app added a url, and now a side effect has occurred where an unexpected & unwanted request is being sent. If `urls` was immutable, this could not have happened.

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

#### Identity mutability issues

In certain situations, you may want to use an Object Identity as a key in a Map (key value pairs). If this object is mutable, and its identity changes, it will no longer be usable as a key in that Map.

    let d1 = new Date()
    let guests = {}
    guests[d1] = "Value"
    console.log(guests[d1])         // Value
    d1.setDate(d1.getDate() + 1)    // Changed by something else
    console.log(guests[d1])         // Undefined

If using a `Date` object as a key is unpalatable to you, then consider if we were to use an object property as the key. 

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

#### Needing to know the contents of an object

If you don't truly know what the contents of the object you're working with are, it becomes much harder to predict what will happen.

#### Combining immutable objects with pure functions

If your object is immutable, and is passed to a pure function, as soon as it executes once correctly, you know that it will work the same way forever. 

### 8. Immutable Objects Help Improve Performance

#### Arguments that immutability hurts performance:

* Creating new objects in memory is more expensive that mutating existing ones
* Defensive copying (making a complete copy of an object and implementing changes on the copy instead of the original) creates a lot of garbage which would be avoided by mutating existing objects

**Oracle's rebuttal**

"Programmers are often reluctant to employ immutable objects, because they worry about the cost of creating a new object as opposed to updating an object in place. The impact of object creation is often overestimated, and can be offset by some of the efficiencies associated with immutable objects. These include decreased overhead due to garbage collection, and the elimination of code needed to protect mutable objects from corruption."

[source](https://docs.oracle.com/javase/tutorial/essential/concurrency/immutable.html)

#### Arguments that immutability improves performance

* Performance is largely a Productivity metric in a non-trivial codebase - i.e. developer performance
* With an increase to productivity and (thread) safety can often come an increase to practical performance, if only because the developers have more time to tune and optimize their code without being swarmed by bugs.

[source](https://softwareengineering.stackexchange.com/questions/304574/does-immutability-hurt-performance-in-javascript)


#### Regarding Immutable.js' performance

* Some people claim that Immutable.js is actually much faster than native Javascript in some circumstances.

[source](http://blog.klipse.tech/javascript/2016/06/23/immutable-perf.html)

* Immutable-focused libraries such as Immutable.JS have been designed to overcome the issues with immutability inherent within JavaScript

* In particular, immutably manipulating large, complex data sets, such as a nested Redux state tree, can generate many intermediate copies of objects, which consume memory and slow down performance as the browser’s garbage collector fights to clean things up. Immutable.JS avoids this by cleverly sharing data structures under the surface, minimizing the need to copy data.

[source](https://redux.js.org/docs/recipes/UsingImmutableJS.html)


### 9. Immutable Objects Enable Mutation Tracking

One of the more complicated operations in Javascript is tracking if an object changed.

Subscribing to data events throughout your application creates a huge overhead of book-keeping which can hurt performance, sometimes dramatically, and creates opportunities for areas of your application to get out of sync with each other due to easy to make programmer error.

[source](https://facebook.github.io/immutable-js/)

However, if you keep your state immutable you can just rely on `oldObject === newObject` to check if state has changed or not. This is way less CPU demanding.

[source](https://wecodetheweb.com/2016/02/12/immutable-javascript-using-es6-and-beyond/)


### 10. Immutable Objects Provide Failure Atomicity

"Failure atomicity" means that if a method threw an exception, the object should still be usable afterwards.

When using Immutable objects, failure atomicity happens by default, since the object's state cannot be modified. 

#### Example of lack of failure atomicity when working with mutable objects

    let size = 3
    let data = 'abc'
    while (size > -2) {
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

### 11. Immutable Objects are Much Easier to Cache

You can freely share and cache references to immutable objects without having to copy or clone them; you can cache their fields or the results of their methods without worrying about the values becoming stale or inconsistent with the rest of the object's state.

If an object is mutable, you have to exercise some care when storing a reference to it

[source](https://www.ibm.com/developerworks/library/j-jtp02183/index.html)

### 12. Immutable Objects Prevent NULL References, Which Are Bad

Tony Hoare once said: I call it my billion-dollar mistake. It was the invention of the null reference in 1965.

One reason why `null` references are evil is that you cannot see if a function could return null or not. There are many others. 

[source](http://sidburn.github.io/blog/2016/03/20/null-is-evil)

[source2](http://www.yegor256.com/2014/05/13/why-null-is-bad.html)

So, let's just agree for the moment that `null` is bad.

## Enforcing Immutability by Convention

Some developers may try to enforce immutability in their code by convention, but this approach has several problems regarding the capabilities and limitations of the language. 

### The Problem with Using Defensive Copying for Immutability

If Javascript, we can use `Object.assign` to perform defensive copying. As noted above, the problem is that extensive use of defensive copying has a significant performance cost, which is why it's best to use optimized libraries like Immutable.js that mitigate these issues. 

    const a = { name: "Ben"}
    const b = Object.assign({}, a)


### The Problem with Using `const` for Immutability

> [const] does not mean the value it holds is immutable, just that the variable identifier cannot be reassigned.

[source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)

The problem is that `const` creates a read-only variable, although if the variable is an object or an array, its properties are still mutable.

    const a = 5
    a = 6           // Uncaught TypeError: Assignment to constant variable.
    const b = { name: "Ben" }
    b.name = "Bob"  // Works without error
    const c = [1, 2, 3]
    c[0] = 5        // Works without error

### The Problem with Using `Object.freeze` for Immutability

> [Object.freeze] prevents new properties from being added to it; prevents existing properties from being removed; and prevents existing properties, or their enumerability, configurability, or writability, from being changed, it also prevents the prototype from being changed.

That sounds great! The variable can still be reassigned, but if we use `Object.freeze` together with `const`, we should be moving in the right direction... Nope!

The problem is that `Object.freeze` is shallow, meaning that if a frozen object contains other mutable objects, then it will not be truly immutable.

To ensure that it is truly immutable, every property needs to be recursively frozen (deep freeze), which can get dangerous. If an object contains [cycles](https://en.wikipedia.org/wiki/Cycle_(graph_theory)) (circular reference), then an infinite loop will be triggered.

Another danger is that if you recursively freeze everything in the object without knowing exactly what's in there, you may freeze something that should be frozen e.g. the `window` object.

[source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)

## Conclusion

Use **Immutable.js**. You get all of the benefits listed above, but the dangers of doing immutability yourself and the performance costs associated with techniques like defensive copying are mostly, if not entirely mitigated. 


## Other Sources

* [Objects Should be Immutable](http://www.yegor256.com/2014/06/09/objects-should-be-immutable.html)
* [Three Benefits of Using Immutable Object](https://medium.com/web-engineering-vox/3-benefits-of-using-immutable-objects-886ca2c56e85)
* [Why is immutability so important(or needed) in javascript?](https://stackoverflow.com/a/34385684)
* [About Thread Safety in Javascript](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
* [Mutability vs Immutability re Valid State](https://sidburn.github.io/blog/2017/02/27/mutability-vs-immutability-validation)
* [IMB - To mutate or not to mutate](https://www.ibm.com/developerworks/library/j-jtp02183/index.html)
* [Null References: The Billion Dollar Mistake](https://www.infoq.com/presentations/Null-References-The-Billion-Dollar-Mistake-Tony-Hoare)
