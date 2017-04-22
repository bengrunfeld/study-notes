# Express

Ususally it's good to have `cors` installed with Express so that you can open up your API to other domains.

    npm install --save express cors body-parser

## Create an Express App

    let express = require('express')
    let app = express()

Creates an instance of the express app. We can use this instance to add middleware. 

## Listening on Port

    app.get('/', (req, res) => {
        res.send('<h1>Hello world</h1>')
    })
    let server = app.listen(3000, () => {
        console.log('Listening on port 3000...')
    })

## Middleware

Middleware is customized plugins that we can use with Express to add functionality to our application.

`express.static` will invoke the static file server that comes with Express. Takes in the name of the directory. If we are making requests for any static files that are found under that directory, they will get served.

Each piece of middleware is a function that has three arguments: the request, the response, and the next function that you will invoke once you are finished. So what we're doing here is we are adding some functionality to our pipeline. Meaning that whenever we have a request, that request is going to trickle down through all of these `app.use` statements, until we find and return a response.

    let app = express()
    
    app.use((req, res, next) => {
      console.log(`${req.method} request for '${req.url}'`)
      next()
    })
    
    app.use(express.static('./public'))

Each piece of middleware that uses the `use` method has 3 arguments - `req`, `res` and `next`. 

We need to use `next()` at the end of a middleware block so that command continues.

## Express Handling HTTP Requests

`app.get` sets up a get route that takes a location as a route, and a callback that will handle any requests for that route.

    app.get(url, (req, res) => {
        res.json(someJSONdata)
    })

`res.json` sends the response as JSON.

## Parsing POST Data with Body-Parser

    let bodyParse = require('body-parser')
    let app = express()
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use((req, res, next) => {
        console.log(JSON.stringify(req.body))
        next()
    })

The above code parses all POST variables and places them on the `request` object. 

## Handling Post Routes

    app.post(url, (req, res) => {
        dataObject.push(req.body)
        res.json(dataObject)
    })

## Using Routing Variables

Here, we grab whatever the value for `term` is and then filter it out of our data array. 
 
    let dataArray = ['just', 'an', 'example']
    app.delete('/my-api/:term', (req, res) => {
        dataArray = dataArray.filter((item) => {
            return item.term.toLowerCase() !== req.params.term.toLowerCase()
        })
    })

## Websockets

Web Sockets allow for a true two way connection between the client and the server. Web Sockets use their own protocol to send and receive messages from a TCP server. 

We can connect it with `WS://` as opposed to `HTTP://`.

    let WebSocketServer = require('ws').Server
    let wss = new WebSocketServer({ port: 3000 })
    wss.on('connection', (ws) => {
        ws.send('Welcome to WebSocket Chat!')
    })

`wss.on('connection')` will fire this callback function when we have a new socket connected. And that individual Web Socket will be passed to this function as an argument (`ws`).

This means that we have one client connection and every client that connects is going to cause this callback function to fire and then we can edit their individual connection using this `ws` variable.

We want to add listeners for messages that are sent from the client to the socket server. 

    ws.on('message', (msg) => {
        if (msg === 'exit') {
            ws.close()
        } else {
            wss.
        }
    })

`ws.close()` leaves my socket server running, but it closes this client's connection. Otherwise, if the client has typed anything else, we want to broadcast that to all of the clients.

WSS, is our websocket server instance. `clients` is an array of all the connected websockets.

Because it's a javascript array, I can use the forEach function. The forEach function takes in a callback that will be invoked once for every one of the clients that are in that array. So, I'm going to pass the individual client to this function. So, now we have nice loop, looping through all of the clients, and to broadcast the chat message back, I'm just going to invoke a client.send.

## Socket.IO

Socket.io fails back to Long Polling when WebSockets aren't supported.

    let express = require('express')
    let http = require('http')
    let app = express()
    let server = http.createServer(app).listen(3000)
    let sio = require('socket.io')(server)

Socket.IO is a function, and when you invoke the Socket.IO function you need to send it the server that it should listen for incoming connections on. So here we are invoking the Socket.IO function by sending it the HTTP server that we created with the Express app.

With Socket.IO, we don't actually connect to the pure websocket. Socket.IO handles all of the connections for us. So `io.on("connection")` will listen for an incoming Socket.IO connection. And then will it cause this callback function to be invoked. 

    sio.on('connection', (socket) => {
      socket.on('chat', (message) => {
        socket.broadcast.emit('message', message)
      })
      socket.emit('message', 'Welcome to Grunfeldian Chat')
    })

This callback function is going to have the socket passed to it as an argument. So this represents one socket endpoint that's connected. And, what we're going to do, is, as soon as a client connects, we are going to socket.emit a message event.

And what we can do is broadcast to all the connected sockets this message. So I'm going to go ahead and say socket.broadcast. Socket.broadcast.emit will emit an event, like a message event, to every connected socket. So, when we receive a chat message from the client, I am going to broadcast that chat message to all of the connected sockets, using socket.broadcast.

In order to use Socket.IO on the client we actually have to include the Socket.IO client JavaScript file. 

    npm install --save socket.io-client

This client is going to add the functionality to make our socket application work to those browsers that do not support websockets.

## Setting Environment Variables

`app.set` will set an environment variable, which can later be accessed with `app.get('port')`

    app.set('port', process.env.PORT || 3000)

If we wanted to set the environment variable 'PORT', then in the terminal, we'd just do this - if we wanted to make it `4000`

    PORT=4000

## Using the Router

To create a mountable router, we can use the Router module.

    // ./routes/dog.js
    let express = require('express')
    let router = express.Router()
    router.get('/dog', (req, res) => {
        res.send(`My response`)
    })
    module.exports = router

Then in your main express file

    // main.js
    app.use(require('./routes/dog'))

## Passing Information in Express

In your main express file, you can set a framework variable with `app.set`, which can then be used inside anything that has access to the `req` variable with `req.app.get`. E.g.

    let dog = require('./animal/dog')
    app.set('canine', dog)
    
    // Now in another file
    app.use((req, res, next) => {
        console.log(`Our animal is a ${req.app.get('canine')})
    })

## Working with Templates

EJS stands for Embeddable Javascript, and its a templating system.

    npm install --save ejs

Then you need to specify to Express what view engine you're using - in our case EJS - as well as where we're keeping them. E.g.

    app.set('view engine', 'ejs') 
    app.set('views', 'public/views')

Once we do this, our Routes will have access to our Views.

To render this, you would use the `res.render` method inside of a route, like so:

    let express = require('express')
    let route = express.Router()
    
    router.get('/dogs', (req, res) => {
        res.render('index')
    })

This will attempt to render the template called `index.ejs` in the `./public/views` folder.

### Passing Data with Templates

You can pass data to your template inside of your route with `res.render('index', { data })`. Data will become a local variable that you can use inside of your templates.

    app.locals.someVar = {'someData': 123}

you also have the option of setting a variable from within your application. It's sort of a global version if a variable, that will become a local variable, inside your views. Declaring it this way will make it available to all the routes in your application.

    <%= data %>

Inside of the templates, you use this syntax to access the variables that you've created.

### Conditionals and Loops with EJS

You can perform Javascript functions inside of template tags

    <% if (myVar === true) { %>
        <div><p>Thing</p></div>
    <% } %>

### Creating Partials with Tempalates

EJS has an `include` function to enable you to create mini-templates, e.g. header information that belongs on every page.

    <head>
        <% include templates/head.ejs %>
    </head>

