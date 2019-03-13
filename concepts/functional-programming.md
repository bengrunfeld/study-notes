# HUUUUGE NOTE...

Every section should begin in the same way, and have a section: Why is this important.

**Curring**: is the concept that each function only accepts one argument. If a second argument is needed, the function should return another function which accepts the second argument, and so on.

**Why its important:** Because functions know exactly what to expect this way.


# TOC

* Regression
* Closures
* Currying
* Immutability
* Functors
* Monads
* Applicatives
* High-Order Functions
* Composition


# Functional Programming

## Functors

Functors are any object that you can map over. The classic example of this is an array.

    const a = [1, 2, 3].map(x => x + 2)

Functors need to follow several laws:

### Structural Integrity Law

Map is not allowed to change the structure of the functor. So if the functor (e.g. array) has a length of 3, then `map` will return an array with a length of 3. 


### The Identity Law

    functor.map(x => x) ≡ functor

The Identity Law states that if you map over something (e.g. an array), and your map function simply returns the passed value, the output should be equal to the original. E.g.

    [1, 2, 3].map(x => x)   // outputs [1, 2, 3] - hence this follows the Identity Law

### The Composition Law

    functor.map(x => f(g(x))) ≡ functor.map(g).map(f)

The Composition Law states that calling one function inside of another function and then mapping over the output should give you the same result as mapping over the first function and then mapping over the second function. E.g.

    const a = [1, 2, 3]
    const addOne = n => n + 1
    const addTwo = n => n + 2

    a.map(x => addOne(addTwo(x)))

    a.map(x => addOne(x)).map(y => addTwo(y))

Here is an example that is a little more complex and uses Objects and Strings. 

  const a = {name: 'ben', city: 'denver', state: 'colorado'}




