# Data Structures

Data structures are containers. They allow us to combine several pieces of data into a single structure.

A Data Structure is a collection with a defined way of accessing and storing items.

## Primatves 

Primatives are numbers (e.g. int, float, double, long, etc), characters, and booleans.

## Reference Types

Reference types are Strings, Arrays, Objects, and other Data Structures.

Since we use a reference to find where the data lives in memory, we call Strings and other Data Types implemented with data structures `Reference Types`. We also use the word `object` to describe a value in memory referenced by an identifier. 

Reference types reference their specific value from an address of where the item is stored rather than direct access to the data itself. This means if the address changes, the value the variable represents also changes. 

Again, it's important to remember that with reference types, we are adding this extra address layer whereas with primitive types, we directly access the data.

## Multi-Dimensional Array

A Multi-Dimensional Array is an array whose elements are all arrays of the same length. E.g.

    [[1, 2], [2, 4], [6, 8]]

## Jagged Arrays

A Jagged Array is a Multi-Dimensional Array where the elements are arrays which have different lengths. E.g.

    [[1, 2], [2, 4, -7], [9, 9, 0, 3]]

### Question:

What is the most efficient method to add or remove an item to an array - especially in Node.js? Is it `push/pop`, or to simply copy the entire array with/without the desired element to a new array with spread operator?

## Linked List

A Linked List is a linear data structure. However, the elements of a Linked List are not stored at contiguous locations (i.e. next to each other in memory). Instead, we link the elements using pointers. 

### My explanation:

A Linked List is similar to an array, but you MUST start with the first element of the array, which is called the `Head of the List`. The elements in a Linked List are called  `nodes`, and this first `node` contains data and also contains a pointer to the second `node` in the Linked List. The ONLY way to get to the second `node` is by following the pointer found in the first `node`. Once you get to the second `node`, you can use its pointer to get to the third `node`, and so on.

The way you know that you're at the end of the Linked List is when you reach a `node` whose pointer is `null`.

### Linked Lists vs Arrays:

* Adding an element to the front of the list
    - Linked List: `O(1)`
    - Array: `O(n)`
* Removing an element from the front of the list
    - Linked List: `O(1)`
    - Array: `O(n)` - if the element to remove is not the first or the last element of the array
* Getting an element in a known position
    - Linked List: `O(n)` - you have to walk down the list until you reach the position you want. (remember Big-O represents worst-case scenario)
    - Array: `O(1)` - you can access the element immediately.


### What Linked Lists are useful for

```
    Linked lists are very useful when you need to do a lot of insertions and removals, but not too much searching, on a list of arbitrary (unknown at compile-time) length.

    Splitting and joining (bidirectionally-linked) lists is very efficient.

    You can also combine linked lists - e.g. tree structures can be implemented as "vertical" linked lists (parent/child relationships) connecting together horizontal linked lists (siblings).

    Using an array based list for these purposes has severe limitations:

    Adding a new item means the array must be reallocated (or you must allocate more space than you need to allow for future growth and reduce the number of reallocations)
    Removing items leaves wasted space or requires a reallocation
    inserting items anywhere except the end involves (possibly reallocating and) copying lots of the data up one position

    Linked lists are very flexible: With the modification of one pointer, you can make a massive change, where the same operation would be very inefficient in an array list.
```

