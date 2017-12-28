# Ruby

Credit goes to the Ruby Essential Training course at [Lynda.com](https://lynda.com)

## Single Ruby Command

    ruby -e 'puts 123'

* `puts` - prints a value and appends a newline to the end
* `print`- prints a value and DOESN'T append a newline to the end


## IRB - Interactive Ruby Shell

`irb` - to begin

## Nil

`nil` is essentially `null`. You can test if a value is `nil` with `?`

    x = nil
    x.nil?              # true

## Ruby Information - Docs

`ri` is almost like using `man` in Unix. It stands for Ruby Information. 

e.g. `ri upcase`

## Ruby Objects

There are no real primitives. Primitives don't have a common relationship to each other. In Ruby, everything is an object. 

## Variables Scoping

    $var            # Global
    @@var           # Class
    @var            # Instance
    var             # Local
    var             # Block

## The `class` method

You can see the class that an object belongs to by using the `class` keyword.

    1234.class          # Fixnum
    12489010941.class   # Bignum
    '1234'.class        # String

## Number methods

* `round` - rounds up
* `to_i` - casts as int
* `floor` - rounds down
* `ceil` - similar to round

## String interpolation and methods

Only works with double quotes.

    a = 5
    puts "value of a is #{a}"
    puts "#{5 + 5}"

* `reverse`
* `capitalize` 
* `upcase` 
* `downcase` 
* `length`
* `to_s` – cast as String

Can use chaining

    "Hello".reverse.upcase.length

## Arrays

    arr = [1, 2, 3]
    arr[1]                  # 2
    arr << 4                # 1, 2, 3, 4
    arr.clear               # []
    arr.inspect             # "[1, 2, 3, 4]"
    puts arr.inspect        # [1, 2, 3, 4]
    arr.to_s                # "[1, 2, 3, 4]"
    arr.join                # "1234"
    arr.join(', ')          # "1, 2, 3, 4"
    "1,2,3,4".split(',')    # [1, 2, 3, 4]
    arr.reverse             # [4, 3, 2, 1]
    arr.sort                # [1, 2, 3, 4]

    arr2 = [1, 2, 2]        
    arr2.uniq               # [1, 2]
    arr2.insepct            # [1, 2, 2]
    arr2.uniq!              # [1, 2]
    arr2.inspect            # [1, 2]
    
    arr3 = [3, 4, 5, 6]
    arr3.delete_at(1)       # [3, 5, 6] - returns deleted index
    arr3.delete(5)          # [3, 6] - searches array for term, not index!
    arr3.push(7)            # [3, 6, 7] - adds to end of array. Same as <<
    arr3.pop                # [3, 6] - removes and returns last index
    arr3.shift              # [6] - removes and returns first index
    arr3.unshift(2)         # [2, 6] - adds to beginning of array
    arr3 + [8, 9]           # [2, 6, 8, 9]
    arr3 - [8, 9]           # [2, 6]
    arr3 - [6]              # [2] same as delete

## Hashes

Unordered, object-indexed collection of objects, aka key-value pairs. We can never count on a hash being in any particular order.

    person = {'name' => 'ben', 'age' => 37}
    person['name']          # ben
    person.index('ben')     # name
    person.keys             # name, age
    person.values           # ben, 37
    person.length           # 2
    person.size             # 2
    person.to_a             # [["name", "ben"], ["age", 37]] changes to array
    person.clear            # {}
    person = {}

## Symbols

A symbol is a label that is used to identify a piece of data.

    :someSymbol                     # declares a symbol

A symbol gets stored in memory one time, whereas a string gets stored in memory many times. Below you can see that a new object is not created for symbol, but it is for string.

    "test".object_id                # id-1
    "test".object_id                # id-2
    :symbl.object_id                # id-3
    :symbl.object_id                # id-3

Symbols are designed to be used in hashes, because they **conserve memory**. So if you are looping and creating 10 new Person objects, and each of them has a key labelled "name", then if you use a String, 10 places will be created in memory, but if you use a Symbol, then only one place will be created in memory, and it will be reused 10 times.

## Boolean Methods

    x = 5 
    x.nil?                          # false
    x.between?(2, 6)                # true
    y = [1, 2, 3]
    y.empty?                        # false
    y.include?(3)                   # true
    z = {:a => 1, 'b' => 2}
    z.has_key?(:a)                  # true
    z.has_value(2)                  # true

## Ranges

Ranges are a run of numbers from start to end.

    1..4                # Inclusive - 1, 2, 3, 4
    1...4               # Exclusinve - 1, 2, 3
    1..10.class         # Error
    (1..10).class       # Works! Range
    x = 1..5
    x.first             # 1
    x.begin             # 1
    x.last              # 5
    x.end               # 5
    y = [*x]            # [1, 2, 3, 4, 5]

Be careful with exclusive Ranges. Here's why:

    x = 1...4
    x.end               # 4
    x.include?(4)       # false
    x.include?(3)       # true

You can also create alphabetic ranges:

    alpha = a..d        
    z = [*alpha]        # a, b, c, d

## Constants

Constants are similar to variables in that they are not true objects, but they do point to objects.

Declare constants with full upper case, or with an upper case first letter

    TEST = 5
    Name = 'Ben'

That said, if you perform an assignment on them, Ruby will issue a warning, but it WILL perform the assignment

    TEST = 6        # Warning
    TEST            # 6

## Conditionals

    if boolean
        ...
    end

    if boolean
        ...
    elsif boolean
        ...
    else 
        ...
    end

Tabs are not used by Ruby. They're just there for our benefit. 

You can also have a one liner

    x = true
    puts 'hello' if x           # hello

### Unless

Unless is the same as `if !boolean`

    unless boolean
        ...
    elsif boolean
        ...
    end

### Case

    case
    when boolean
        ...
    when boolean
        ...
    else 
        ...
    end

Or you can use the following syntax

    case test_value
    when value
        ...
    when value
        ...
    else
        ...
    end

### Ternary

    boolean ? code1 : code2

    puts x ==1 ? 'one' : 'not one'

## Or

Same as Javascript

    x = y || z

If `y` doesn't exist, default to `z`

## Xor

unless x already has a value, set it to y

    unless x
        x = y
    end

    x || = y

## Loops

Same as a while loop.,

    loop do
        ...
    end

We use the following to control the loop
    
    * break - Terminate the whole loop
    * next - Jump to next iteration of the loop
    * redo - Restart this loop
    * retry - Start the whole loop over

e.g.
    
    x = 0
    loop do
        x += 2
        break if x > 6
        puts x
    end
    
    # 2, 4, 6

### While

This simply has the break condition built into it. 

    while boolean
        ...
    end

### Until

until = While it is not true

    until boolean
        ...
    end

You can also use these in one liners

    x = 0
    puts x+=2 while x < 10
    puts x+=2 until x > 20

## Iterators

Iterators are similar to loops, except that they traverse a fixed set of data. We know where the starting point and ending point is. An iterator says "For each one of these things, do this process".

Similar to map, forEach in JS.

Instead of writing

    x = 0
    while x < 5
        x ++
        puts 'Hello'
    end

We can use:

    5.times do
        puts "Hello"
    end

    1.upto(5) {puts 'Hi'}
    5.downto(1) {puts 'Hi'}
    (1..5).each {puts 'Hi'}

We also have access to the value

    1.upto(5) do |i|
        puts "Hello" + i.to_s
    end

We can also use `for`, which is the same as an `each`

    veggies = ['brocolli', 'carrot', 'yam']
    for veg in veggies
        puts veg.capitalize
    end
    
    # Brocolli, Carrot', Yam

We can still use `break`, `next`, `redo`, and `retry` with Iterators. Although `redo` and `retry` are more useful.

`retry` says go back to the beginning of the set

### List of Iterators

* Ints/floats - times, upto, downto, step
* Range - each, step
* String - each, each_line, each_byte
* Array - each, each_index, each_with_index (each item with its index)
* Hash - each, each_key, each_value, each_pair

## Code Blocks

The most common code block methods are:

* `find`
* `merge`
* `collect`
* `sort`
* `inject`

### Find

We use various find methods to find objects inside a dataset.

* `find/detect`
* `find_all/select`
* `any?`
* `all?`
* `delete_if` - find something, and then delete it, all in one step

E.g's:

    (1..10).find {|i| i == 5}           # 5
    (1..10).find {|i| i % 3 == 0}       # 3 Only returns first instance of
    (1..10).detect {|i| i == 5}         # 5
    (1..10).detect {|i| i % 3 == 0}     # 3 Only returns first instance of
    (1..10).find_all {|i| i % 3 == 0}   # 3, 6, 9 Returns all instances of
    (1..10).select {|i| i % 3 == 0}     # 3, 6, 9 Returns all instances of    
    (1..10).any? {|i| i % 3 == 0}       # true. returns true if is true  
                                        # for ANY inside the set
    (1..10).all? {|i| i % 3 == 0}       # false. returns true if is true  
                                        # for ALL inside the set
    [*1..10].delete_if {|i| i % 3 == 0}         # same as filter in Javascript

### Merge

Is used for merging Hashes together. ONLY used with Hashes. Merge does not change original values, unles you use `!`. If you use `.merge!`, original values get overwritten.

    h1 = {'a' => 1, 'b' => 555}
    h2 = {'b' => 2, 'c' => 3}
    h1.merge(h2)                    # {"a"=>1, "b"=>2, "c"=>3}

Above we've used it just as a one-liner. If we define a code block, that will only be called if there is a conflict - e.g. `b`

    h1.merge(h2) {|key, old, new| old}          # old value gets used
    h1.merge(h2) {|key, old, new| new}          # new value gets used
    h1.merge(h2) {|key, old, new| new * 2}      # new value gets used

    h1.merge(h2) do |k, o, n|
        if old < new
            old
        else
            new
        end
    end

although we could write this as

    h1.merge(h2) {|k, o, n| o < n ? o : n}


## Collect / Map

Collect and Map are exactly the same. Multiple names for the same thing. Yuchk...

Works with `arrays`, `hashes`, and `ranges`.

Works the same as Javascript `map`, except that you have to specify the return value for non matches. E.g.

    arr = ['a', 'b', 'c']
    arr.map {|val| val.capitalize if val == 'b'}
    # returns [nil, 'B', nil] - not what you'd expect, right?

    arr.map {|val| val == 'b' ? val.capitalize : val}


RULE 1: Number of items in = number of items out
RULE 2: Even though it works with Hashes and Ranges, it **always** outputs an array

NOTE: If you use `puts` in a Collect/Map, then the return array will be filled with `nils`, because `puts` always returns `nil`.














