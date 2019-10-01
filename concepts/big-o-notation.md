# Big O Notation - Asymptotic Analysis

How time scales with respect to some variables. Big O is an equation that expresses how the runtime changes and scales.

## Do we need to use `n`?

No, many times, it makes more sense to use other variables besides `n`.

## Big O Rules

### Rule 1: Add up steps

If you have 2 different steps in your algorithm, you add up those steps.

e.g. 

Step 1 = a
Step 2 = b

**Solution:** O(a + b) 

### Rule 2: Drop constants

    function minMax(array) {
        let min = 0, max = 0
        array.forEach(item => Math.min(item))       // n
        array.forEach(item => Math.max(item))       // n
    }

Many people would be tempted to represent the above function as `O(2n)`, but because we drop constants with Big O, it's written as `O(n)`.

We're really look at how things scale roughly. We're looking to see if it's a linear relationship or a quadratic relationship.

### Rule 3: If you have different inputs, use different variables to represent them

    function checkIfSame(array1, array2) {
        let count = 0
    
        array1.forEach(a => 
            array2.forEach(b => {
                if (a === b) 
                    count++
            })
        )
    
        return count
    }

Many people would be tempted to represent the above function as `O(n²)`, but that would negate the meaning of `n`. `n` needs to mean something. In this context, it is the size of the array, so to be accurate, we need to write this as `O(a x b)`

### Rule 4: Drop non-dominant terms

    function doStuff(array) {
        array.forEach(item => Max(item))

        array.forEach(a => 
            array.forEach(b => {
                console.log(a, b)
            })
        )
    }

This could be represented as `O(n + n²)`, but a strange rule applies:

If the LEFT and RIGHT are equivalent, then the CENTER is too:

**O(n²) <= O(n + n²) <= O(n² + n²)**

Since `n²` is really the force driving this, we can drop everything else and just write it as `O(n²)`.

## More in Depth Explanation

Big O is a technique we use to analyze the efficiency of an algorithm. 

We're trying to compare how quickly the runtime of algorithms grow with respect to the size of their input.

We think of the runtime of an algorithm as a function of the size of the input, where the output is how much work is required to run the algorithm.

You can think of `O(g)` as a giant umbrella that covers all algorithms that are at least as fast as `g`.

We prefer algos that have a clear lead in the speed race, where other algos have no hope of catching up.

## Why we ignore constants

We can think of Big O analysis as a race, where `x` is the size of the input. 

Because the speed race has no finish point, constants do not matter, since we're looking at the bigger picture. This means that we only focus on the largest term in an expression and ignore everything else.

Hence: `x² = 5x² + 78x + 37`

## Linear Time

Some curves (algos) cannot be squeeze under other curves due to their shape. For example, a turtle and a car both go at a constant speed, but if we give a performance boost to the turtle, it will go faster than the car. This is called **linear** performance, and is represented by `O(n)`.

Since we can do this for all sloped lines, they fall under the same Big O.

## Algorithm Time

### Constant Time

Imagine a racer that can teleport. That means that it would take the same amount of time for them to travel any distance. We call this runtime `O(1)` or **constant time**.

This Big O covers ALL teleportation, whether it takes 1 second or 1 million years, since the time is constant, even if the distance is variable.


### Logarithmic Time 

Imagine a spaceship that doubles it speed with every passing unit of distance. This behavior is the inverse of the the Exponential Algorithm, and is represented by `O(log n)`.

### Linear Time 

When in the worst case scenario, you need to traverse the whole sequence to calculate the operation. For example finding an element in an unsorted list (find in array). 

### Quadratic Time

An algo with a loop is considered `O(n²)`, which is **quadratic**. A quadratic algo may seem faster than a linear algo in the beginning, but eventually the linear algo becomes faster. Even a performance boost cannot make the quadratic algo faster, as distance increases.

We group together all algos with the form `O(nᵏ)` under the term **Polynomial Time**, since the runtime is a polynomial function. 

### Exponential Time

Some algos repeat all previous steps before making the next one. These are considered `O(2ⁿ)`, and are VERY slow.


## Input Type

So far, we've been discussing increasing the input size as if it's the only influencing factor on the runtime. 

But the runtime of the algorithm often depends on the specific type of the input. 

Some inputs can cause the algorithms to run better or worse, even if they're the same size.

E.g. imagine if sorting an array or size x had a different runtime to sorting an object of equal size.

## Caveats

In some cases, Big O is not the be all and end all. Big O drops constants, but in certain cases, e.g. a game programmer where performance is extremely important, those constants might be important enough to be considered.

Also, there are cases where an algorithm which would usually be considered bad e.g. `O(2ⁿ)` may be better to use because it improves the readability of the code. 

If the input size is significantly small, using an algo with `O(2ⁿ)` complexity may not even matter.

So there are definitely cases where Big O should not be the determining factor in which algo to use. It is a suggestive tool which has it's uses, but you can't always use it to determine the right thing to do.
