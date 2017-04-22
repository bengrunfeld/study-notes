# Setting Up React/Redux App

Setting up a new app is sometimes a little daunting. Getting everything to work together and play nice can be a headache for those unfamiliar with the workflow. The following sets up a React and Redux app, where files are taken from `src/js` and transpiled via Babel, then output to `dist`. SASS files that you `require` in your Javascript are transpiled as well.

### 1. Create Node `.gitignore`

[Link to Node `.gitignore`](https://github.com/github/gitignore/blob/master/Node.gitignore)

### 2. Add `README.md`

    vi README.md

### 3. Set up Directory Structure

    mkdir src src/js src/html src/css src/img test

### 4. Set up `package.json`

    npm init

Then in scripts, add `"start": "./node_modules/.bin/webpack-dev-server"`

### 4. Import Node Modules

    npm install --save express body-parser ejs cors request body-parser react react-dom react-router redux redux-thunk

    npm install --save-dev webpack webpack-dev-server babel-cli babel-core babel-loader babel-preset-es2015 babel-preset-react copy-webpack-plugin css-loader node-sass sass-loader style-loader mocha chai istanbul

### 5. Set up Webpack Config

You can use something similar to the following:

[Link to Webpack Config Example](http://cloudandcode.tumblr.com/post/157253246206/npm-and-webpack-setup-for-react-app)

### 6. Usage

* To transpile your code, use `webpack`
* To transpile your code and run the webserver, use `npm start`
