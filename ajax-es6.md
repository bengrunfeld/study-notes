# AJAX ES6

XMLHttpRequest (XHR for short) is a way of updating the page with information from the server without reloading the page.

## HXR Methods

`open` - specifies HTTP verb and specifies target URL

`send` - actually sends the request

## ReadyState Property

Once a request has been sent, the `ReadyState` property indicates the current state of the request.

| Value | Indicates | 
|:-----:|:---------:|
|0      | Request is not yet initialized |
|1      | Request set up |
|2      | Request sent |
|3      | Request in progress |
|4      | Request complete |

## ReadyStateChange Event

HXR code commonly listens for the `readystatechange` event to fire and then uses a conditional to check if the `readyState` is 4, indicating that the request is complete.

## Older Browsers

Old versions of IE don't support XHR, but use `ActiveXObject` instead. Ensure that you code has fallback methods in case someone is using an ancient IE browser.

## Basic Usage

    // Create and send an XHR request
    function makeRequest() {
        let httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = responseMethod;
        httpRequest.open('GET', url + '&appid' + apiKey);
        httpRequest.send();
    }
    
    // handle XHR response
    function responseMethod() {
        if (httpRequest.readyState === 4) {
            console.log(httpRequest.responseText);
        }
    }

## Working with HTTP Response Status Codes

Every HTTP response has a three-digit status code. 404 is a better known one that indicates that the requested resource was not found. 200 means successful response.

XHR object exposes the response code to the status property, so we can set up a simple if else construction for completed requests.

`XMLHttpRequest.status`

So in the **above code**, it would be `if (httpRequest.status === 200)`.

## The Fetch API

The Fetch API is a proposed standard that aims to solve some of the issues of working with XHR on the web.

One of the biggest issues of working with XHR is **Callback Hell**, which is where you nest a series of callbacks, aiming to get certain things to happen in sequence. This becomes very complex and problematic quickly.

In heavily nested functions, the result of the deepest nested function must be determined before the next function in the chain is executed and so on to the top of the stack.

    Fetch(url).then((response) => { console.log(response)})

This works on Promises. Promises provide a way to easily specify code that should run in sequence. Rather than creating nested callbacks, promises allow you to chain the results of running code using the keyword then. Promises also pass along standardized objects and even include their own streamlined way to handle errors. The Fetch API uses the Fetch method, but adapts the syntax of promises, including the all-important then keyword and its behavior.

### Browser Support of Fetch

Quite a few browsers still do not support Fetch (caniuse.com/#search=fetch), so we need to use a Polyfill until it is completely supported.

You will also need to use a polyfill for Promises, since they aren't universally supported either.

    <script src="promise.min.js"></script>
    <script src="fetch.js"></script>
    <script src="your-code.js"></script>

### Basic Usage

    fetch(url).then((response) => {
        if (!response.ok) {
            throw Error(response.statusText)
            return;
        }
        
        console.log(response);
        console.log(response.json);
    })

### Passing data along with `then`

Whatever is returned by the first `then` statement is accepted as an argument to the second `then` statement, and so on.

    fetch(url).then((response) => {
        if (!response.ok) {
            throw Error(response.statusText)
            return;
        }
        return response.json;
    }).then((responseJSON){
        console.log(responseJSON);
    }).catch((error) => {
        handleErrorGracefullyInUI(error);
    })

## Tips

* Reduce number of AJAX requests
* GET is faster than POST, so use GET where possible
* To reduce data size: Plain text < JSON < YAML < XML

## Dealing with Errors

In Fetch API, `response.status` tells you if the request was successful or not, but also gives you a HTTP response code (e.g. 2xx, 3xx, 4xx) so you may want to handle a situation where you get a `204` code which means `no content`.

Retry after a certain period of time for these codes:

`504` - gateway timeout 
`598` - network read timeout error
`599` - network connect timeout error

