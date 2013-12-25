# REST

Credit to Stefan Tilkov for the information summarized below. The original article can be read [here](http://www.infoq.com/articles/rest-introduction)

The term REST was defined by [Roy T. Fielding](http://www.ics.uci.edu/~fielding/) in his [PHD Thesis](http://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm)

REST stands for REpresentational State Transfer, and is current best practice for web application design.

## The Rules of REST:

1. Give everything an ID
2. Link things together
3. Use standard methods
4. Resources with multiple representations
5. Communicate statelessly

## Explanation of the Rules

#### 1. Give everything an ID

Every significant resource or collection of resources that merits identification should get its own ID. For example, the customers area of a website should be called `http://mysite.com/customer/` and not `http://mysite.com/6e372hf`.

#### 2. Link things together

Based on the concept of HATEOAS (Hypermedia as the engine of application state), use links to refer to identifiable things (resources) wherever possible.

A client should be able to move the application from one state to the next by following a link.

#### 3. Use Standard Methods

HTTP has a set of operations (aka Standard Methods) it calls "verbs". They include:

* GET 
* POST
* PUT
* DELETE
* HEAD 
* OPTIONS

You can only use these HTTP Standard Methods in your application according to REST, and they should be used for their intended purposes (e.g. don't use a GET request to delete something).

#### 4. Resources with Multiple Representations

If a client “knows” both the HTTP application protocol and a set of data formats, it can interact with any RESTful HTTP application in the world in a very meaningful way.

If you provide both an HTML and an XML representation of your resources, they are consumable not only by your application, but also by every standard Web browser — in other words, information in your application becomes available to everyone who knows how to use the Web.

As an additional benefit, you can turn your application’s Web UI into its Web API.

(API design is often driven by the idea that everything that can be done via the UI should also be doable via the API.)

Summary: Provide multiple representations of resources for different needs.

#### Communicate statelessly

First of all, it’s important to stress that although REST includes the idea of statelessness, this does not mean that an application that exposes its functionally cannot have state.

REST mandates that state be either turned into a resource state, or kept on the client. 

In other words, a server should not have to retain some sort of communication state for any of the clients it communicates with beyond a single request.

The statelessness constraint isolates the client against changes on the server as it is not dependent on talking to the same server in two consecutive requests.

