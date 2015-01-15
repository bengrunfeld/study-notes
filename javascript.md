# Javascript Notes

Reference Document:
https://developer.mozilla.org/en/JavaScript/Reference


Introduction:
Javascript is a case-sensitive client-side scripting language - meaning that it is intentionally limited language designed to operate inside a web-browser only. 

Javascript (JS) cannot create desktop applications, nor can it access hardware, open or save files on the client’s local file systems,  or talk with a database. These limitations were intentionally set it place as security measures to keep computers safe(er) from internet hackers. 

Instead of being a compiled language like C, it is an interpreted language which is compiled by the Web Browser.

Case Sensitive:
JS is a case sensitive language. If you use the wrong case, it simply won’t work!

JS code is grouped into statements - separate structure or commands that tell the script what to do.

A JS statement is typically written by itself on one line, and ended with a semi-colon ;

It is insensitive to white space.


Comments:
// This is a single-line comment
/* This is a comment block */


Best Practice
Use camelCase for variables, functions and methods
Open curly braces on the same line as if’s and other functions
Always use curly brace blocks on if’s - even if only on one line
Define your functions before you call them
Always use semi-colons to end a statement
Always use var when declaring a variable


Run of Command:
By default, the browser will interpret and run your Javascript code as soon as it sees it. 

If you place your <script> in the <head> section, the browser will run the JS before any of the other HTML code is read. So if it’s an alert, nothing else on the page will load until you hit Ok.

So the position of your JS code in your page REALLY matters!


Keeping JS in an External File
Inline scripting is fine for small blocks of code or simple functions, but often the code is quite large and complex, and it’s simply easier to keep and edit it in an external file.

To import an external Javascript file in your main HTML document:
<script src=”myscript.js”></script>

In HTML4 and XHTML, you would include type=”text/javascript”, but in HTML5, you can leave it off, and this is very acceptable. 

Where to put the <script> tag
If you place your <script> tag in the <head> section, the browser will interpret it first, meaning that if there’s a problem, it could delay the rendering of the page - so it’s not a good idea to put it there.

It’s best to have place your <script> tag just before the closing </body> tag. That way the rest of the page loads first. Unless, of course, you need to use that JS somewhere in your code. 


Variables
This creates a variable: 
var customEmaill;

For variable names, you can use letters, numbers, the _ underscore character, and the $ dollar sign. Variables cannot start with a number.

To set the value of a variable:
	var year;
	year = 2012

but this is also acceptable
	var year = 2012

Technically you don’t even need to use the word var. If you write
	year=2012;

Javascript will look for it, but if it doesn’t find it, it will create a variable called year with a value of 2012.

Because JS is case-sensitive, these 2 variables are different:
	var x = 20;
	var X = 200;

To create several variables at once in 1 line:
	var day, month, year;

This is the same as:
	var day;
	var month;
	var year;

To create and set the values of multiple variables in 1 line:
	var day = 20, month = 3, year = 2012;


Declaring the Variable Type
JS is a weakly-typed language. We don’t declare a variable as a boolean, or integer or float, we just set the value of a variable, and JS decides what the variable type is for us.

so it is fine to declare as follows:
	var myVar = 200;
	var myVar = “Hello”;
	var myVar = ‘Hello’;
	var myVar = true;
	var myVar = false;

There is no difference between single and double quotes - just don’t mix them up.


Conditionals:
To create an if statement:

if ( condition ) {
//code goes here....	
}

The condition must evaluate to being true or false:

if ( a < 50 ) {
//code goes here....	
}


Study for yourself - operators and assignment operators

If you only have one line of code after an if statement, you don’t need { } curly braces, but it’s bad form. 

To create an if else statement:

if ( condition ) {
//code goes here....	
} else {
//other code goes here....	
}

What is the Difference between == And ===
== checks that two variables are the same value
=== checks that two variables are the same value and the same data type

Logical Operators
AND = &&
OR = ||

How to Use Modulus % Operator
Using % gives you the remainder of an operation after a division. 

Increment and Decrement
Increment = ++
Decrement = --

e.g. a++ OR ++a

But these are quite different. 
e.g.
	var a = 5, b = 5;
	alert(++a);
	alert(b++);

With ++a, the increment is done first, and then the value is displayed to the screen, so 6.
But with b++, b is displayed first (5), and only THEN is the increment executed.

The end result is the same, but it can cause errors in the code.


The Ternary Operator

condition ? true : false;

This is like a mini if-else statement

You could use a ternary operator to condense the following code into 1 line:

//This is the long form of an if statement
var score1 = 50, score2 = 100;

if ( score1 < score2) {
	highscore = score1;
} else {
	highscore = score2;
}

OR

	var score1 = 50, score2 = 100;

//Condensed into 1 line
var highscore = ( score1 > score2) ? score1 : score2;


Alternative to the Alert Command
If you’re sick of the alert command and you have firebug (or the chrome equivilent), you can use console.log, which makes something print in the console.

	console.log(“This gets printed to the firebug console”);

You can also change the word log to 4 other words, and these have different results.
	debug, info, warn, error


Loops
A WHILE loop:
	
var a = 1;
	
	while (a < 10 ) {
		//could have used alert(a);
		console.log(a); 
		a++;
	}




With a DO-WHILE loop, the code will always be executed at least once.

var a = 1;
	
	do {
		//could have used alert(a);
		console.log(a); 
		a++;
	} while (a < 10 );


A FOR Loop:

	for ( var i = 1; i < 10; i++) {
		//could have used alert(a);
		console.log(a); 
	}

BREAK will jump us out of the entire loop - even if it is nested deep - and continue in the code,

	for ( var i = 1; i < 10; i++) {
		//could have used alert(a);
		console.log(a); 
		if (i == 5) {
	//will break you out of the entire loop
break;
}
	}

CONTINUE doesn’t mean jump out of the entire loop, it means jump back up and check the condition again - don’t continue any further with this iteration.

	for ( var i = 1; i < 10; i++) {
		//could have used alert(a);
		console.log(a); 
		if (i == 5) {
//continue moves you back to the top of the loop and checks 
//the condition again.
continue;
}
	}


Functions:
To code a function - somewhere in your JS file:

	function createMessage () {
		alert(“This is a function!”);
}

Then you can call it later when you want to use it:

//call the function sometime later in your code
	createMessage();

A function won’t run unless you call it.

It doesn’t matter where you declare your functions, since the browser scans your code first, but it it is good practice to define your functions before you call them. 

Functions with Parameters

	function multiplyAB ( a , b) {
		var c = a + b;
		alert(c);
	}

	multiplyAB ( 500 , 200 );
OR
	var ab = multiplyAB ( 500 , 200 );


Parameters Mismatch

If you have a function with 4 params:

	function multiplyAB ( calc , name , interest , months ) {
	}
You generally call it with 4 params
	multiplyAB ( 500 , “bruce” , 7.4 , 5 );

But if you call it with extra params, JS simply ignores it - most languages throw an error.
	multiplyAB ( 500 , “bruce” , 7.4 , 5 , “crazyDuck” );

If you pass the function too few params, the remaining params will be set as “undefined”
	multiplyAB ( 500 , “bruce” );