[Source: Stack Overflow](https://stackoverflow.com/a/2429320/1676476)

## Stacks

A stack is an ordered series of objects just like a list, but its intended use is slightly different. We push objectives onto the stack and pop objects off of it. 

Stack are like a stack of pancakes. If we want to add one, we add it to the top, because it is much easier (and faster) than lifting the whole stack of pancakes up and adding one to the bottom.

Similarly, if we want to remove one, we ALSO remove it from the top, since that is much easier (and faster) that lifting the whole stack up and removing one from the bottom.

Stack are referred to as `Last In First Out` (LIFO).

Furthermore, the first item pushed on the stack will be the last item removed from the stack.

* `push` - add something to the top of the stack
* `pop` - remove something from the top of the stack
* `peek` - see the item a the top of the stack

You can `push` as many items onto the stack as you want, but to remove one further down the stack, you must first `pop` every item on top of it off first, starting with the top of the stack.

### What Stacks are useful for

This makes stacks especially useful to keep track of state or when things have occurred.

Stack are GREAT for programs where you need to reverse things. Stacks allow you to rewind time, and retrace our steps as needed. 

One place where this shines is when you get an error - aka a stack trace, which allows you to retrace your steps to see where the error occurred. 

If the stack is empty, the only mutable operation that is valid is push. Popping an empty stack as we just saw here will cause an error because there's nothing to pop, there's nothing there. 

### Big-O for Stacks

Pushing, popping, and peeking takes Constant Time - `O(1)`

## Queues

Queues are similar to Stacks and Lists, but with different insertions and deletion rules.

Queues have elements inserted at the end of the queue and elements removed from the beginning of the queue.

Queues follow a `First In First Out` policy (FIFO).

* `enqueue` - add an item to the queue
* `dequeue` - remove an item from the queue
* `peek` - see the first item in the queue without removing it

The first item in the queue (the one you can peek at) is the next item to be dequeued.

Just like stacks, we implement queues with a List and limit how we operate on this data to create this data structure. In this case, we should be able to add to the back, remove from the front and access the first item without removing it. 

Queues are great for storing the order of things that need to happen. 

Like with stacks, the most common error that comes up is when you try to dequeue from an empty queue because we cannot remove anything from a queue that's empty. 

Now, there's other functionality you could add to this data structure. You could create a function that uses a loop to remove all the items from your queue or create a way to retrieve the size of your queue and more.

### What Queues are useful for

If you, your friend, and your roommate all send information to the printer, it will print out the information it received first. 

In operating systems Queues are often used for controlling access to shared system resources such as printers, files, communication lines, disks and tapes. 

They are also very commonly used in multi-threading and concurrency situations to keep track of what tasks are waiting to be performed and making sure we take them in that order.

### Big-O for Queues

Enqueuing to the back and dequeuing from the front is also very quick and takes constant time - `O(1)` because the queue has a doubly-linked list implementation.

## Specialized Queues

Along with our normal queues, we also have specialized queues that add extra elements and constraints to this data structure. 

### Priority Queues

First we have a priority queue, which is like a queue, but each element also has a priority associated with it. 

Items can be added at any time to our priority queue, but the next item to be dequeued is the item with the highest priority. 

The priority of a given element often determines when that element is dequeued because an element with a high priority is dequeued before an element with low priority. 

This priority could be as simple as a number so that new items could be added to the queue ahead of those already there. However, if you add multiple items that have the same priority, they will queue as normal first-in, first-out order. 

Of course, if something comes along with a higher priority, then it will go ahead of them in the queue, and it would be dequeued from the queue beforehand. 

Now what that priority means is up to you. Typically you'll have to implement a comparator or compare functions, as when sorting a raise, so that you can provide your own logic for what be considered a higher, lower, or equal priority. As for language support, priority queues are not as widely supported as regular queues. 

## Hashed-Based Data Structures

### Associative Arrays

An Associative Array is a collection of key-value pairs, and keys must be unique (although the values do not need to be).

With an Associative Array, we get a key which allows us to access our data in a meaningful way. In a regular array, the index doesn't have any special meaning - i.e. there is no semantic relationship between the index and the data that it points to. It only gives us an ability to store and access our data quickly.

We don't use the word index with associative arrays because we often don't worry about the order of the key-value pairs. The key is just the way we access the value in the pair. 

### Hashing

Hashing is a way of taking some raw data and mixing it together to form a smaller single piece of data.

We call the process of inputting the raw data to produce the final hash value a hash function. The raw data goes through a hash function in order to produce that final hash.

It's important to remember that these hash browns, and this final hash value are a simplified reference generated from the original data.

In code, we might input characters, objects, or numbers into a hash function. And the output would be an integer.

Well, almost without exception hash functions are not reversible. They are one way. This means you cannot feed the hash value into another function and get the original data back. And this is intentional. 

### Why use hashing? 

One use case is to encrypt User passwords so that you only store the hash in your database. This way, even if a hacker gains access, all they get is the hash, rather than the raw password. 

### Collisions

When two different inputs map to the same hash value or produce the same hash value when thrown into a hash function, we call it a collision. However, with the hash function, the same input will always produce the same output. Meaning that a single password or input will only have one hash value. 

You also might be thinking that this seems like encryption. But it isn't. With encryption, there's a way to decrypt the encrypted item. There is no way to unhash a hash value. 

In programming, we often use hash values as a way to get to or store a value at a certain location. 

### Hash Tables

Most associative arrays, whether they are dictionaries, maps, or hashes, are implemented using a hash table.

When a hash table iss created internally, it's really an array-based data structure where we add extra functionality to get us past the limitations of an array. 

We use the term `bucket` to describe each entry or place for a key-value pair to go in a hash table. We'll never add just a key or just a value. We'll always add a pair. 

Depending on the language, we might use the word `put`, `add` or `insert` to add a new key value pair. 

#### How it works:

When you provide a key to the hashing function, it returns an integer. This integer is then used as the index to store or retrieve data from the array that is actually being used behind the scenes. 

### When to Use a Hash Table

Data and hash maps is stored in such a way that searching is much faster than many other data structures. However, hash maps do take up more space. 

Insertion and deletion is also quick. There's a little bit of processing involved for retrieval and insertion, but it's the same amount of processing every time, no matter how big the hash table is. This means that lookup, insertion and deletion all take Constant Time - `O(1)`, because its runtime is consistent across any input. 

The only reason this might differ is if you have collisions and must handle them with separate chaining, which create linked lists with additional values.

There is no sorting with a hash-based data structure.

## Sets

A set is a collection of unique items. The order of the elements doesn't matter, but none of them can be duplicates.

Sets are a way of grouping things with a common property. E.g. 

    kitchenAppliances = {fork, spoon, mixer}

Often, we don't even want to retrieve a piece of data. That's why we don't have an index or a key, or anything specific to look up the value.

What we care about with Sets is membership. Usually, we are just testing if a piece of data is a member in that Set. 

We care about if the set contains a given number, character, or string, and in implementation, this structure will be optimized for this specific operation. 

Behind the scenes, sets are actually using the same idea of hash tables most of the time. Instead of hashing a key to store a separate value object, when you're using a set, the key is the value. 

We don't have two pieces of information, we're just adding one. So a set works by taking an object, hashing it, and then using the generated index to store the object itself. i.e. the key IS the value.

Then to check membership, we just repeat the process and see if this object is already stored. 

In checking to see if an object is in the set, we already need to have the object itself, which is why there is no point for using sets for data retrieval.

## Tree Data Structures






