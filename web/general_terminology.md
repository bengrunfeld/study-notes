# General Terminology

    let a   // Declaration
    a = 5   // Initialization
    a = 7   // Assignment

In Javascript, **Declarations** and **Definitions** are the same thing. 

## Declaration

A **declaration** introduces an identifier and describes its type, be it a type, object, or function. A declaration is what the compiler needs to accept references to that identifier.

    let a
    const b

## Definition

A **definition** actually instantiates/implements this identifier. It's what the linker needs in order to link references to those entities.

    // In Javascript, it's the same as Declaration
    let a


## Initialization

Gives a variable its initial value. That said, according to the spec, all variables are initialzed with the value `undefined`.

## Assignment 

Assignment means the act of `assigning` a value to a variable. The `=` assignment operator assigns a value to a variable.


