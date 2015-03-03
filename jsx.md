# JSX

JSX is a statically-typed, object-oriented programming language compiling to standalone JavaScript.

## Links

**Language Reference**

https://jsx.github.io/doc.html


## Why JSX

#### JSX is Faster

JSX performs optimization while compiling the source code to JavaScript. The generated code runs faster than an equivalent code written directly in JavaScript. 

#### JSX is Safer

In contrast to JavaScript, JSX is statically-typed and mostly type-safe. The quality of applications becomes higher when being developed using JSX, since many errors will be caught during the compilation process.

#### JSX is Easier

JSX offers a solid class system much like Java, freeing the developers from working with the too-primitive prototype-based inheritance system provided by JavaScript.

## Data Types

### Primitive Types

There are three primitive types in **JSX**: `string`, `number`, and `boolean`. The three are non-nullable, immutable types.

	var s : string;
	var n : number;
	var b : boolean;
	
Type annotations can be omitted when a variable is initialized at the same moment of declaration.

	var s = "hello";  // s is string, initialized as "hello"
	var n = 42;       // n is number, initialized as 42
	var b = true;     // b is boolean, initialized as true

### Object Types

Object types are types of values to hold reference to objects - which are instances of classes. For example, functions, `string[]` (array of strings), `Date` are all object types. Whether they are mutable or not depends on the definition of each class.

Most of the objects (values of object types) are constructed using the `new` operator.

	var d = new Date();            // instantiate an object of class Date
	var a = new Array.<string>();  // instantiate an array of string
	var m = new Map.<number>();    // instantiate an associative map of strings to numbers

`Array` and `Map` types can also be instantiated by using their initializer expressions.

	var a1 = [] : Array.<string>;  // a1 is Array.<string>, and is empty
	var a2 = [ 1, 2, 3 ];          // a2 is Array.<number> with three elements
	
	var m1 : {} : Map.<number>;    // m1 is Map.<number>
	var m2 = {                     // m2 is Map.<string>
	  en: "Good morning",
	  de: "Guten Morgen",
	  ja: "ãã¯ãããããã¾ã"
	};
	
Variables of the `Function` class can only be instantiated as a static function or by using function expression or function statement (the details are described afterwards).

### The Variant Type

Variant type, which means "no static type information," is useful for interacting with existing JavaScript APIs. Some JavaScript libraries may return a variant value, which type cannot be determined at compile time. All you can do on variant values is to check equality of a variant value to another variant value. You have to cast it to another type before doing anything else on the value.

	function guessTheType(v : variant) : void {
	    if (typeof v == "string") {
	        log "v is string and the value is:" + v as string;
	    } else {
	        log "v is not string";
	    }
	}
	
### Nullable Types

Nullable type is a meta type which indicates a value may be null. It is prohibited to assign null to the primitive types (note: Object types are nullable by default). Nullable types should instead be used for such purposes.

	var s1 : string;
	s1 = "abc";       // ok
	s1 = null;        // compile error!  cannot assign null to string
	
	var s2 : Nullable.<string>;
	s2 = "abc";       // ok
	s2 = null;        // ok	

The most prominent use case of Nullable types is when interacting with an array. For example, an out-of-bounds access to an array returns null.

	var a = [ 1, 2, 3 ]; // creates Array.<number> with three elements
	a[3];                // out-of-bounds access, returns null

