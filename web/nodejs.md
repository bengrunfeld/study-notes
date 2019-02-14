# Node.JS

Node.js is an open-source cross platform runtime environment for server-side and networking applications. It's built on top of Chrome's Javascript Runtime, the V8 Engine. Applications for Node are written in JavaScript.

## Docs

[https://nodejs.org/api/](https://nodejs.org/api/)

## Working with Modules

In Node, files and modules are the same thing. E.g. in Python, you need a folder with `__init__.py` in it to be classified as a module. You DON'T need that in Node. It's all just files.

file1.js:

    exports.myText = 'how are you?';


file2.js:

    var file1 = require('./file1.js');
    console.log('hello, ', file1.myText);


## Async

Node.js is single-threaded. All of the users are sharing the same thread. Events are raised and recorded in an event queue and then handled in the order that they were raised.

Node.js is asynchronous, which means that it can do more than one thing at a time. This ability to multitask is what makes Node.js so fast.

## The Global Object

    <Object> The global namespace object.

In browsers, the top-level scope is the global scope. That means that in browsers if you're in the global scope `var something` will define a global variable. In Node.js this is different. The top-level scope is not the global scope; `var something` inside an Node.js module will be local to that module.

Every node js file that we create is it's own module. Any variable that we create in a node js file, is scoped only to that module. That means that our variables are not added to the global object the way that they are in the browser.

## Get Current Directory and Filename

These will give you the current directory and current filename:

    console.log(__dirname)
    console.log(__filename)

You can also use the inbuilt `path` module for extra features re paths.

    var path = require('path')
    console.log(path.basename(__filename))

This will pluck the base filename from a full path.

We can also use the path module to create path strings. The `path.join()` function can be used to join strings together in a path.

    var pathString = path.join(__dirname, 'src', 'js', 'components')
    // if you log this, it comes out [full static path]/src/js/components


## The .js Extension

You can leave off the `.js` extension in the command line when calling files and in require statements, because it's assumed by Node

So instead of:

    node index.js

You can do
    
    node index

## The Process Object

Allows us to interact with information about the current process. 

We can use the process object to get environment information, read environment variables, communicate with the terminal, or parent processes, through standard input and standard output. We can even exit the current process. This object essentially gives us a way to work with the current process instance. One of the the things that we can do with the process object is to collect all the information from the terminal, or command prompt, when the application starts.

All of this information will be saved in a variable called `process.argv` which stands for the argument variables used to start the process.

So if you call a node file with

    node index --user Ben --password whyH3ll0

And you `console.log(process.argv)`, the above flags and values will be printed in their data structure.

Another feature of the process object is `standard input` and `standard output`. These two objects offer us a way to communicate with a process while it is running.

`process.stdout.write` - uses the standard output to write things to the terminal. `console.log` uses this.

`process.stdin.on('data', callback)` - uses the standard input to accept data from the user and fire a data event (i.e. data event is where a user enters something via the terminal and hits `enter`).

To exit a process use `process.exit()`

You can use `process.on('exit', () => {})` to catch the exit event and then do something. 

`process.stdout.cleanLine()` - will clear the current line in the terminal

`process.stdout.cursorTo(i)` - will send the cursor to position `i` on the current line.

## The Util Module

The `util.log` method is similar to `console.log`, except it adds a data and a timestamp. Cool!

    let util = require('util')
    util.log('An error occurred')

## The Event Emitter

The Event Emitter is Node.js's implementation of the pub/sub design pattern, and it allows us to create listeners for an emit custom Events.

    let events = require('events')
    let emitter = new events.EventEmitter()
    emitter.on('customEvent', (message, status) => {
        console.log(`${status}: ${message}`)
    })
    emitter.emit('customEvent', 'All is good', 200)

### Inheriting the Event Emitter into an Object

The utilities module has an inherits function, and it's a way that we can add an object to the prototype of an existing object.

    let EventEmitter = require('events').EventEmitter
    let util = require('util')
    let Person = (name) => { this.name = name }
    util.inherits(Person, EventEmitter)

If we now create a new instance of a Person, it will have an `on` and `emit` function. 

## Creating Child Processes with Exec

Node.js comes with a `child_process` module which allows you to execute external processes in your environment. In other words, your Node.js app can run and communicate with other applications on the computer that it is hosting.

    let exec = require('child_process').exec
    exec('ls', (err, stdout) => {
        if (err) {
            throw err
        }
        console.log(stdout)
    })

## Creating Child Processes with Spawn

`spawn` is similar to `exec`, but it is meant for ongoing processes with larger amounts of data. `exec` is good for small singular commands.

    let spawn = require('child_process').spawn
    let cp = spawn('node', ['myFileToRun'])
    cp.stdout.on('data', (data) => {
        console.log(`STDOUT: ${data.toString()}`)
    })
    cp.on('close', () => {
        console.log('finished')
        process.exit()
    })

## Working with the File System

Node allows you to work with the file system via asynchronous or synchronous commands. All synchronous commands are suffixed with `Sync`, e.g. 

    let fs = require('fs')
    console.log(fs.readdirSync('./'))

If you wish to use the Async version, then just leave off the `Sync` at the end.

    let fs = require('fs')
    fs.readdir('./', (err, files) => {
        if (err) {
            throw err
        }
        console.log(files)
    })

## File Streams

`readFile` buffers all of the data from a file, so if it gets too big, you could have a memory overflow or develop system slowdown or any number of problems. 

For large files, it's better to use streams, which just grab small chucks of the file at a time and allow you to do work with them individually.

    let fs = require('fs')
    
    let stream = fs.createReadStream('./status.log', 'UTF-8')
    let data = ''
    
    stream.once('data', () => { console.log('Started Reading File') })
    stream.on('data', (chunk) => { data += chunk })
    stream.on('end', () => { console.log(`Finished: ${data.length}`) })

### Writable File Streams

Just like we can have readable file streams (above), we can also use file streams to write to files, chunk by chunk. If the filename does not exist, Node will create a file of that name.

    let fs = require('fs')
    
    let stream = fs.createWriteStream('./status.log')
    stream.write('Some text here' + whateverElse)

##  The HTTP/S Module

If you're working with HTTPS, then you'll need to use The HTTPS Module. Both HTTP and HTTPS modules have a request method that takes options, and fire a callback function once the request has started. The `res` response object implements the stream interface.

    let https = require('https')
    let option = {
        hostname: 'en.wikipedia.org',
        port: 443,
        path: '/wiki/Piracy',
        method: 'GET'
    }
    let req = https.request(options, (res) => {
        res.setEncoding = 'UTF-8'
        console.log(res.headers)
        console.log(res.statusCode)
        res.on('data', (chunk) => {
            console.log(chunk, chunk.length)
        })
    })
    req.on('error', (err) => { console.log(err) })
    req.end()

## Creating a Web Server

We use the `http.createServer` method of the `http` module to create a webserver. Every reqeust sent to this server will cause the method's callback function that we define to be invoked.

    let http = require('http')
    let server = http.createServer((req, res) => {
      res.writeHead(200, {'Content-Type': 'text/plain'})
      res.end('Output text')
    })
    server.listen(3000)
    console.log('Listening on port 3000')

The `req` object that we receive as an argument to this method will contain information about the requested headers, any data that is going along with the request, as well as information about our user, like their environment and so on.

The other argument that we'll be adding here is going to be our response `res` object. So, we will have a blank response object also sent to this request function, and it's going to be our job to complete the response. We will do so by writing the response headers. So I'm going to use the `res.writeHead` method to complete our response headers. The first argument that we add to this method is going to be our response status code. 200 means that we have a successful response. 

The second argument represents a JavaScript literal of all the headers that I am going to add to this response.

`res.end` can be used to end our response, and we will send "Output Text". Finally we need to tell this server instance what IP and port it should be listening for incoming requests on.

`server.listen` is a function that we can use to specific the IP address and incoming port for all of our web requests for this server. I'm going to add (3000), telling this server to listen to any requests on this local machine for port 3000.

## Making an API

To make an API, you filter URL's and HTTP methods with `if (req.url === '/')` and `if (req.method = 'GET')`. Then you can use regular JS to create a response and return it back.
