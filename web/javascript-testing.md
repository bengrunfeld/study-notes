# Testing

## Mocha

Mocha looks in the `test` directory for tests. 

We set up a suite of tests with the `describe` command, which takes a first argument of the function to be tested, and the second argument is a callback that contains the testing code.

    var expect = require('chai').expect
    var tools = require('../src/tools')
    
    describe('printName()', () => {
        it('should print the Users name', () =>  {
            var results = tools.printName({ first: 'Ben', last: 'Grunfeld' })
            expect(results).to.equal('Ben Grunfeld')
        })
    })

Mocha gives us a Suite for describing, running and building tests but it does not give us a way to check values. That is where you might want to consider using Chai.

## Chai

Chai has an assertion engine as well as the expect function. 

## Nested Suites

`describe` statements can be nested. 

    describe('Tools', () ={
        describe('printName()', () => {
            it('should print out first and last name', () => { ... })
        })
        describe('loadWiki()', () => {
            it('should load the wikipedia page', () => { ... })
        })
    
    })

To compare two objects `if (obj1 === obj2)`, you can use `expect(obj1).to.deep.equal(obj2)`


## Hooks

Mocha has a concept called Hooks, and we can add Hooks before or before each test, or after or after each test, and what it will allow us to do is define some code that we should run before we run the whole test suite, or after the whole test suite, or before each test in the test suite, or after each test in the test suite.

    describe('shakeBooty()', () => {
        before(() => {
            // to be done before every test
        })
    })    

## SUT - System Under Test

## Async Testing

The describe block callback takes an argument. This argument is typically called `done`, and it is used for Async tests by placing it in the code at the place where you expect your tests to end. `done()`.


## Nock

Nock can mock out web servers. To install:

    npm install nock --save-dev

To use in code:

    let tools = require('./src/tools')
    let nock = require('nock')
    describe('loadWikiPage()', () => {
        before(() => {
            nock('https://en.wikipedia.org')
                .get('/wiki/Abraham_Lincoln')
                .reply(200, 'Mock Abe Lincoln page')
        })
        it('Load Abe Lincoln wiki page', (done) => {
            tools.loadWikiPage({ first: 'Abraham', last: 'Lincoln' }, (html) => {
                expect(html).to.be.ok
                done()
            })
        }) 
    })

Nock in the above code will intercept the real http request and instead return the mocked response.

## Rewire

Installation

    npm install rewire --save-dev

Nock allows us to mock a web server, but we can actually mock ANY dependency that our application has. 

Rewire injects variables into our `SUT` (System Under Test). And because we can inject these variables, it will allow us to replace real data with the test data when we are testing a module.

When our SUT uses data, we always want to use fake (mock) data so that our app doesn't accidentally mutate production data.

In code:

    let order = rewire('./src/order')
    describe('Ordering items', () => {
        beforeEach(() => {
            this.testData = [
                {sku: 'AAA', qty: 10}
            ]
        })
    })

## Sinon

Sinon.JS is an open source module that we can use to help us create mock objects for our test. 

Spies are special kind of functions that record details about how they are called, what arguments they are called with, in the state of the this object that is associated with every function. We can use spies in place of real functions. They allow us to check and make sure that a specific function has been invoked without having to invoke a real function.

### Stubs

Another powerful testing tool in the Sinon library is a stub. Stubs are essentially more powerful spies. They can do anything that a spy can do, and additionally they allow you to control the behavior of a particular function.

We want to use stubs when our program requires us to invoke functions that behave a certain way, either they return data, invoke a callback with data, or even throw an error.

So if we would like to tell this Sinon stub to invoke the callback function that is sent to the target function, we can do so with a yields function. The yields function will invoke the callback that is sent to the target function, and we can add the arguments that it should send to that callback.

## Istanbul - Code Coverage

Istanbul is a npm package that generates code coverage reports. 

    npm install -g istanbul
    istanbul cover _mocha

You need to use `_mocha` because when you call `mocha`, it actually forks the `_mocha` process. 

To view a webpage of the results, navigate to

    ./coverage/lcov-report/index.html

Then you can navigate the folders and files covered and see what needs coverage to be improved. 

## Supertest - Testing HTTP Endpoints

Supertest allows you to mock HTTP endpoints and test them.

    let request = require('supertest')
    
    it('Loads the home page', (done) => {
        request(app).get('/').expect(200).end(done)
    })

This will be an async test, so we need to tell mocha when it's over. With Supertest, we can chain on a `end` function that takes in a callback to invoke when the test is finished. So we can let Mocha know that this is an async test by adding `done` as an arguemnt to the `it` function, and then inside of the `end` function, you add `done`.

    it('POSTS dictionary-api', (done) => {
        request(app)
            .post('/dictionary-api')
            .send({ 'term': 'three', 'defined': 'Term three defined'})
            .expect(200)
            .end(done)
    })

### Testing the Data Returned by the Server

If you want to test the return data as well:

    it('GETS dictionary-api', (done) => {
        let defs = this.defs
        request(app).get('/dictionary-api').expect(200).end((err, res) => {
            let terms = JSON.parse(res.text)
            expect(terms).to.deep.equal(defs)
            done()
        })
    })

Supertest also allows a function inside of `end` that returns errors and the response from the server. We can test this response data for a more thorough test.

We use `let defs = this.defs` because `this` will fall out of scope once we go into the function `request`. By declaring `defs` locally, we make it available inside of the `request` function.

## Cheerio - Testing HTML Return Data

Cheerio checks the returned HTML DOM on web requests. It will allow us to search the DOM the same we can search a DOM with jQuery. 

    let cheerio = require('cheerio')
    let request = require('supertest')
    
    it('Loads the home page', (done) => {
        request(app).get('/').expect(200).end((err, res) => {
            let $ = cheerio.load(res.text)
            let pageHeading = $('body>h1:first-child').text()
            expect(pageHeading).to.equal('Ben`s Page')
            done()
        })
    })

The above request will return `html` data from the server. We load this html data into Cheerio. Now we can search this response just like we would search a jQuery DOM. 