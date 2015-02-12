# React & Flux

## Uni-directional Data Flow

Action -> Dispatcher -> Stores -> View

All data originates with an Action. It is then goes to a Dispatcher which passes it on to Stores. The Stores update themselves according to their own rules, and then the Views that are listening to those stores receive an event saying "I've changed". The Views query the Stores for the data they need. 

## Jest

Jest is an auto-mocking framework built on top of Jasmine

