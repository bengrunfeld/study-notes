# Yeoman

## Requirements

To use Yeoman, you'll need to have `Node.js` installed on your computer.

You can install Node by navigating to their website at [https://nodejs.org] and downloading the installer package.

The Node Package Manager installs with Node, and is available for use with the `npm` command.


#### Updating Node or NPM

If you need to update your version of Node or NPM, use the following on Mac

First, check your current version with:

	node -v
	npm -v

[http://askubuntu.com/questions/426750/how-can-i-update-my-nodejs-to-the-latest-version](http://askubuntu.com/questions/426750/how-can-i-update-my-nodejs-to-the-latest-version)

Then check that the packages updated successfully with:

	node -v
	npm -v


## Installing Yeoman

With NPM now installed, you can install Yeoman with:

	npm install -g yo
	
The `-g` flag is very important, because it installs `yo` globally, so that it is accessible as a command from anywhere inside your machine. 

If you don't add this flag, Node will only install `yo` into your current directory, and it will not be accessible from elsewhere.

## What is Yeoman

Yeoman is a scaffolding tool made up of 3 main tools:

1. Yo
2. A task runner (Grunt or Gulp)
3. A package manager (Bower or NPM)
	
## Generators

Generators are node modules that get run by the `yo` command.

You can find pre-made generators at [http://yeoman.io/generators/](http://yeoman.io/generators/) 

## Basic Usage

To install a generator, use NPM
	
	npm install --global generator-name

Because it was installed globally, it can be run from anywhere on your machine with the command:

	yo generator-name

## Build your own Generator

### 1. Create the generator directory

The generator directory must be named `generator-name`. The naming convention is important, as Yeoman relies on the file system to find available generators.

### 2. Create a package.json

`cd` into your `generator-name` directory and create a `package.json` file. Either write it by hand with the following code, or use `npm init` to help you out.

	{
	  "name": "generator-name",
	  "version": "0.1.0",
	  "description": "",
	  "files": [
	    "app",
	    "router"
	  ],
	  "keywords": ["yeoman-generator"],
	  "dependencies": {
	    "yeoman-generator": "^0.20.2"
	  }
	}	

The `name` property must be prefixed by `generator-`. The `keywords` property must contain `"yeoman-generator"` and the repo must have a description to be indexed by the Yeoman generators page – [http://yeoman.io/generators/](http://yeoman.io/generators/).

### 3. Set dependencies

Set the latest version of `yeoman-generator` as a dependency. You can do this by running: 

	npm install --save yeoman-generator

The `files` property must be an array of files and directories that is used by your generator.

### 4. File Structure

Yeoman is deeply linked to the file system and to how you structure your directory tree.

The default generator used when you call yo name is the app generator. This must be contained within the app/ directory.

An example project directory tree would look similar to this:

	├───package.json
	├───app/
	│   └───index.js
	└───router/
	    └───index.js

This generator will expose the `yo name` and `yo name:router` commands.

You may not like keeping all your code at the root of your folder. Luckily, Yeoman allows for two different directory structures. It will look in `./` and in `generators/` to register available generators.

The previous example can be written as follows

	├───package.json
	└───generators/
	    ├───app/
	    │   └───index.js
	    └───router/
	        └───index.js

If you use this second directory structure, make sure you point the files property in your `package.json` at the generators folder.

	{
	  "files": [
	    "generators/app",
	    "generators/router"
	  ]
	}

### 5. Extending the generator

Once you have this structure in place, we can go ahead and write the actual generator in `app/index.js`.

Yeoman offers base generators which you can extend to implement your own behavior. These base generators will add most of the functionality you'd expect to ease your task.

Here's how you'd extend a base generator:

	var generators = require('yeoman-generator');
	
	module.exports = generators.Base.extend();

The `extend` method will extend the base class and allow you to provide a new prototype.
	
We assign the extended generator to `module.exports` to make it available to the ecosystem. This is modules are exported in `Node.js`.

### 6. Overwriting the Constructor

To override the generator constructor, you pass a constructor function to `extend()`. E.g.

	module.exports = generators.Base.extend({
	  method1: function () {
	    console.log('method 1 just ran');
	  },
	  method2: function () {
	    console.log('method 2 just ran');
	  }
	});

### 7. Running the Generator

Since you're developing the generator locally, it's not yet available as a global `npm` module. A global module may be created and symlinked to a local one, using `npm`.

On the command line, from the root of your generator project (in the `generator-name/` folder)

	npm link

That will install your project dependencies and symlink a global module to your local file. After `npm` is done, you'll be able to call `yo name` and you should see the `console.log` defined earlier rendered to the terminal.

### 8. Setting the Project Root

Yeoman searches the directory tree for a `.yo-rc.json` file. If found, it considers the location of the file as the root of the project. Behind the scenes, Yeoman will change the current directory to the `.yo-rc.json` file location and run the requested generator there.

The Storage module creates the `.yo-rc.json` file. Calling `this.config.save()` from a generator for the first time will create the file.