Variable Scope

Local Scope:
The variable c only exists inside the function - ie it is local to the function, and you can’t use it outside of the function.

	function printC ( ) {
		var c = 500;
		alert(c);
	}

//will throw an error 
	alert(c);


Global Scope:
If you need to have a variable that is visible throughout the entire file of code, declare the var at the top level, outside any function, and it will be available inside and outside of functions.

	var c;

	function printC ( ) {
		//will work just fine
		c = 500;
		alert(c + " inside a function");
		c += 200;
	}

	//will work just fine
	printC();
	alert(c + " outside a function");


Arrays:
To declare an empty array:

	var myArray = [ ];

As soon as you see square brackets [ ], you know that it is an array.

To place a value in a position in an array, one at a time, use the following:

	var myArray = [ ];
	myArray[0] = 50;
	myArray[1] = true;
	myArray[2] = "Horse";

	alert( myArray[2] ) ;



Array Shorthand
This is the shorthand way to write an array.

	var myArray = [ 50 , true , “Horse” ];

Other ways of writing arrays
These methods are also acceptable:
	
	//arrays are objects
	var myArray = new Array();

	//doesnt need to have the word new
var myArray = Array();	

//you can set the size of an array
var myArray = Array(5);


Array Properties
You can access the properties of the array with the dot operator

var myArray = [ 1 , 2 , 3 , 50 , 70 ]

//will give the answer 5, but highest array index is 4 because arrays are 0-based 
alert(myArray.length);


Array Methods
A Method is a function that belongs to an object. And since arrays are objects, once we’ve created one, we can use methods with it. 



Here is how you would call a method via an object:

	someObject.someMethod(); //calls a method via the object

Here is how you would call a method via an array:

var myArray = [ 1 , 2 , 3 , 50 , 70 ]
myArray.reverse();

Arrays have built in methods

	//will return an array with reversed values
myArray.reverse();

//will join all the values in an array and output them as a single string
//in this case, the browser will output “1, 2, 3, 50, 70”
alert( myArray.join( ) );

//will sort all the values in an array
alert( myArray.sort( ) );

Arrays are everywhere in Javascript and there is no avoiding them. For example, if you’d like to grab all the <a> elements in an HTML document, you could use the following code:

var myArrayOfLinks = document.getElementByTagName(“a”);

This would grab every <a href=””> tag on the page and stack them into the array that we just named myArrayOfLinks.


Numbers
All numbers are stored as 64-bit floating point numbers in JS.

If you want to create a floating point variable

	var x = 20.5

To make something a number, if it has come in as a string:

	var foo = “565”
	var myNumber = Number(foo);    //makes it a number

The Number function attempts to change the value it is passed into a number. If it is unable to do this - e.g. Number(“abc”); - then it will return NaN, which is Not a Number.

We can check if a variable has been returned as NaN.
	
	//Will check if myNumber is a NaN
	if ( isNaN(myNumber) )  {
		alert(“That is a NaN”);
	}

OR you can check it with a NOT operator

	//Will check if myNumber is a NaN
	if ( !isNaN(myNumber) )  {
		alert(“That is not a NaN”);
	}


The Math Object
	var x = 20.5
	var y = Math.round(x);  //rounds a number

	var a = 5, b = 6, c = 100;
	var maxNum = Math.max( a , b , c );  //returns the biggest number
	var maxNum = Math.min( a , b , c );  //returns the smallest number

There are lots of other maths functions that you can call on, including PI, random, log and others.


Strings
Escape values

\’ = ‘
\” = “

Strings can be treated as object - meaning we can view their properties as well as perform methods on them. 

	var phrase = “What is the time”;
	alert ( phrase.length ); 

	//Will convert string to UPPER case
	alert ( phrase.toUpperCase() ); 
//Will convert string to UPPER case
	alert ( phrase.toLowerCase() ); 

//Will split string wherever it finds a space and store the different pieces in an array
	alert ( phrase.split(“ “) ); 

//Will scan through the string and return the position of the beginning of the search term
	alert ( phrase.indexOf(“time“) ); 

//Slice allows us to grab a particular piece of a string. It accepts 2 numbers - starting position and length  - other similar methods - .substring() & .substr()
var segment = phrase.slice(5,4);

With indexOf(), if the search term is found at the beginning of the phrase, then the function will return 0. So to check if a term is NOT in a phrase, check if indexOf == -1

