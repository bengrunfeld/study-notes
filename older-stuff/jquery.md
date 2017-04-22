# JQUERY

Can be found at jquery.com

Step 1: Download the JQUERY Library
Step 2: Link to the JQUERY file on your website - <script src=”jquery-1.6.1.min.js”></script>

## Regular JS vs jQuery

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


## jQuery Methods

It is better to use jQuery’s .addClass method than the raw Javascript .className method, because the .className method will simply wipe out any class name that is already there, whereas jQuery’s addClass method will add the class name to any existing ones, meaning that you can start stacking your class names in an element.

Other class-related methods you have in jQuery:
	jQuery(“li”).addClass(“highlight”);	
	jQuery(“li”).removeClass(“highlight”);	
	//What toggleClass does is: if the class isn’t there, add it. But if it is there, remove it.
jQuery(“li”).toggleClass(“highlight”);	

## jQuery Alias

Instead of writing out jQuery every time, you can simply write the $ sign, as an alias of jQuery. It is only an alias, not like PHP. It’s only an alias.

	//Instead of writing this...
	jQuery(“li”).removeClass(“highlight”);	


	//You can just write this.
$(“li”).removeClass(“highlight”);	


## jQuery Effect

	//This will hide all paragraphs by animating their disappearance over 4 seconds
$(“p”).hide(4000);	

We also have 
$(“p”).hide(4000);
$(“p”).show();
$(“p”).slideDown();
$(“p”).slideUp();
$(“p”).fadeIn();
$(“p”).fadeOut();


## jQuery Events
	
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


## Using a Content Distribution Network (CDN)

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





## jQuery UI

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




