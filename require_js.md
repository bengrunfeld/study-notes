# Require.js

### Strengths of Require.js

##### 1. Code Organization:

Require.js enables you to use one piece of code and use it in many files

##### 2. Code Scaleability: 

Require.js enables you to have code in multiple files and use them in one place.

##### 3. Optimization of code:

Require.js allows you to easily optimize your code. It has a library called `r.js` which compiles your code to a single file that minifies, uglifies and removes white space from your code.

##### 4. Multi-Developer Teams & Dependency Hell

Multiple people can work on multiple files. You don't have to worry about **nested dependencies**, because Require takes care of all of that for you.

##### 5. Async

Because most assets on the Web are loaded Asynchronously, you need something that will load files in an Async manner as well. Require takes care of this.

### Installation

##### Place the following `script` tag in your HTML file:

	<script data-main="scripts/main" src="http://cdnjs.cloudflare.com/ajax/libs/require.js/2.1.15/require.min.js"></script>
	
##### Install Require.js

	npm install requirejs

### Usage

The 3 things you need to know in Require.JS are 

* `define`
* `require`
* `config`

##### Define

`define` is a function defined by Require. It basically says "define this block of code as a module". The first param it takes is a list of dependencies. Define will only run the code in the function if `dependencies` has loaded. It will then pass the object returned by the dependency to the function as a param - in this case `deps` (although the convention is to use the same name as the class). If you leave the dependency array empty, it will simple run the function.

	define(["dependencies"], function(deps){
		"use strict";
		
		//code goes here
	});

##### Config

`config` allows you to configure how `require` works.

You can set the path of `dependencies` in config, so that you can just use an alias, and it will grab the entire path from config. 

	require.config({
		baseUrl: "./js",
		optimize: none //choose optimization here
		watiSeconds: 10,
		packages: [
			{
				name: "json2",
				location: "./libs/json2",
				main: "json2"
			},
			{
				name: "jquery",
				location: "./libs/jquery",
				main: "jquery"
			}
		]
	});

##### Require

`require` basically says "I want to use the modules in this list". When they're loaded, pass them to the function as params. It works almost exactly like `define`, except that it only loads and uses modules, it doesn't define them.

##### Tricks

**1. Nest your Requires for stuff you really need**

There's a problem that sometimes affects backbone where **Underscore** doesn't get loaded properly before other code runs, so here's a way to fix that, that ensures that **Underscore** is fully loaded before anything else runs:


	require(["underscore"]), function() {
		require(["your-class"]), function(yourclass) {
			// some code here
		});
	});

**2. Write your Defines inside of anon functions**

Everything you write inside of a function is a variable and dies at the end of the function. So it is best practice to keep your `define` statements inside of a function. E.g.

	(function()bbkkjkkj{
		define([], function(){
			var Person = function(first, last){
				return {
					firstName: first,
					lastName: last
				};
			};
			return Person;
		});
	})());

**3. Stop yourself hunting errors**

When you log an error, log the classname that it's coming from. In a modular envionrment on a large code base e.g.

	if (typeOf thing == 'undefined'){
		console.log('ThisClass::this_method - thing is not defined);
	}

### Using r.js

`r.js` is a Javascript file that is the optimization for Require.JS

