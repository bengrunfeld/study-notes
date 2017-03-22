# Coding Practices

## Ternary Operators

If you have an `if` statement that looks like the following, change it to a ternary operator

      if (a === b) {
        return true
      } else {
        return false
      }

It should be:

    (a === b) ? true: false

## Don't Use Push with Arrays

Push will mutate the existing array, which breaks the rule of immutability in functional programming. 

Previously, to add something to an array, we would have used `array.push`. Now we can use the `...` operator

    let newArr = [...prevArray, newValue]

## Removing Elements from an Array

We use the filter method to remove something from an array, in a way that adheres to the principles of functional programming. 

The filter method constructs and returns a new array. It keeps the current array intact, so our existing array stays immutable. 

The filter method expects a callback function, which will be run on each index in the array. We call this function a predicate, because it expects a result of `true` or `false`. If the function returns `true`, then this item will be added to the array. If it returns `false`, then this item will be filtered out, and hence it will not be added to the array. E.g.

    let oldArray = [1, 2, 3, 4, 5, 6]
    let removeIndex = 5
    let newArray = oldArray.filter ((item, i) => i !== removeIndex)

When `i` becomes equal to `removeIndex`, then the item at that index will be removed from the array. 

## Checking for Duplicates

The `some()` method will tell us when some of the items in a array match specific criteria. Like filter, it takes a callback function and runs that function for each item in the array. So we want to see if *some* of the items in the array are duplicates. 

    namesList = ['adam', 'ben', 'charlie']
    newName = 'doug'
    newName2 = 'ben'
    
    // False - item doesn't already exists - add to array
    nameExists = namesList.some((item, i) => item === newName)
    nameExists ? namesList: [...namesList, newName]
    
    // True - item already exists - filter out from array
    nameExists = namesList.some((item, i) => item === newName2)
    nameExists ? namesList: [...namesList, newName]









