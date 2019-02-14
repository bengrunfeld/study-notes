# React Interview Questions

## General React Theory Questions

### What is React, who developed it, and how is it different from other frameworks?

React is a JavaScript library that was developed by Facebook for building User Interfaces (UI's). This corresponds to the View in the Model-View-Controller (MVC) pattern. 

React uses a declarative paradigm that makes it easier to reason about your application, and React computes the minimal set of changes necessary to keep your DOM up-to-date.[1](https://code.facebook.com/projects/176988925806765/react/) [2](https://en.wikipedia.org/wiki/React_(JavaScript_library))

### How do you tell React to build in Production mode and what will that do?

Typically you’d use Webpack’s `DefinePlugin` method to set `NODE_ENV` to `production`. This will strip out things like propType validation and extra warnings. 

### Explain what JSX is and how it works

React components are typically written in JSX, a JavaScript extension syntax allowing quoting of HTML and using HTML tag syntax to render subcomponents. HTML syntax is processed into JavaScript calls of the React framework. Developers may also write in pure JavaScript.

### Explain how the One-Way Data Flow works

In React, data flows from the parent to the child, but not the other way around. This is designed to alleviate cascading updates that traditional MVC suffers from. 

Properties, a set of immutable values, are passed to a component's renderer as properties in its HTML tag. A component cannot directly modify any properties passed to it, but can be passed callback functions that do modify values. This mechanism's promise is expressed as "properties flow down; actions flow up".

### What are the differences between React in ES5 and ES6? What are the advantages/disadvantages of using ES6?

1. Syntax

Creating React Components the ES5 way involves using the `React.createClass()` method. In ES6, we use `class SomeModule extends React.Component{}`

2. Autobinding

React in ES5 has autobinding, while React in ES6 does not. For that reason, we have to use `bind` to make `this` available to methods in the constructor.

    // React in ES5
    var thing = {
        name: 'mike',
        speak: function(){ console.log(this.name) }
    }
    window.addEventListener('keyup', thing.speak)

In the above code, if we call `thing.speak()`, it will log `mike`, but pressing a key will log `underfined`, context of the callback is the global object. The browser’s global object – `window` – becomes `this` inside the `speak()` function, so `this.name` becomes `window.name`, which is undefined. 

React in ES5 automatically does autobinding, effectively doing the following:

    window.addEventListener('keyup', thing.speak.bind(thing))

Autobinding automatically binds our functions to the React Component instance so that passing the function by reference in the `render()` works seamlessly.[3](https://www.toptal.com/react/interview-questions)

But in ES6, we need to make the context of `this` available to the `sayHi` method by using `bind`.

    export class App extends Component {
        constructor(props) {
            super(props)
            this.state = {
                name: ben,
                age: 37        
            }
            this.sayHi = this.sayHi.bind(this)
        }
        
        sayHi() {
            console.log(this.state.name)
        }
    }    

### Explain the Virtual DOM and how React renders it to the actual DOM.

React creates an in-memory data structure cache, computes the resulting differences, and then updates the browser's displayed DOM efficiently.

### How does transpiling with Babel work?

Babel transpiles React code to plain vanilla Javascript that is cross browser compliant. 

### What is the difference between React's Router and Backbone's Router?

When a route is triggered in Backbone's router, a list of actions are executed.
When a route is triggered in React's router, a component is called, and decides for itself what actions to execute.

**Differences:**

If you used Backbone's Router with React, it would have to manually mount and unmount React components from the DOM regularly. This would cause havok.

Backbone's router demands that you create a flat list of routes (`/users/:id`, `/users/:post`, `users/list`). 

React uses Higher Order Components (HOC's) that have children define sub routers. E.g.

    <Router history={browserHistory}>
        <Route path="/" component={MainApp}>
            <Route path="contact" component={Contact}/>
            <Route path="posts" component={Posts}>
                <Route path="/user/:userId" component={UserPage}/>
            </Route>
            <Route path="*" component={NoMatch404}/>
        </Route>
    </Router>

## LifeCycle Questions

### Explain the stages of a React Component's lifecycle

**Mounting**

These methods are called when an instance of a component is being created and inserted into the DOM.

* `constructor()`
* `componentWillMount()`
* `render()`
* `componentDidMount()`

**Updating**

An update can be caused by changes to props or state. These methods are called when a component is being re-rendered.

* `componentWillReceiveProps()`
* `shouldComponentUpdate()`
* `componentWillUpdate()`
* `render()`
* `componentDidUpdate()`

**Unmounting**

This method is called when a component is being removed from the DOM.

* `componentWillUnmount()`

### Explain the lifecycle methods, when they occur, and how you would use each of them

**Mounting**

`constructor` - The constructor for a React component is called before it is mounted. If you don't call `super(props)` in the constructor, `this.props` will be undefined. You should initialize your `state` here too.

`componentWillMount` - invoked immediately before mounting occurs. It is called before `render`, therefore setting state in this method will not trigger a re-rendering. Avoid introducing any side-effects or subscriptions in this method.

`render` - creates a tree of React elements. When called, it examines `this.props` and `this.state` and returns a single React element. This element can be either a representation of a native DOM component, such as `<div />`, or another composite component that you've defined yourself. Returning `null` or `false` indicates that you don't want anything rendered.

`componentDidMount` - invoked immediately after a component is mounted. Ideal place for network requests (e.g. AJAX). Setting state in this method will trigger a re-rendering.

`componentWillReceiveProps` - is invoked before a mounted component receives new props. This is a good place to update the `state` in reponse to changes in `props`. Calling `setState` generally doesn't trigger `componentWillReceiveProps`.

**Updating**

`shouldComponentUpdate` - allows you to decide if you wish to re-render the component when new `props` or `state` are received. Invoked before rendering when new `props` or `state` are being received. Defaults to `true`. Not called on initial render or on `forceUpdate`. If `shouldComponentUpdate` returns `false`, then `componentWillUpdate`, `render`, and `componentDidUpdate` will not be invoked. Returning false does not prevent child components from re-rendering when their `state` changes.

`componentWillUpdate` - invoked immediately before rendering when new props or state are being received. Cannot call `setState` here and is not called on initial render. If you need to update state in response to a prop change, use `componentWillReceiveProps`.

`componentDidUpdate` - invoked immediately after update occurs. Operate on the DOM in this method and make network requests here, if needed, but compare to previous `props` & `state`. Not called for the initial render. 

**Unmounting** 

`componentWillUnmount` - invoked immediately before a component is unmounted. Perform cleanup here, e.g. invalidating timers, canceling network requests, or cleaning up any DOM elements that were created in componentDidMount.

### Explain how `setState` works

`setState(updater, callback)`

`setState` takes 2 arguments, an `updater` and a callback that gets executed once setState has completed. 

The `updater` can either be a function or an object. Both are executed asynchronously. If it is a function, it takes the form:

    setState((prevState, props) => {
        return newState
    })

If you supply an object to `setState` instead of the above function, then that will become the new `state`.

### What happens when you call `setState`? AKA explain how Reconciliation works.

When `setState` is called, the object returned from the updater becomes the current state of the component. This will begin the process of `reconciliation`, which aims to update the UI in the most efficient way possible, according to the `reconciliation` algorithm.

React diffs the previous root element to the new root element. If they are are of different types (`<article>` vs `<section>`), React will tear down the old tree and create a completely new one. If they are the same type, only the changed attributes will be updated.

When tearing down a tree, old DOM nodes are destroyed and `componentWillUnmount` is called on them. When building up a new tree, new DOM nodes are inserted into the DOM.

The core idea of reconcialiation is to be as efficient as possible on the UI by only making updates where absolutely necessary.

### What is the difference between `forceUpdate` and `setState`? Do they both update the state?

`setState` causes your app to update when `props` or `state` have changed. But if your app relies on other data, you can force an update (`render`) with `forceUpdate`. 

Calling `forceUpdate` will cause `render` to be called on the component, skipping `shouldComponentUpdate`. This will trigger the normal lifecycle methods for child components, including the `shouldComponentUpdate` method of each child. React will still only update the DOM if the markup changes.
 
Use of `forceUpdate` should be avoided as much as possible. Use `state` and `props` instead.

### What is the second argument that can optionally be passed to setState and what is its purpose?

The second argument is a callback that gets executed once setState has completed. 

### In which lifecycle event do you make AJAX/Network requests and why?

Use `componentDidUpdate` or `componentDidMount`. If you use `componentWillMount`, the AJAX request could theoritically resolve before the component has mounted. Then you would be trying to call `setState` on a component that hasn't mounted, which would introduce bugs. Secondly, `componentWillMount` might get called multiple times per render by React's `reconciliation` algorithm for performance reasons. That would cause multiple AJAX requests to get sent. 

## Feature Specific Questions

### What’s the difference between an Element and a Component in React?

An element is a representation of something in the UI, which will usually become HTML, e.g. `<a>`, `<div>`, etc. 

A component is a function or class that accepts input and returns an element or other components.

### What is the difference between Class Components and Stateless Functional Components (aka Pure Functional Components, etc)? When would you use one over the other?

If your component needs to work with `this.state`, or `this.setState`, or lifecycle methods, use a Class Component, otherwise use a Stateless Functional Component. 

### What is the difference between createElement and cloneElement?

`createElement` creates a new React element. `cloneElement` clones an existing React element.

### What are refs in React and why are they important?

Refs are an escape hatch from React's declarative model that allow you to directly access the DOM. These are mostly used to grab form data in uncontrolled components. (In uncontrolled components, data is handled by the DOM itself, instead of via the React components, which is controlled). 

Avoid using refs for anything that can be done declaratively.

You may not use the ref attribute on functional components because they don't have instances.

### Give a situation where you would want to use refs over controlled components

* Managing focus, text selection, or media playback.
* Triggering imperative animations.
* Integrating with third-party DOM libraries.

### What are keys in React and why are they important?

Keys help React become more efficient at performing updates on lists. 

### What is the difference between a controlled component and an uncontrolled component?

In uncontrolled components, data is handled by the DOM itself. In controlled components, data is only handled by the React component.

In HTML, form elements such as `<input>`, `<textarea>`, and `<select>` typically maintain their own state and update it based on user input. In React controlled components, mutable state is typically kept in the `state` property of components, and only updated with `setState`.

This means that `state` is the single source of truth. So if you wanted to change the `value` of an `<input>` box, you would call `setState` every time the user pressed a key, which would then fill `input` with the new value of `state`. 

In uncontrolled components, we usually use `refs` to grab the data inside of form fields. 

### What are High Order Components (HOC's) and how would you use them in React?

HOC's aren't just a feature of React, they are a pattern that exists in software engineering. 

A higher-order component is a function that takes a component and returns a new component.

Whereas a component transforms props into UI, a higher-order component transforms a component into another component.

An HOC doesn't modify the input component, nor does it use inheritance to copy its behavior. Rather, an HOC composes the original component by wrapping it in a container component. An HOC is a pure function with zero side-effects.

The wrapped component receives all the props of the container, along with a new prop, data, which it uses to render its output.

### What is the difference between using `extend`, `createClass`, mixins and HOC's? What are the advantages and disadvantages of each?

**Mixins**

The point of mixins is to give devs new to functional programming a way to reuse code between components when you aren’t sure how to solve the same problem with composition. While they aren't deprecated, their use is strongly not recommended. Here's why [1](https://facebook.github.io/react/blog/2016/07/13/mixins-considered-harmful.html):

* Mixins introduce implicit dependencies
* Mixins cause name clashes
* Mixins cause snowballing complexity

**HOC's** - above

**Extends**

Mixins are possible, but not built-in to React’s ES6 API. However, the ES6 API makes it easier to create a custom Component that `extends` another custom Component.

ES6 classes allow us to inherit the functionality of another class, however this makes it more difficult to create a single Component that inherits properties from several mixins or classes. Instead, we need to create prototype chains.


### How does PropType validation work in React? 

PropTypes allow us to supply a property type for all of our different properties, so that it will validate to make sure that we're supplying the right type.

This is kind of like strong typing in Java (e.g. int, char, string, obj, etc).

If you use an incorrect type, or the value is required but you don't have it, React will issue a warning, but won't crash your app.

### Why would you use `React.Children.map(props.children, () => )` instead of `props.children.map(() => )`

It’s not guaranteed that `props.children` will be an array. If there is only one child, then it will be an object. If there are many children, then it will be an array.

    <Parent>
        <Child />
    </Parent>

vs

    <Parent>
        <Child />
        <Cousin />
    </Parent>

### Describe how events are handled in React

In order to solve cross browser compatibility issues, your event handlers in React will be passed instances of SyntheticEvent, which is React’s cross-browser wrapper around the browser’s native event. These synthetic events have the same interface as native events you’re used to, except they work identically across all browsers.

### Where does a parent component define its children components? 

Within the render method

### Can a parent component access or read its children components properties?

Yes

### How do you set the value of textarea?

In React, a `<textarea>` uses a value attribute instead. This way, a form using a `<textarea>` can be written very similarly to a form that uses a single-line input.

### What method do you use to define default values for properties?

In ES6 classes

    SomeModule.defaultProps = {name: 'Ben', age: 36}

In Stateless Functional Components, just use ES6 named params.

    export const SomeModule = ({name="Ben", age=36}) => {
        return (
            <div>{name}, {age}</div>
        )
    }

### What does it mean when an input field does not supply a `value` property?

That you're using an uncontrolled component. 

## Sources

A lot of this information was learned and borrowed from the following:

* https://www.lynda.com/React-js-tutorials/React-js-Essential-Training/496905-2.html
* https://www.toptal.com/react/interview-questions
* https://tylermcginnis.com/react-interview-questions/
* https://www.codementor.io/reactjs/tutorial/5-essential-reactjs-interview-questions