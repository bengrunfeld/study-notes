# Immutable.js

## Installation

### via npm 

    npm install --save

**to use**

    require('immutable')
    import 'immutable' from immutable

### in the console

    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/immutable/3.8.2/immutable.min.js';
    document.head.appendChild(script);

Now you can play around with Immutable during the talk.

### Why Immutable.js?

* The library is optimized for Javascript to be much faster than native Javascript immutability techniques (e.g. defensive copying with `Object.assign` and recursive `Object.freeze`)

### Difference between Immutable.js and Javascript

Immutable.js is designed to closely mirror ES2015 Map, Array, and Set.

The difference is that instead of mutating the existing collection, all methods return a **new** immutable collection. 


