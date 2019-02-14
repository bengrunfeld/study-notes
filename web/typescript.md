# TypeScript

TypeScript enables developers to perform static type checking inside their Javascript code.

## Installing

    npm install -g typescript

## Command Line Interface (CLI) Usage

TypeScript files must use the extension `.ts`. The CLI command is `tsc`

    tsc target.ts destination.js

## Warnings vs Errors

Even if there are errors in the code, TypeScript will issue a warning, but still compile the Javascript file. Its job is to tell you that your code won't run as expected.

## Basic Types

    let msg: string = 'hello'                       // string
    let someNumber: number = 123                    // number
    let arrayOfNums: number[] = [1, 2, 3]           // array of type number
    let arrayOfNums: array<number> = [1, 2, 3]      // array of type number
    let tuple: [string, number] = ['ben', 37]       // tuple
    let anyVar: any = 10                            // can be any type 
    let u: undefined = undefined;                   // undefined
    let n: null = null;                             // null
    let object = {name: 'ben', age: 37}
    let isTrue: boolean = true

### Void

`void` means no type at all is acceptable. Usually it is used as a return type for a function that doesn't return anything. You can only assign undefined or null to `void`

    function sayHello(): void {
        console.log('Hello there')
    }

### Never

`never` is the return type for a function expression or an arrow function expression that always throws an exception or one that never returns.

    // Function returning never must have unreachable end point
    function error(message: string): never {
        throw new Error(message);
    }

### strictNullChecks

the `--strictNullChecks` flag when used only allows `null` and `undefined` to be assignable to `void` and their respective types. I.e. non-explicit uses of `null` will generate an error. This avoids many problems associated with `null`. Usage of `--strictNullChecks` is strongly encouraged.

### Union Types 

You can specify that any of the specified types are allowable.

    let a: null | undefined | string = 5      


### Assertion Types

Sometimes you'll want to override the Type Checker because you know the value will eventually be of the type that you specify.

    class Person {}
    class Student extends Person {}
    
    let a: Person = new Student()
    let b: Student = <Student>a
    let c: Student = a as Student           // alternative syntax, use with JSX

## Interface Declaration 

Interfaces define an object shape that must be used for the code to be valid. 

    interface Person {
        firstName: string
        lastName: string
    }
    
    function sayHello(first, last) {
        return `Hello there, ${first} ${last}`
    }
    
    const user = {firstName: 'Ben', lastName: 'Grunfeld'}
    
    sayHello(user)

Classes and interfaces play well together.

### Optional Properties

Prefixing a property name with `?` makes it optional. That means that if a varaible that otherwise fits the shape of the Interface is defined, but does not contain that property, no error will be triggered.

### Readonly properties

Prefixing a property name with `readonly` makes it immutable after initialization.

### Excess Type Checking

    interface Person {
        first?: string
        last?: string
    }
    
    function greet(someGuy: Person): {first: string; last: string} {
        return first + last
    }
    
    let newGuy = {first: 'Ben', lassst: 'Grunfeld'}             // throws

If an object literal has any properties that the `target type` doesn’t have, you’ll get an error.

If you need to get around this `Excess Type Check`, you can simply use a `Type Assertion`.

    let newGuy = {first: 'Ben', lassst: 'Grunfeld'} as Person



## Class Definition

The use of the term `public` on arguments to the `constructor` is a shorthand that allows us to automatically create properties with that name. It effectively runs the code `this.prop = prop`. 

    class Customer {
        full: string
    
        constructor(prefix, first, last) {
            this.full = prefix + first + last
        }
    }
    
    interface Person {
        first: string
        last: string 
    }
    
    function sayHello(person: Person) {
        return `Hello there, ${person.full}`
    }
    
    let student = new Student('Mr', 'Ben', 'Grunfeld')
    
    sayHello(student)

You'll see that `prefix` is not defined in the `interface`. That's because with TypeScript, we can decide what to statically type, and what not to. It's not an "all or nothing" case. 

## 

