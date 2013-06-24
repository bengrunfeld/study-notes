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
Pointers and integers are not interchangeable. Zero is the sole exception: the constant zero may be assigned to a pointer, and a pointer may be compared with the constant zero. The symbolic constant NULL is often used in place of zero, as a mnemonic to indicate more clearly that this is a special value for a pointer. NULL is defined in <stdio.h>.
Pointers may be compared under certain circumstances. If p and q point to members of the same array, then relations like ==, !=, <, >=, etc., work properly.
For example, `p<q` is true if p points to an earlier element of the array than q does.
The valid pointer operations are assignment of pointers of the same type, adding or subtracting a pointer and an integer, subtracting or comparing two pointers to members of the same array, and assigning or comparing to zero. All other pointer arithmetic is illegal. It is not legal to add two pointers, or to multiply or divide or shift or mask them, or to add float or double to them, or even, except for void *, to assign a pointer of one type to a pointer of another type without a cast.
##Character Pointers and Functions
A string constant, written as	"I am a string"is an array of characters. In the internal representation, the array is terminated with the null character '\0' so that programs can find the end. The length in storage is thus one more than the number of characters between the double quotes.
A string can be initialized by one of the following methods:
	char d[] = "hello dude"; 		#an array	char *s =  "hello snood"; 		#a pointer

`d[]` is an array that contains the string
`*s` is a pointer that points to a string

To mess around with the strings via pointers, use:
	
	while (*s != '\0') {
		printf("%c", *s);
		s++;
	}
	
Using `*s` in the `printf` statement means that you're targeting the contents of the specific character or array index that `s` is currently pointing to.

Conversely, `s` is the pointer to the beginning of the string, so if you just wanted to print out the string without a loop, you'd need to use `s` without the `*`, like so:

	printf("%s", s);

You could also try to write the above loop as:
	
	while (*s++ != '\0')
		printf("%c", s)			#will start 1 letter after 1st

Since we're using `*s++`, and not `++(*s)`, the value of `*s` is retrieved first, and THEN it is incremented. BUT... because the `*s++` is executed in the test before we perform the first `printf` statement, it means that `*s` already points to the second position in the string by the time you read the `printf` statement.

You could also omit the `= '\0'` since it is essentially redundant, because loops test for zero as a failure, so you could just rewrite the loop as:

	while (*s) {
		printf("%c", *s);
		s++;
	}

Other ways to write loops using pointers and arrays:

	 for ( ; *s == *t; s++, t++)
	 for (i = 0; s[i] == t[i]; i++)


##Pointer Arrays; Pointers to PointersSince pointers are variables themselves, they can be stored in arrays just as other variables can.
**Need help with this one**
To initialize the array:
	char *names[] = {
		"ben",
		"bob",
		"shamir",
		"ralph"
	};

Since the size of the array name is not specified, the compiler counts the initializers and fills in the correct number.##Multi-dimensional Arrays
In C, a two-dimensional array is really a one-dimensional array, each of whose elements is an array. 
	daytab[i][j]    /* [row][col] */
Elements are stored by rows, so the rightmost subscript, or column, varies fastest as elements are accessed in storage order.To declare and initialize a multi-dimensional array:

	int days[2][5];			#declaration
	days[1][5] = 22;		#initialization


##The difference between pointer arrays and multi-dimensional arrays

The important advantage of the pointer array over a regular multi-dimensional array is that the rows of the array may be of different lengths. That is, each element of `a` need not point to a twenty-element vector; some may point to two elements, some to fifty, and some to none at all.

	//Declare variables
	char *a[] = {
		"hello there",
		"how are you today",
		"what is your name"
	};

	printf("\nanswer: %c\n", a[1][2]);

The difference is that you can't set a mult-dimensional array like we do above, so that it expands to fit each string in a new array position, and each letter of each string in a sub-array position automatically. I.e. you can't do:

	a[][] = {
		"hello",
		"how are you",
		"nice tie"
	};

##Command-line Arguments
In environments that support C, there is a way to pass command-line arguments or parameters to a program when it begins executing. When main is called, it is called with two arguments. The first (conventionally called argc, for argument count) is the number of command-line arguments the program was invoked with; the second (argv, for argument vector) is a pointer to an array of character strings that contain the arguments, one per string.
This is a huge chapter, and I don't want to write notes about it all. To learn all about it, go to Page 105.
##Pointers to Functions
In C, a function itself is not a variable, but it is possible to define pointers to functions, which can be assigned, placed in arrays, passed to functions, returned by functions, and so on.

	