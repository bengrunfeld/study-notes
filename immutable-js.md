# Immutable.js

## Installation

### via npm 

    npm install --save

**to use**

    require('immutable')
    import 'immutable' from immutable

### in the console

    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/immutable/3.8.2/immutable.min.js';
    document.head.appendChild(script);

Now you can play around with Immutable during the talk.

### What is Immutable.js

A library that provides persistent immutable data structures, referred to as `Collections`, including: `List`, `Stack`, `Map`, `OrderedMap`, `Set`, `OrderedSet` and `Record`.

### Why Immutable.js?

* The library is optimized for Javascript to be much faster than native Javascript immutability techniques (e.g. defensive copying with `Object.assign` and recursive `Object.freeze`)
* Check out Benefits of Immutability at [bit.ly/imutble](bit.ly/imutble)

### Difference between Immutable.js and Javascript

Immutable.js is designed to closely mirror ES2015 `Map`, `Array`, and `Set`.

The difference is that instead of mutating the existing collection, all methods return a **new** immutable collection. 

Almost all of the ES2015 methods on `Array`, `Map`, and `Set` will be found in similar form on `Immutable.List`, `Immutable.Map`, and `Immutable.Set`

### Use raw Javascript objects and arrays

Immutable.js accepts plain JavaScript Arrays and Objects anywhere a method expects an `Collection`.

    const map1 = Map({ a: 1, b: 2 })
    const obj = { c: 3, d: 4 }
    const map2 = map1.merge(obj)
    // Map { a: 1, b: 2, c: 3, d: 4 }


### Convert back to raw JavaScript objects.

All Immutable.js Collections can be converted to plain JavaScript Arrays and Objects shallowly with `toArray()` and `toObject()` or deeply with `toJS()`. All Immutable Collections also implement `toJSON()` allowing them to be passed to `JSON.stringify` directly.


### Immutable.js and ES2015

All Immutable.js collections are Iterable, which allows them to be used anywhere an Iterable is expected, such as when spreading into an Array.

    const { List } = require('immutable')
    const nums = List([ 1, 2, 3 ])
    const anArray = [ 0, ...nums, 4, 5 ]    // [ 0, 1, 2, 3, 4, 5 ]


### Nested Structures

The collections in Immutable.js are intended to be nested, allowing for deep trees of data, similar to JSON.

    const { fromJS } = require('immutable')
    const nested = fromJS({ a: { b: { c: [ 3, 4, 5 ] } } })
    // Map { a: Map { b: Map { c: List [ 3, 4, 5 ] } } }

Immutable.js methods such as `mergeDeep`, `getIn`, `setIn`, and `updateIn` help you to work with deeply nested data.

### Comparing Immutable.js objects

Immutable.js collections are treated as pure data values. Two immutable `Collections` are considered value equal (via `.equals()` or `is()`) if they represent the same collection of values.

    // First consider:
    const obj1 = { a: 1 }
    const obj2 = { a: 1 }
    obj1 !== obj2
    
    const map1 = Map({ a: 1 })
    const map2 = Map({ a: 1 })
    map1 !== map2 // two different instances are not reference-equal
    map1.equals(map2) // but are value-equal if they have the same values
    is(map1, map2) // alternatively can use the is() function

Value equality allows Immutable.js collections to be used as keys in Maps or values in Sets, and retrieved with different but equivalent collections:

### Performance considerations

When comparing two `Collections`, checking reference equality is very fast, since only the memory addresses are compared. Checking value equality is slower in large `Collections`, since every value in the Collection must be checked. That said, inequality between two `Collections` can be very fast if they are very different to each other.

### Batching mutations

Performing a mutation that creates and returns a new `Collection` can incur a performance penalty. 

If you need to apply a series of mutations locally before returning, Immutable.js gives you the ability to create a temporary mutable (transient) copy of a collection and apply a batch of mutations in a performant manner by using `withMutations`.

    const list1 = List([ 1, 2, 3 ]);
    const list2 = list1.withMutations(function (list) {
      list.push(4).push(5).push(6);
    });

Note, you can only use `set`, `push`, and `pop` in `withMutations`. Other methods like `map`, `filter`, `sort`, and `splice` will always return new immutable data-structures and **will NOT** mutate a mutable collection.



## Map

Keep in mind, when using JS objects to construct Immutable Maps, that JavaScript Object properties are always strings, even if written in a quote-less shorthand, while Immutable Maps accept keys of any type.