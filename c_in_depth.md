#C In Depth

##Pointers and Addresses

A pointer is a variable that contains the address of a variable. Pointers and arrays are closely related. 

A typical machine has an array of consecutively numbered or addressed memory cells that may be manipulated individually or in contiguous groups. One common situation is that any byte can be a char, a pair of one-byte cells can be treated as a short integer, and four adjacent bytes form a long.

A pointer is a group of cells (often two or four) that can hold an address.

A pointer is constrained to point to a particular kind of object: every pointer points to a specific data type. (There is one exception: a 'pointer to void' is used to hold any type of pointer but cannot be dereferenced itself.)

##The `&` Operator

The unary operator & gives the address of an object, so the statement
	p = &c;
assigns the address of c to the variable p, and p is said to "point to" c.
The & operator only applies to objects in memory: variables and array elements. It cannot be applied to expressions, constants, or register variables.

##The `*` Operator
The unary operator * is the indirection or dereferencing operator; when applied to a pointer, it accesses the object the pointer points to.
	int *x;
Declares `x` as a being a pointer of type `int`.
	x = &a;
Makes `x` point to the memory address of where the value of the variable `a` is stored.
	*x = 10 
will now change the value of `a`. Must be used with `*`, otherwise C will throw an error.

I.e. If `x` points to the integer `a`, then `*x` can occur in any context where `a` could. E.g.

	(*x)++;
	++*x;	The parentheses are necessary in the top example; without them, the expression would increment `x` instead of what it points to, because unary operators like * and ++ associate right to left.In functions `atof(char *)` says that the argument of `atof` is a pointer to `char`.
Since pointers are variables, they can be used without dereferencing. For example, if `y` is another pointer to `int`,
	y = x;
copies the contents of `x` into `y`, thus making `y` point to whatever `x` pointed to.


##Pointers and Functions Arguments

Since C passes arguments to functions by value, there is no direct way for the called function to alter a variable in the calling function.

Pointer arguments enable a function to access and change objects in the function that called it (e.g. main).


##Pointers and Arrays

In C, there is a strong relationship between pointers and arrays. Any operation that can be achieved by array subscripting can also be done with pointers. The pointer version will in general be faster but, at least to the uninitiated, somewhat harder to understand. 

	int a[10], *x;
	x = &a[0];

This means that `x` points to `a[0]`, so using `*x` will change `a[0]`.

Furthermore, `*(x+1)` refers to the contents of `a[1]`, so `x+i` is the address of `a[i]`, and `*(x+i)` is the contents of `a[i]`.

The correspondence between indexing and pointer arithmetic is very close. By definition, the value of a variable or expression of type array is the address of element zero of the array. So:

	x = &a[0];

can also be written as
	
	x = a;

Even more surprising is that `a[i]` can also be written as `*(a+i)`. In evaluating a[i], C converts it to *(a+i) immediately. So `&a[i]` and `a+i` are identical.

Conversely, if `x` is a pointer to `a[i]` as above, `x[i]` is identical to `*(x+i)`.

In short, an array-and-index expression is equivalent to one written as a pointer and offset.

There is one difference between an array name and a pointer that must be kept in mind. A pointer is a variable, so pa=a and pa++ are legal. But an array name is not a variable; constructions like a=pa and a++ are illegal.

When an array name is passed to a function, what is passed is the location of the initial element. Within the called function, this argument is a local variable, and so an array name parameter is a pointer, that is, a variable containing an address. 

As formal parameters in a function definition, `char s[]` and `char *s` are equivalent. 

It is possible to pass part of an array to a function, by passing a pointer to the beginning of the subarray. For example, if a is an array, `f(&a[2])` and `f(a+2)` both pass to the function f the address of the subarray that starts at `a[2]`. 

Within `f`, the parameter declaration can read

	f(int arr[]) { ... }or
	f(int *arr) { ... }So as far as `f` is concerned, the fact that the parameter refers to part of a larger array is of no consequence.
If one is sure that the elements exist, it is also possible to index backwards in an array; p[-1], p[-2], and so on. 
##Address Arithmetic
If p is a pointer to some element of an array, then p++ increments p to point to the next element.