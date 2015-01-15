# JQUERY

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