if ( phrase.indexOf(“dogs”) == -1 {
	alert(“not found!”);
}	


Comparing Strings

var string1 = “Major”;
var string2 = “major”;

You can use == or === to compare 2 strings, but the comparison is case sensitive, so in this case, string1 != string2. A good way of getting around this problem is making both strings either upper-case or lower-case.

	if ( string1.toLowerCase() == string2.toLowerCase() ) {
		alert(“The strings are equal”);
}


Sorting Order in Strings

You can sort strings in JS by using the greater than (>) or less than (<) symbols. The way that this works with strings is that it compares the ASCII value of the first letter of each string. Remember, all upper-case characters have lower ASCII values than lower-case characters.

i.e.
a > A
B < b


Working With Dates
Javascript has a date object that we can work with when creating dates.

To create a date:
	
	//this creates a date with the current date and time
	var birthday = new Date();

	//this creates a date with a custom date and time - year, month, day
	//month is 0 based, so acceptable values are 0 - 11
	var birthday = new Date(2012,0,15);

//this creates a date with a custom date and time - year, month, day, hours, minutes, //seconds
	var birthday = new Date(2012,0,15, 0, 0, 0);

Internally, the Date object is stored as the number of milliseconds since Jan 1st 1970, aka unicode time. 

Date Object Get Methods

	var birthday = new Date();

	//returns the month - 0-11
	birthday.getMonth();
	
	//returns the year - YYYY (not zero based)
	birthday.getFullYear();

	//returns the day of the month - 1-31
	birthday.getDate();

//returns a number representing the day of the week. Returns 0-6 where 0 = Sunday
	birthday.getDay();


//returns the hour - 0-23 since it is zero-based
	birthday.getHours();

//returns the number of milliseconds since 1/1/1970
	birthday.getTime();


Date Object Set Methods

	var birthday = new Date();

	//sets the month - 0-11
	birthday.setMonth();

	//sets the year
	birthday.setFullYear();

	//sets the day
	birthday.setDay();

Find full list at reference document at top of tutorial.


Comparing Dates

	var date1 = new Date(2012,0,1);
	var date2 = new Date(2012,0,1); 

If you compare these dates via an ==, it will return false.

To compare dates, use
	
	if ( date1.getTime() == date2.getTime() ) { 
		//this will return true!
alert(“Dates are the same!”);		
	}

Objects in Javascript
Javascript does allow you to use objects, but they are basic compared to objects in other languages. 

An object is just a container that gathers some data and some behavior.

To create an object:	
	var person = new Object();

To assign variables to an object:

	person.name = “Benny”;
	person.address = “135 Horrible St”;
	person.age = 26;

When variables are stored inside an object, we call them properties.

Shorthand to create a new object:
	
	var person1 = { name: “Benny”, address: “135 Rott St”, age: 26 };
	var person2 = { name: “Morris”, address: “55 Grotty St”, age: 32 };

To access an object’s property:

	alert(person1.name);
	var p1Name = person1.name; //or you can do it this way


To Create a Method of an Object

//Creates the objects in short-hand and initializes their variables
var person1 = { name: "Benny", address: "135 Rott St", age: 26 };
var person2 = { name: "Morris", address: "55 Grotty St", age: 32 };

function personDetails() {
	// displays information about each player - uses THIS to 
	//reference the current object
alert(this.name + " has an address of: " + this.address + " and has an age of: " +
 this.age);
}

//Assigns the function personDetails to be a METHOD of each object
person1.logDetails = personDetails;
person2.logDetails = personDetails;

//Runs the method logDetails - which in turn runs the function 
//personDetails
person1.logDetails();
person2.logDetails();
The DOM

DOM = Document Object Model

Definition of the DOM: 
Document: The Document means the web page. 
Objects: Everything in the Document is represented as an Object
Model: The document’s HTML is represented (modelled) as a tree structure

The model is simply a set of terms that we can agree on. (e.g. nodes, parent/child nodes)

Once you understand the DOM, you can write JS that can navigate around any web page.

What is a Node:
A Node is an item on the tree structure - ie. it is an HTML tag that represented as an object.

Relationships in the DOM:
A child node is a child tag (inner tag). e.g. a <li> nested inside of a <ul> is a child node.
A parent node is a parent tag (outer tag). e.g. a <ul> is the parent node of a <li> tag.

HTML Attributes as Nodes
HTML tags have attributes, like text, links, etc. These attributes are all nodes on the dom. 

Node Types
Officially, there are 12 Node Types, although we’re only really interested in 3 of them.

	Node.ELEMENT_NODE
	Node.ATTRIBUTE_NODE
	Node.TEXT_NODE
e.g.
	<ul id=”myList”>
		<li>This is Option 1</li>
		<li>And this is Option 2</li>
		<li>Well, this is Option 3</li>
	</ul>

The whole <ul> element from the opening tag to the closing tag is considered 1 Element Node.  

The code id=”myList” is an Attribute Node, and each of the <li> elements is an Element Node

The text in all of those elements is a Text Node, so each of those <li> elements has a Text Node attached to it to describe the text attached to it.

Element Nodes Don’t Have Elements
Element Nodes do not directly contain text, according to the DOM. Instead, that text is contained in a Text Node.


Using JS to Get an Element Node
First, you need to ask is the Node you’re after unique in the document.
That means, does it have an ID?

Like in HTML, an ID can be applied to only 1 Element Node.

	document.getElementById(“someId”);

It’s best to create a variable, and set the above statement to the variable.

	var myElement = document.getElementById(“someId”);

This creates a variable that is really a handle to that place in the DOM. You can then use that variable to read properties of the element, call methods of the element, or even change it.

A handle can be used to go down to the child nodes, or use it to go up to the parent nodes. 


Getting Multiple Elements
If you don’t have access to the element’s ID, or you want more than 1 element, you can use the following code:

	//This will go through the documents and give us any elements that have an <a> tag
	document.getElementsByTagName(“a”);

When you store this as a variable, it creates an array because multiple values are returned. 

	var myListItems = document.getElementsByTagName(“li”);

This will find all the list items in the entire document, and then in each position in the array, will have a handle to that place in the DOM.

So to access the Node you want, access it the same way you access a specific index in an array:
	//would access the first occurrence of a <li> tag in the DOM
	myListItems[0];

If you call the same method, but there is no such tag in the document, it will still return an array, but the array will be empty.

e.g. If you have a document with no <a> tags, and you call the method:
	var myLinks = document.getElementsByTagName(“a”);

myLinks will have 0 places, and will have no contents.


Getting The Node Type
So if I have in my HTML document <h1 id=”theTitle”>, I can get the Node Type with the following code:

var theTitle = document.getElementById("theTitle");

//nodeType will be a property that we can access as soon as we get something back 
//from getElementById.
alert("This is an element of type: " + theTitle.nodeType );


As written above, the 3 types of node we are interested in are:
Elements
Attributes
Text

These have the node types
1
2
3

So to be REALLY clear:

Elements = Node type 1
Attributes = Node type 2
Text = Node type 3


Getting the Inner HTML

var theTitle = document.getElementById("theTitle");

//innerHTML will retrieve whatever text and HTML is placed in between the opening and 
//closing tags, without formatting
alert("This is an element of type: " + theTitle.innerHTML );

Getting the Number of Child Nodes

var theTitle = document.getElementById("theTitle");

//.childNodes will return an array, so we need to use .childNodes.length to see how long 
//that array is.
alert("This is an element of type: " + theTitle.childNodes.length);


Printing Out the Results from Multiple Tags
Here the same principal applies. We have have requested that all <a> tags get returned and stored in the variable myLinks. Because there are multiple results, myLinks becomes an array that gets filled automatically. In order to check how long that array is, we use the .length method.

var myLinks = document.getElementsByTagName("a");

alert("Links: " + myLinks.length);


Restricting Elements to Retrieve
We don’t just have to call the above methods (getElementById + getElementsByTagName) from the document - e.g. document.getElementById - we can call them from any level in the DOM.

So say we have:

<ul id="list">
		<li>List Item 1</li>
		<li>List Item 2</li>
		<li>List Item 3</li>
	</ul>
	
	<a href="moby.htm">Moby is soooo cool</a>
	
	<ul id="renters">
		<li>List Item 4</li>
		<li>List Item 5</li>
		<li>List Item 6</li>
	</ul>

If we just ran the following code, we’d get every <li> tag in the DOM - i.e. all 6 list items above
var myListItems = document.getElementsByTagName("li");

But if we only wanted to get the list items from one list, we could be more specific in our coding and do it this way:


var myList = document.getElementById("renters");
var restrictedListItems = myList.getElementsByTagName("li");


Changing Content in the DOM
To change content in the DOM, you first need to get the element you want to change.
Secondly, you need to decide what about the element you want to chage - e.g. change an attribute, add a new attribute, add a whole bunch of new elements, change a link, etc

Changing an Attribute of an Element
Once we have gotten an element, Javascript gives us 2 methods we can use to work with its attributes.

	//fetches us an attribute from an element
	myElement.getAttribute(“align”);

//sets an attribute to a new value - (“center”), or if the attribute doesn’t exist, JS will create 
//a new attribute and give it the value we specified
	myElement.setAttribute(“align”, “left”);

e.g.

	var mainTitle = document.getElementById(“theTitle”);

//This will set the align attribute of the element with the id of theTitle to right
	mainTitle.setAttribute(“align”,”right”);

But what if you want to change the contents of an element? The method .innerHTML allows you to read or change the contents of any element. 

var mainTitle = document.getElementById(“theTitle”);

//Using .innerHTML like this will simply print the contents of the element with the id of 
//theTitle to the screen
	alert( mainTitle.innerHTML() );

NOTE: Using innerHTML is fine for a simple tag like a <h1> or an <a> is fine, but if you use it on a big <div> tag, you’ll simply get back the HTML of everything inside the <div>, which is not workable.

Creating and Inserting Individual DOM Elements

Step 1: Create the element
Step 2: Add it to the document
Step 3: Create a text node

So if we have:

<ul id="myList">
		<li>List Item 1</li>
		<li>List Item 2</li>
		<li>List Item 3</li>
	</ul>

And we want to add another <li> tag to the list, we need to create a new element, and then append it to the list.

To create a new element:

	//this will create the element, but it won’t be part of the DOM itself
	var newElement = document.createElement(“li”);
	
	//the appendChild method will make newElement part of the DOM
myList.appendChild(newElement);

When you use appendChild, Javascript will take the element, make it part of the DOM and understand its place in the document itself.

FYI - when you use appendChild, Javascript will always append the new child node at the end of whatever you’re adding it to - so if you add a new <li> to a <ul>, it will appear at the bottom of the list.

Currently, the <li> tag that we have created and appended to the list has no contents - ie no text. To fill it with text, we could use innerHTML, but there is a more preferable way fill the new node with contents - creating a text node.


Creating a Text Node

This will create a new text node, but like the createElement function, it won’t be part of the DOM yet:
//this will create the text node, but it won’t belong to the element we created
var myText = document.createTextNode(“New list item text”);

Now we need to append the new text node to the new element we created:
	//the appendChild method will make newElement part of the DOM 
newElement.appendChild(myText );


This would be the most exact and specific way to begin creating these new DOM elements. 


Alternatives to .appendChild
If we want a bit more flexibility about where our new element is inserted, we can use this method:

parent.insertBefore(newElement, existingElement);

Because appendChild will only insert a node at the end of whatever element you’re working with, it is not always what want.

Say we have 

<ul id="sampleList">
		<li>List Item 1</li>
		<li>List Item 2</li>
		<li>List Item 4</li>
	</ul>

And we want to insert a new <li> element before the last <li> in the list, we would use the following:

	//gets the list above by identifying its ID attribute
	var myList = document.getElementById(“sampleList”); 

//creates a new li element and stores it in the variable newListItem - though it is not 
//attached to the DOM yet
var newListItem = document.createElement(“li”); 

//gets all of the li elements in the list myList, stores them in an array, and then we target 
//the 3rd position on the array by using [2] - remember an array is zero-based.
	var thirdItem = myList.getElementsByTagName(“li”)[2];
	

//now we have the list item that we want to insert something before - thirdItem - and we 
//also have the new element we created - newListItem - so we just need to insert it.
myList.insertBefore(newListItem, thirdItem);



Events And Event Listeners
The code we’re writing above is only being executed when the browser gets to it, which is not interactive. We can create interactivity by using events. 


What is an Event
Events are already happening. They’ve been happening all along. 

Examples of events:
When the page loads
When a user clicks on a link
when they move their mouse, that is a heap of events
When the scroll the screen
When the fill a form field
When they hit a key on their keyboard

Events are going on all the time, and we have to decide which ones we care about. These events are built into Javascript and they’re part of Javascript, and there are special words to describe them. 

Typically they start with the word on. For example:
onload
onclick
onmouseover
onblur
onfocus

We don’t write the event itself, we write the Event Handler, aka the Event Listener. 

We write a function and we volunteer to handle or to listen out for one or more events so that we can respond when they happen. 

Responding to Events
There are 3 ways to react to an event in JS.


Method 1: Code the Event Handler Directly into Your HTML
1. Write JS code directly into your HTML 
	//if you have a button tag, you can use onclick to trigger an event when the button is 
//clicked
<button onclick=”alert(‘Hi there!’);”>
		Run some Javascript
	</button>

This is NOT a good method to use, because it mixes in JS with our HTML, which is like mixing in CSS with our HTML. Also, it is not elegant to just stack in a heap of code separated by semi-colons. And thirdly, this way we are not re-using code like we can with an external code, and there is no way to make this friendly if JS is disabled. 



Method 2: Use Name of Element, then DOT, then the Name of the Event - Element.Event

	element.event = 

	//means the onload event of the window object
	window.onload

	//means the onblur event of the nameField object
	nameField.onblur

//means the onclick event of the myElement object
	myElement.onclick

When the user clicks a DOM element, we want to do something, so we use the equals sign (=), and then a function, which can activate the event handler code that you have specified.

//means the onclick event of the myElement object
	myElement.onclick = function() {
		//event handler code goes here
		// …....
		// …....
};

This is creating an anonymous function, because we have not given our function a name, and that is completely OK, because the function only gets run when the user clicks myElement.

Remember to end the statement with a semi-colon (;), even though you’ve used a function - this is a statement, so it needs to be concluded with a ; !

Method 3: Using addEventListener
This has a huge benefit but a huge drawback. You can call it directly on the document object or on any element that you have.

document.addEventListener( ‘click’, myFunction, false );

This method takes three parameters - the event that we’re listening for, the name of the function to run when the event happens, and false - this last parameter is for super-advanced event-handling programming that we won’t need right now.

Notice how you just write click, not onclick. 

You can add a listener to multiple events. 

The big benefit with using addEventListener is that you can add a listener to multiple events, or you could have one event but have multiple listeners. 


Removing Event Listeners
Alternatively, you can also remove event listeners as your script is running with the following function:

document.removeEventListener( ‘click’, myFunction, false );


The Big Drawback of Event Listeners
There is STILL a difference between the browsers in whether this script is supported or not  - because Internet Explorer, prior to IE9, does not have the addEventListener function. 

IE8 and previous has an equivalent which is coded as following:

document.attachEvent( ‘onclick’, myFunction );


That means that any time you want to use this method of event handling, you have to write a detection script that checks which function is enabled in that particular browser. This is a waste of time and should be avoided at all costs. 

The better way of dealing with this issue is using JQUERY, as they provide excellent cross-browser functions for this.

Onclick and Onload
You can create an onclick event listener for any element in the document, even the document itself.

	document.onclick = function() {
		alert( “You clicked somewhere in the document!” );
	};

This way, if a user clicks anywhere in the document, the alert will pop-up on the screen.


Placing An External Script Tag in the Head Section
If you place your <script src=”script.js”></script> inside the <head> tag, and your script contains code that tries to target an element later in the document, the script WON’T WORK.

Why? Because the Javascript code is trying to get that element before the HTML has been loaded from the server, meaning there’s nothing to target because the HTML hasn’t arrived yet.

	//this won’t work if the external script is loaded in the <head> section
var myImage = document.getElementById(“mainImage”);
myImage.onclick = function() {
	alert(“You clicked an image”);
};

To solve this, we need to use window.onload


Window.Onload
The window object actually represents the full browser window. It is the top-level object in Javascript and actually contains the document object. 

	function prepareEventHandlers() {
	var myImage = document.getElementById(“mainImage”);
myImage.onclick = function() {
		alert(“You clicked an image”);
};
}





// only use window.onload once per page, because if you have many being called from 
//different external files, only the last one will win.
window.onload = function() {

// by calling the function this way, it won’t call the function until the rest of the page 
// has fully loaded
	prepareEventHandlers();
}

OnBlur and OnFocus
Every one of our form elements gets an onfocus event triggered when we click into it or when we tab into it, and when we leave it, the onblur event is triggered.

To create a function that clears the form element of its prompting text when you click or tab in, and re-type that text if you click or tab out without writing anything, use the following:

	//input field has an ID of email
	var emailField = document.getElementById(“email”);

	emailField.onfocus = function() {
		//.value checks what the value of the form field is
		if ( emailField.value == “your email” ) {
			emailField.value=””;
		}
};

	emailField.onblur = function() {
		if ( emailField.value == “” ) {
			emailField.value=”your email”;
		}
};

So what’s going on here is that the code is checking if the VALUE of the field is empty. If so, it types in “your email” as a way of prompting the user. If the user clicks in to the field, all the text is deleted, but if the user clicks out without writing anything, the script types “your email” back into the field.


Timers
Slideshows and clocks user timers. Timers are not events, but they can seem similar.

There are 2 methods that we can use to create a timer.

Method 1: setTimeout - one time only timer
setTimeout is a function like alert that can be used anywhere in the document.

	function simpleMessage() {
		alert(“This is a simple message”);
	}

	//setTimeout takes 2 params - the function to run, and the time to wait before running it - 
//which is calculated in milliseconds
	setTimeout(simplemessage, 5000);

But setTimeout is good for making something happen once and once only.

Method 1: setInterval - repetitive timer
We also have another function called setInterval which will call the specified function every set interval - which you set in milliseconds as the second parameter.

	//params: name of the function to call, time interval to wait before calling it again
	setInterval(simpleMessage, 5000);

So in this case, setInterval will call the function simpleMessage every 5 seconds (5000 milliseconds)

Creating a Changing Image
By using timers and arrays, we can cause an image to change every few seconds.

	//grabs the image on the page with the ID of mainImage - we will change this image
var myImage = document.getElementById(“mainImage”);

//stacks an array with sources to different images we’ll want to switch out
var imageArray = [“images/fountain.jpg”,”images/dogsbreath.jpg”,”images/redtruck.jpg”];

//we’ll use this as the array counter
var imageIndex = 0;

//this function sets the image’s src to the current value of the array index, then 
//increments the array index, until it reaches the maximum number of the array length, 
//and is then reset
function changeImage() {
	myImage.setAttribute(“src”,imageArray[imageIndex]);
	imageIndex++;
	if (imageIndex >= imageArray.length) {
		imageIndex = 0;
	}
}

	setInterval(changeImage,5000);

Clearing Timeouts and Intervals
To turn off a timeout or an interval, you must assign the timer to a variable, and then you can clear the timer using the variable handle:

	var timeoutHandle = setTimeout(changeImage,5000);
var intervalHandle = setInterval(changeImage,5000);

myImage.onclick = function() {
	//this clears the timeout
clearTimeout(timeoutHandle);
};

myImage.onclick = function() {
	//this clears the interval
	clearInterval(intervalHandle);
};


Common Javascript Errors
You can check basic syntax mistakes in Firefox: firebug -> Console
or in Chrome F12 -> Console

Firebug allows you to inspect the DOM, or to find an HTML entity and then right click on it, and choose “inspect in the DOM”.

Firebug also allows you to view all Javascript that is being used on the page, both the inline JS as well as the external JS. If you wish to view the external JS file, it should be a drop-down menu item at the top navigation bar of firebug, when you click on the SCRIPT menu item.


Working With Forms
We can change several different things:
1. the field values
2. the field events when you change them or move in or out of them
3. the event of the entire form itself (e.g. submitting or resetting the form)



Getting Form and Form Elements
If you’ve given your form elements ID values, then you can target them with document.getElementById to retrieve the form itself, or any field in the form.

<form id=”contactForm”>
	<input id=”firstName” />
</form>

	document.getElementById(“contactForm”);
	document.getElementById(“firstName”);

But if your form has either an ID or a NAME property, you can target the element name via the form object - like so:

Using an ID:
<form id=”contactForm” name=”contactForm”>
	<input id=”firstName” name=”firstName” />
</form>

	document.forms.contactForm
	document.forms.firstName


Using the Name Property:
<form id=”contactForm” name=”contactForm”>
	<input id=”firstName” name=”firstName” />
</form>

	//where formName is the name of the form, nameOfTheElement is the name of element 
//you’re trying to target, via the form name
	document.forms.formName.nameOfTheElement
	
//this code would work for the above example
document.forms.contactForm.firstName


Text Fields
Text fields have a value property, and you can either GET it or SET it. The same applies for the textarea element. 

//Main Property
myTextField.value

//Main Events - as well as keypress events
onfocus 	//Triggered when you go into the element
onblur		//Triggered when you leave the element
onchange	//Triggered when change something in the element
onkeypress	//Triggered when you press a key and release it
onkeydown	//Triggered when you press a key down
onkeyup	//Triggered when you release a key


CheckBoxes and Radio Buttons
Instead of the value property being defined, we care about the checked property

//Main Property - can be either TRUE or FALSE
myCheckBox.checked

//Main Events 
onclick		//Triggered when you click on it
onchange	//Triggered when you change the state of the element


Select Lists
Contains many options as a drop down list or as a list box where you can select multiple items.

But in HTML, you can define a select box to allow the user to select only one item, or allow them to select multiple items. 

We can check which has been enabled (one selection item allowed or many items allowed)

//Main Property - This will return select-one or select-multiple
	mySelect.type

//Main Events - for a single event
onchange	//Triggered when you select an option of that drop down list

	//Select-One: You can find out which option is selected by reading the 
//.selectedIndex property of that element
	mySelect.selectedIndex

//Select-multiple: You need to check the options array of that select field and go 
//through its options one-by-one and figure out if they have a selected boolean 
//property for each one. The returned value here will be TRUE or FALSE
mySelect.options[x].selected

Form Events
There is one main event of the form. Using the onsubmit event, we can interrupt the sending of the form before it gets sent to the server. You can check the values of the fields, and even prevent the form from submitting by returning false from the event handler.

//Main Events 
onsubmit	//Triggered when the user clicks on the Submit button


Preventing a Form from Being Submitted
As said above, we can stop a form from being submitted by making the onsubmit event return false.

So imagine we have a form in the main HTML document, where the form’s ID is myForm and the email ID is formEmail.

	// handles the form submit event
function prepareEventHandlers() {
	document.getElementById("frmContact").onsubmit = function() {
		// prevent a form from submitting if no email.
		if (document.getElementById("email").value == "") {
			document.getElementById("errorMessage").innerHTML = "Please provide at least an email address!";
			// to STOP the form from submitting
			return false;
		} else {
			// reset and allow the form to submit
			document.getElementById("errorMessage").innerHTML = "";
			return true;
		}
	};
}

// when the document loads
window.onload =  function() {
	prepareEventHandlers();
};





Showing and Hiding Form Sections
This code in Javascript actually reveals another area of the form with a set of input boxes inside it, or hides it. It is visible by default, and then turned off with JS, just in case the user’s browser has JS disabled. In that case, everything still displays. 

// show and hide sections of a form
function preparePage() {
	document.getElementById("brochures").onclick = function() {
		if (document.getElementById("brochures").checked) {
			// use CSS style to show it
			document.getElementById("tourSelection").style.display = "block";
		} else {
			// hide the div
			document.getElementById("tourSelection").style.display = "none";
		}
	};
	// now hide it on the initial page load.
	document.getElementById("tourSelection").style.display = "none";
}

window.onload =  function() {
	preparePage();
};


Using Javascript with CSS
Javascript will allow us to make our presentation and our styles dynamic, just like we can make the content on our HTML dynamic. 

Method 1
We can set inline styles on an element directly from Javascript.
	1. Grab the element. E.g. with getElementById()
	2. Use it’s .style to apply a CSS style
	3. We then use the same styles as we’d use in a CSS file - any CSS is ok

	myElement.style.color = “#ff0044”;
	myElement.style.backgroundRepeat = “repeat-x”;

You do have all the usual CSS properties available but they might have to be written a little differently. 


Style Property Naming
When using a hyphen in CSS becomes camel cased in Javascript. The reason for this is because in Javascript, the hypen character (-) is the subtraction operator, and that would cause all types of hell if we put it in with this code. 

All values are set as strings. Semi-colons come after the closing double quotes. 

	//In CSS
	#example { width: 200px; background-color: red; }

	//In Javascript
	myElement.style.width = “200px”;
	myElement.style.backgroundColor = “red”;


Setting the Class of an Element
If you have a predefined class in your external CSS file, and you’d just like to apply the class name to an element, and that way change the styling of that element, then do like so:

//In Javascript
	myElement.className = “cssClassName”;

//For example
	document.getElementById(“myElement”).className = “myCssClassName”;


Minifying Your Code
If you even view the page source of a page, and you see a giant block of JS code with no spaces - this is minified code 

Minifying generally consists of removing comments from code, changing the names of variables with long names to one character. 

Hand-coding minification is very tedious, so there are free tools that help you minify your code.
JSMin - Command Line tool
YUI Compressor - Command Line tool
Google Closure Compiler - Web Browser and Command Line tool
http://closure-compiler.appspot.com/home

JQUERY has both a minified version of its library and a non-minified version. These can be used for Production and Development respectively, altering the size needed by over 200KB.



Javascript Code Checkers
There is one best code checker to use when checking your Javascript code
	http://jslint.com



Javascript Libraries
A Javascript library means a bunch of code that somebody else wrote and grouped together.

General Purpose JS Libraries:
Google Closure Library - http://code.google.com/closure/library
MooTools - http://mootools.net
Yahoo YUI - http://developer.yahoo.com/yui

These have a lot of functions that help with working through the DOM, cross browser detection - so easier to work with events without worrying about what version of IE the user has, working with animation.

They make it easy for JS to request information from a Web Server then update the page when it gets a response - which is AJAX.

To use a library, you just have to go to their site and download it. 

It is just Javascript - you link to it like you would to an external file. So you’re not getting anything you couldn’t have written yourself, but it might have taken you months to write it. 

Some JS libraries are more specialized - like Lightbox, Drag and Drop, Accordians, Curvy Corners. 






Multiple Javascript Files
Important tips
use as few links as possible, because the browser needs to request each file from the server and wait until it has completely loaded.

Combine your JS when you can - don’t have many small files as this is bad for the user
If you have a JS file that calls a function from another JS file, make sure the file which defines the function is first in the list of links.
Call links from just before the closing body tag </body>


JQUERY
Can be found at jquery.com

Step 1: Download the JQUERY Library
Step 2: Link to the JQUERY file on your website - <script src=”jquery-1.6.1.min.js”></script>

Regular JS vs jQuery
Normally we would write:
	document.getElementById(“myDiv”).className = “highlight”;

But in jQuery, we would write:
	jQuery(“#myDiv”).addClass(“highlight”);

Another way to look at this is:
	jQuery(“what to look for”).someAction;

The difference is that with the jQuery version, you can substitute any tag, id, or class, and it will get that element, and add the class “highlight” to it, as per the above example. 

e.g.	jQuery(“.someClass”).addClass(“highlight”);
	jQuery(“p”).addClass(“highlight”);
	jQuery(“a”).addClass(“highlight”);
	jQuery(“li”).addClass(“highlight”);

Witht the jQuery version, our code will automatically work on all the items that match the selector, whereas getElementById will only work on one ID.

We can even refine it more than this. We can combine several of these. Like so:
//Will get all the p tags with a class of description
jQuery(“p.description”)





And we can refine it further by using the colon operator with first, last, contains(), visible.
:first
:last
:contains()
:visible

Using :first and :last mainly applies to when your statement brings back a lot of results - like all the <li> tags on the page. If you use :first, then your code will only apply to the first result. Similarly, if you use :last, your code will only apply to the last result that comes back.

	//Will find every <li> in the DOM, then apply a class of highlight to ONLY the first result
	jQuery(“li:first”).addClass(“highlight”);
	
//Will find every <li> in the DOM, then apply a class of highlight to ONLY the last result
jQuery(“li:last”).addClass(“highlight”);

//Will find every <p> in the DOM, then apply a class of highlight to it ONLY if the 
//paragraph contains the word ‘dogs’
jQuery(“p:contains(‘dogs’)”).addClass(“highlight”);


jQuery Methods
It is better to use jQuery’s .addClass method than the raw Javascript .className method, because the .className method will simply wipe out any class name that is already there, whereas jQuery’s addClass method will add the class name to any existing ones, meaning that you can start stacking your class names in an element.

Other class-related methods you have in jQuery:
	jQuery(“li”).addClass(“highlight”);	
	jQuery(“li”).removeClass(“highlight”);	
	//What toggleClass does is: if the class isn’t there, add it. But if it is there, remove it.
jQuery(“li”).toggleClass(“highlight”);	

jQuery Alias
Instead of writing out jQuery every time, you can simply write the $ sign, as an alias of jQuery. It is only an alias, not like PHP. It’s only an alias.

	//Instead of writing this...
	jQuery(“li”).removeClass(“highlight”);	


	//You can just write this.
$(“li”).removeClass(“highlight”);	


jQuery Effect
	//This will hide all paragraphs by animating their disappearance over 4 seconds
$(“p”).hide(4000);	

We also have 
$(“p”).hide(4000);
$(“p”).show();
$(“p”).slideDown();
$(“p”).slideUp();
$(“p”).fadeIn();
$(“p”).fadeOut();


jQuery Events
	
	//What this does: When you click on an element with the ID of mainTitle, it will change the 
//text node of that element to You clicked on the title!
$(“#mainTitle”).click(function() {
$(“#mainTitle”).text(“You clicked on the title!”)
 } );

Or instead of having to repeat the same selector (in this case the ID), you can simply use this.

//By using ‘this’, we ensure that whichever h2 is clicked has the event applied to it. 
$(“h2”).click(function() {
$(this).text(“You clicked on the title!”)
 } );

Or that every time we click on a paragraph, it will fade it out

//By using ‘this’, we ensure that whichever p is clicked has the event applied to it. 
$(“p”).click(function() {
$(this).fadeOut(2000)
 } );

Window.onload
We use window.onload to call code only once the DOM is fully loaded. The problem with it is, if you accidentally call it many times, only the last one will be paid attention to. 

With jQuery, we have the following function which does a similar thing - meaning that the code we put in here will be run when the DOM is fully loaded, but we could call this function many times, without worrying if we’ve called it before in other statements. They will all work!

//The following code will change the css color property of all h1’s to red, ONLY once the 
//DOM has fully loaded
$(document).ready (function() { 
$(“h1”).css (“color”, “red”); 
} );


Using a Content Distribution Network (CDN)
Instead of downloading a copy of jQuery to your site so that your users can get at it, it is better to use services provided by Google, Microsoft and others to use their servers to download a copy of the JS library you’re looking for. They have many many geographically located servers with load balancing and other stuff, and it is almost ALWAYS faster for the user to get the library from them rather than you. It is free and super easy to use.

All you have to do is put the src in your script tag as whatever the company’s CDN has specified.

e.g. for google
	<script src=”https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js”></script>

This provides:
-improved speed/redundancy
-improved bandwidth
-improved paralleled downloads

To see all their libraries: 
https://developers.google.com/speed/libraries/devguide

If you need to use https, you just remove the http from your src, as follows:
	<script src=”//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js”></script>

This will use whatever protocol the current page is using - so if that is https, then it will call https. 


Browser Support
http://caniuse.com checks if you can use somethign in a specific browser.


New Javascript
	//gets elements by Class Name
var c = document.getElementsByClassName(“myClass”);


Feature Detection
We might want to ask if the browsers supports video using HTML5

	//All you have to do to detect a feauter is to put it in as .feature. So here it is 
//.getElementsByClassName, if if the browser supports this feature, it will return true. You 
//can do this for ANY feature of HTML5 or other.
	if (document.getElementsByClassName) {
	//it exists, we can use it
} else {
	//it doesn’t exist, we can’t use it
}

Easily Detecting HTML5 and CSS3 Features with Modernizr
You can download a copy of it from Modernizr.com and link to it in your website. You should put it in the <head> section because it needs to load immediately before the <body> tag loads.

As soon as it runs, we will have a new JS object called modernizr with over 40 boolean values that tell us if a particular HTML5 feature is supported.

modernizr.video
modernizr.audio
modernizr.canvas

So you can just write code then using it.

if (modernizr.video) {
	//support exists, you can use video
} else {
	//support doesn’t exist, maybe use flash
}

The Development version of Modernizr will check for every feature of HTML5 and CSS3, but if you use the Production version, you can create a custom check.

Modernizr does not GIVE you these HTML5 features, it just checks if they are supported. But it can help you load in shims and poly-fills - which are ways of detecting a missing feature and loading in code that emulates that missing feature (e.g. HTML5 video).

Strict Mode in JS with HTML5
If you turn on strict mode, your JS code gets help to higher coding standards, but whereas in ECMAScript 3 (which we generally use) if you ignore these standards (e.g. not using var before declaring a variable) your mistakes get ignored, in Strict Mode, your code will break if you make these mistakes.

i.e. things that were forgivable in JS3 will not be tolerated in Strict Mode!!

To enable strict mode, just type “use strict”; at the top of your JS file. If strict mode isn’t supported in a browser that reads this line, it will just read it as a string literal and ignore it. Otherwise it will activate Strict Mode.

You can use Strict Mode on a per-function basis.

If you know that you will be including several files - some which use Strict Mode and some which don’t - you can combine the files with a blank function wrapper.

	(function() {
		“use strict”;
		
		//code....
	}



Regular Expressions in Javascript
JS has regular expressions built into the language. 

Regular expressions are odd looking sequences of characters that describe and can match patterns in strings. They let you verify that a credit card number has the right amount of digits or that an email or url matches a basic pattern, or that a password has a good combination of Uppercase, Lowercase and special characters.

There are always 2 parts to them:

1. You create the regular expression that describes the pattern that you’re looking for. 
2. You apply it to something else to see if it matches.

Step 1:
Describe the regular expression: Create a variable with the search term.
	var myRegularExpression = /hello/;


This is almost like creating a string variable but by using the slashes (/), we use a shortcut in Javascript that activates the new RegExp() function.The slashes mark the beginning and the end.

So we could write the statement above in its longhand version, as below:
	var myRegularExpression = new RegExp(“hello”);

These both would create the same variable. 

This is about the simplest pattern you can create, and it would just look for the word “hello” inside of a string.

So if we create a string:
	var myString = “Does the word hello exist inside this string?”;
	//Will return true or false
	if (myRegularExpression.test(myString)) {
		alert(“Yes! The word hello exists inside the string”);
	}

If you called .search instead of .test, it would return the first position of the match. 


Creating More Complex Patterns
To create more complex patterns than single, you need to use special characters.

 	var myRE = /^hello/		// ^ denotes search term must appear at start of string

 	var myRE = /hello$/		// $ denotes search term must appear at end of string
 
	var myRE = /hel+o/		// + denotes previous character must appear once or more 
// times. So helo, hello, or hellllllllo would all match and //return true

	var myRE = /hel*o/		// * denotes previous character must appear zero or more 
// times. So heo, helo, hello, or hellllllllo would all match and 
//return true

	var myRE = /hel?o/		// ? denotes previous character must appear zero or one
// times. So heo, helo, would match and return true, but 
// hello, or hellllllllo would return false.

	var myRE = /hello|goodbye/	// | denotes that either one term or the other must appear in 
// the string. So if the string contains either the words hello 
// or goodbye, it will return true

var myRE = /he..o/		// . denotes that any character is acceptable in that space

var myRE = /\wello/		// \w denotes that this must be an alphanumeric 
// character or an underscore (_)

var myRE = /\bhello/		// \b denotes a word boundary, like a return carriage or a 
// space, so the word hello would have to appear at the 
// beginning of a new line, or after a space, as a word by 
// itself, and not part of another word

var myRE = /[crnld]ope/	// [ ] denotes that a range of characters are acceptable. So 
// if any of the characters inside the square brackets 
// appeared at the beginning of the the word ending with ope 
// (e.g. dope, cope, lope, etc), this would return true

There are many more of these online, including pre-done ones that save you the trouble of making them yourself. E.g credit cards.

There are no real regular expressions that check for a valid email.

Javascript with AJAX
AJAX (Asynchronous Javascript and XML) is not a separate technology or language. It is just a cool technique that we can do with Javascript.

In truth, AJAX doesn’t even require XML. AJAX == Javascript.

How does AJAX Work
It means that after a web page has opened in a user’s browser, we can have Javascript behind the scenes communicate back to the server and pass and retrieve data and update parts of the page without the entire page itself needing to reload. 

For example, Google’s search begins to give you results as you type more letters into a search term. Or the ability to scroll and zoom on an online map like Bing or Google Maps. 

This techniques allows you to build more responsive sites.

How to Use AJAX
1. From Javascript, create an object that will call the server. i.e. creating a request.
2. Let the server pass information to us to deal with any response.

These are 2 distinct steps, because we don’t know how long each step will take

1. Create the Request
	//This is the middle-man between our page loaded in the browser and the server side
	var myRequest = new XMLHttpRequest();

Unfortunately, the XMLHttpRequest() is an object that has a cross-browser difference, so we can’t just write it and be done with it. We first have to see if it exists.

We would rather need to call it like so - testing if it’s there before we use it:

var myRequest;
//Feature check - if this returns true, then we know we are on Firefox or Safari
	if (window.XMLHttpRequest) {
		myRequest = new XMLHttpRequest();
}
//if this returns true, then we know we are in IE
else if (window.ActiveXObject) { 
	myRequest = new ActiveXObject(“Microsoft.XMLHTTP);
}

We haven’t yet said: what are we calling. Where on the server are we reaching to. Have we executed this request yet or not?

2. Prepare to Accept the Response
That request object, when we execute it, will start to kick-off events. The event, in this case, that we’re interested in is the onreadystatechange event. 

	// Like with many other events, we call an anonymous function when the event happens
myRequest.onreadystatechange = function () {
	alert(“We were called!”);
};

As we will see, this event is quite chatty, and the request will cause this event to be called multiple times before we’re completely finished with the entire communication request. 

After we’ve prepared to accept this response, after we’ve created this event handler, then we can configure and send it. 

	// Now we can configure and send it
	// We tell it where the request is going, the method GET or POST, the URL, and true 
// means that this is indeed asynchronous, so as soon as we do it, we’re going to go 
// ahead and execute any other JS code, and the browser can deal with it.
//Send will then send it
myRequest.open(“GET”, “http://mysite.com/somedata.php”, true); 
myRequest.send(null); 


So here we have the full AJAX script, including the changes to the DOM tree that insert the text from the file we are fetching from the server (simple.txt). Also note that when we check that readyState === 4, it means that the server has given us a response (4 = state that we want).

// Simple Ajax example.

// 1: Create the request 
var myRequest;

// feature check!
if (window.XMLHttpRequest) {  // does it exist? we're in Firefox, Safari etc.
    myRequest = new XMLHttpRequest();
} else if (window.ActiveXObject) { // if not, we're in IE
    myRequest = new ActiveXObject("Microsoft.XMLHTTP");
}

// 2: create an event handler for our request to call back
myRequest.onreadystatechange = function(){
    console.log("We were called!");
    console.log(myRequest.readyState);
    if (myRequest.readyState === 4) {
        var p = document.createElement("p");
        var t = document.createTextNode(myRequest.responseText);
        p.appendChild(t);
        document.getElementById("mainContent").appendChild(p);
    }
};

// open and send it
myRequest.open('GET', 'simple.txt', true);
// any parameters?
myRequest.send(null);

//Other Javascript code goes here...




Prototypes in Javascript
We are not talking about the prototype library in JS. 

We are talking about the prototype built-in language feature of JS that helps us create more formalized objects.

We can create an object with the word new and the curly braces.

e.g. 
	var playerFred = { name: “Fred”, score: 1000, rank: 1 };

The problem is that you can easily have an object that looks similar, but in fact has different variables or variables of other data types. 

In other languages (e.g. Java), we have classes which solve this problem, but classes DONT exist in Javascript. Instead, we can fake the behavior of classes so that the result is similar.

Step 1: Formalize Objects with Constructors
Create a constructor function to make our new objects. I.E. We create a function as normal, with the name we want to create other objects from. 

	function Player(n, s, r) {
		this.name = n;
		this.score = s;
		this.rank = r;
}

//This calls the constructor function for this new object
var fred = new Player(“Fred”, 1000, 4);

Every object in JS has a prototype property. And functions like the Player function that we have created above is an object and we can use that prototype property.

Player.prototype.someMethod = function () {
	alert(“This is a method of the this.name” + this.name + “‘s object”);
}

We can use this method to attach new functions to this Player object. Using prototype, we are attaching these functions to the constructor, so they will be automatically be available on any object that was created using that constructor. 

So after we create a new object of type Player, we can use the methods of Player.

//Now you can call the methods of Player - e.g. someMethod
fred.someMethod();

The whole benefit of this is that we can create as many objects as we want, and they will always have the same variables and methods.

Code Examples:

Timer
// two global variables
var secondsRemaining;
var intervalHandle;

function resetPage() {
    document.getElementById("inputArea").style.display = "block";
}

function tick() {
    // grab the h1
    var timeDisplay = document.getElementById("time");
    
    // turn seconds into mm:ss
    var min = Math.floor(secondsRemaining / 60);
    var sec = secondsRemaining - (min * 60);
    
    // add a leading zero (as a string value) if seconds less than 10
    if (sec < 10) {
        sec = "0" + sec;
    }
    // concatenate with colon
    var message = min + ":" + sec;
    // now change the display
    timeDisplay.innerHTML = message;
    
    // stop if down to zero
    if (secondsRemaining === 0) {
        alert("Done!");
        clearInterval(intervalHandle);
        resetPage();
    }
    // subtract from seconds remaining
    secondsRemaining--;
}

function startCountdown() {
    // get contents of the "minutes" text box
    var minutes = document.getElementById("minutes").value;
    // check if not a number
    if (isNaN(minutes)) {
        alert("Please enter a number!");
        return;
    }
    // how many seconds?
    secondsRemaining =  minutes * 60;
    // every second, call the "tick" function
    intervalHandle = setInterval(tick, 1000);
    // hide the form
    document.getElementById("inputArea").style.display = "none";
}

// as soon as the page is loaded...
window.onload =  function () {
    // create input text box and give it an id of "minutes"
    var inputMinutes = document.createElement("input");
    inputMinutes.setAttribute("id", "minutes");
    inputMinutes.setAttribute("type", "text");
    // create a button
    var startButton = document.createElement("input");
    startButton.setAttribute("type", "button");
    startButton.setAttribute("value", "Start Countdown");
    startButton.onclick = function () {
        startCountdown();
    };
    // add to the DOM, to the div called "inputArea"
    document.getElementById("inputArea").appendChild(inputMinutes);
    document.getElementById("inputArea").appendChild(startButton);
};


Change CSS File When Window is Resized
function adjustStyle() {
    var width = 0;
    // get the width.. more cross-browser issues
    if (window.innerHeight) {
        width = window.innerWidth;
    } else if (document.documentElement && document.documentElement.clientHeight) {
        width = document.documentElement.clientWidth;
    } else if (document.body) {
        width = document.body.clientWidth;
    }
    // now we should have it
    if (width < 600) {
        document.getElementById("myCSS").setAttribute("href", "_css/narrow.css");
    } else {
        document.getElementById("myCSS").setAttribute("href", "_css/main.css");
    }
}

// now call it when the window is resized.
window.onresize = function () {
    adjustStyle();
};


jQuery UI
http://jqueryui.com

Has a lot of UI functions that jQuery doesn’t have.

Has a lot of AWESOME effects. 

Great Advice Sites on Javascript
http://developer.mozilla.org/en/JavaScript
http://dev.opera.com
http://docs.jquery.com/Tutorials
http://developer.yahoo.com/javascript
http://developer.yahoo.com/performance
http://stackoverflow.com




