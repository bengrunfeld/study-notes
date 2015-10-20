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

### 4. Default 

	

