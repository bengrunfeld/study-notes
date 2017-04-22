# Webpack

Webpack is a build tool that allows us to take all of our assets independencies and turn them into a production ready bundle. All of our files are considered modules and we tell webpack to load those modules and require them when we configure our project.

This from the [Webpack npm page](https://www.npmjs.com/package/webpack):

webpack is a bundler for modules. The main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.

## Example Code

Examples of nearly all of the concepts below are available at: [https://github.com/bengrunfeld/webpack-examples](https://github.com/bengrunfeld/webpack-examples)

## Difference Between Webpack, Gulp, and Grunt

Webpack is a module bundler. Gulp and Grunt are task runners. 

While Webpack can transpile and modify code, there are some things Gulp and Grunt can do that Webpack can't, but these tasks can be performed by using npm scripts in your `package.json` with much less code.

## Using the Webpack CLI

In the following code, webpack takes entry.js as the input, and outputs the file to `./dist/main.bundle.js`

  webpack entry.js ./dist/main.bundle.js

## Using the Webpack Config File

To save your configuration to a file, create `webpack.config.js`. The file below will output the bundled code to `dist/main.bundle.js`

    let path = require('path')
    module.exports = {
      entry: './src/entry.js',
      output: {
        path: path.join(__dirname, 'dist'),
        filename: 'main.bundle.js'
      }
    }

## Using the `-w` flag

If run `webpack -w`, it will watch the entry point that you provided, and if anything changes in it, it will rebundle your package.

## Loaders

Webpack loaders load and perform transformations on files. Typically use cases for loaders are JSX and ES6. JSX isn't supported natively in browsers, and not all features of ES6 are supported across all browsers, so both need to be transpiled into plain vanilla Javascript in order for them to run smoothly. We use loaders for this.

In most cases, we use Babel (`babel-loader`) to perform this transpilation step.

    npm install babel-loader babel-core babel-preset-es2015 babel-preset-react --save-dev

    let path = require('path')
    module.exports = {
      entry: './src/entry.js',
      output: {
        path: path.join(__dirname, 'dist'),
        filename: 'main.bundle.js'
      },
      module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
      }
    }


In Babel 6, you have to opt-in for any transpilation steps. So you have to specify what you want to transpile using presets. Note the query object that has presets for `es2015` and `react`.

We also have to set up a `.babelrc` file 

    {
        'presets': [
            'es2015', 'react'
        ]
    }

If you receive a deprecation warning for using babel-loader, it's a known bug and they're trying to fix it. 

Simply set `process.noDeprecation = true` in the main part of the file (i.e. outside of `module.exports`) and all will be well.

## Loading CSS with Webpack

When you load CSS as a module in your code, Webpack will only bundle the styles that your app uses. To do this, you need to `require` the CSS file in your JS code.

First you need to install dependencies.

    npm install style-loader css-loader --save-dev

Then add a css loader to your `webpack.config.js`

    module: {
      loaders: [
          {
              test: /\.css$/,
              loader: 'style-loader!css-loader'
          }
      ]
    }

Then require the css file inside of your Javascript

    require('./dist/style.css')

## Loading SASS with Webpack

We can use Webpack loaders to transpile SASS (`*.scss`). 

    npm install sass-loader node-sass --save-dev

Then just change the CSS loader to the following in your `webpack.config.js`

    {
      test: /\.scss$/,
      loader: 'style-loader!css-loader!sass-loader'
    }

And of course in your Javascript files, change the file extensions in the require statements to `scss`

    require('./style.scss')

## Loading Images with Webpack

We use `url-loader` with Webpack to load images. Webpack in-lines a URL to the image bundle and then returns it from require. We wanna do this because in-lining images will reduce the number of HTTP requests which will speed up our applications a lot.

    npm install url-loader file-loader --save-dev

Then in your SASS file, you just load an image as usual, e.g. `background: url(mypic.jpg)`.

To enable in your `webpack.config.js`:

    {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=20000'
    },

The `limit=20000` just means that if the image size is greater than 20kb, then use the loader to create a direct url to the image asset.

## Code Splitting

Code splitting is the idea of using multiple entry points for better performance optimization. So if someone loads the `contact us` page, they do not receive the code for `about us` as well. They only receive the code that they need to load that page. 

This way, separate bundles are created for different pages. So we will only load the code that we need.

For example, say you have `home.html` that calls `home.js` which in turn requires `messages.js`. 

And you also have `blog.html` that calls `blog.js` which in turn requires `posts.js`

The following webpack config file will cause 2 bundles to be created - `home.bundle.js` and `blog.bundle.js`. `home` will only have the code that it needs, and `blog` will only have the code that it needs.

    entry: {
      home: './src/home',
      blog: './src/blog'
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name].bundle.js'
    },

## Common Chunks Plugin

The CommonsChunkPlugin will look for reused code and will create a separate bundle with common code. Then we'll load the common code into the page first and load in page specific code after that.

To use it in your `webpack.config.js`

    let CommonsChunkPlugin = require('./node_modules/webpack/lib/optimize/CommonsChunkPlugin')
    entry: '',
    output: '',
    module: { loaders:[] },
    plugins: [
     new CommonsChunkPlugin('commons', 'commons.bundle.js')
    ]

`commons.bundle.js` will now be added to `dist` and it will have any code that is common inbetween `home` and `blog`. So, `home.bundle.js` is code just for the `home` page. `blog.bundle.js` is code just for the `blog` page.

Then you need to call `commons.bundle.js` via script tags in all the `html` files that need access to it. In our example - `home.html` and `blog.html`. 

## Creating a Vendor Bundle

`webpack.config.js`

    entry: {
      home: './src/home',
      blog: './src/blog',
      vendor: ['jquery', 'react', 'react-dom']
    },
    output: {},
    module: {},
    plugins: [
       new CommonsChunkPlugin({name: 'vendor', filename: 'vendor.bundle.js'})
    ]

This will create a bundle of all our vendor code, in the above example, specifically `jquery`, `react`, and `react-dom`. 

You then need to change the `<script src="">` tags to `vendor.bundle.js` in your html pages.

## Hot Reloading with Webpack Dev Server

Webpack offers a dev server that will immediately re-transpile and bundle your code every time it detects a change. It will also allow you to view your project at a local url like `localhost:3000`.

In our `webpack.config.js`

    entry: './dist/app.js',
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'main.bundle.js'
    },
    devServer: {
      inline: true,
      contentBase: './dist',
      port: 3000
    },

In our `package.json`

    "scripts": {
      "build": "webpack",
      "start": "webpack-dev-server"
    },

Now, if you make a change to any of the files that are being watched, webpack dev server will recompile.
