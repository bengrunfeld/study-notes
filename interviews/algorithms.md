# Algorithms

Algos have several characteristics that can be used to describe them:

* Complexity
    - Space complexity: how much storage and space the algo needs
    - Time complexity: how efficient the algo is, relative to the size of the input it is given to work on (aka how much time does it take to complete)
* Inputs and Outputs
    - (What does the algo accept and what are the results)
* Classifications
    - serial (sequential) or parallel (concurrency), 
    - exact (known and predictable result) or approximate (e.g. facial recognition with 95% chance of success)
    - deteministic (executes each step with an exact decision) or non-deterministic (produces a solution with successive guesses, which become more accurate over time)

## Common Algos

* Search algos - find specific data in a data structure
* Sorting algos 
* Computational algos - take one set of data and derive another set of data from it
* Collection algos - filter out unwanted data, count specific items, etc

## Algo Performance - Big O Notation

We want to measure how the performance of an algorithm changes, based on the size of the input set of data.

The reason the letter O (in Big-O) is used is because the growth rate of an algorithm's time complexity is also referred to as the order of operation. 

It usually describes the **worst case scenario** of how long it takes to perform a given operation. And it's important to note that many different algorithms and data structures have more than one Big-O value.

Notation    | Description   | Example
------------|---------------|----------------------------------------
O(1)        | Constant Time | Looking up a single element in an array
O(log n)    | Logarithmic   | Find item in a sorted array with binary search
O(n)        | Linear Time   | Searching an unsorted array for a specific value
O (n log n) | Log-linear    | Complex sorting algos eg heap sort and merge sort
O(n^2)      | Quadratic     | Simple sorting algos like bubble-sort, selection, sort, etc

### O(1)

Big-O of 1: means that the operation in question doesn't depend on the number of elements in the given data set.

### O(log n)

As the number of items in the sorted array grows, it only takes a logarithmic time relationship to find any given item. 

### O(n)

As more items are added to the array in an unsorted fashion, it takes a corresponding linear amount of time to perform a search.

e.g. Insertion & Deletion in an array. Remember, we always consider the worst case scanario with Big-O.

**Insertion**: because if the array is already full and quite large, we'll need to copy all the items to a new array and add the new element.

**Deletion**: if we know the index of the item that we want to delete, then it's `O(1)`, but if we don't, then the worst case scenario is that we need to search through the entire array and the item is not even in the array, which is `O(n)`.

### O (n log n)

Log-linear time complexity.

### O(n^2)

As the number of items in the data set increases, the time it takes to process them increases at the square of that number. 



## Explanation of Log n in Big O Notation

https://stackoverflow.com/q/2307283/1676476

