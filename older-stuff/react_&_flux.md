# React & Flux

## Uni-directional Data Flow

`Action` -> `Dispatcher` -> `Stores` -> `View`

All data originates with an Action. It is then goes to a Dispatcher which passes it on to Stores. The Stores update themselves according to their own rules, and then the Views that are listening to those stores receive an event saying "I've changed". The Views query the Stores for the data they need. 

## Accessing via Browser

* You need to set up a server
* You need to access the project via the server address. e.g. `http://localhost:3000`

## Props

* Data passed from parent to children components is called `props`, short for `properties`.
* Props are immutable and are owned by the parent.

## State

* `this.state` is private to the component and can be changed by calling `this.setState()`.
* When the `state` is updated, the component re-renders itself. 

## Jest

Jest is an auto-mocking framework built on top of Jasmine

## Top Level API

`React.createClass` – Create a component class, given a specification. A component implements a render method which returns one single child.

`React.createElement` – Create and return a new `ReactElement` of the given type. The type argument can be either an html tag name string (eg. 'div', 'span', etc), or a ReactClass (created via `React.createClass`).

`React.createFactory` – Return a function that produces ReactElements of a given type. Like `React.createElement`, the type argument can be either an html tag name string (eg. 'div', 'span', etc), or a `ReactClass`.

`React.render` – Render a ReactElement into the DOM in the supplied container and return a reference to the component.

`React.unmountComponentAtNode` – Remove a mounted React component from the DOM and clean up its event handlers and state. Returns true if a component was unmounted and false if there was no component to unmount.

`React.renderToString` – Render a ReactElement to its initial HTML. This should only be used on the server. You can use this method to generate HTML on the server and send the markup down on the initial request for faster page loads and to allow search engines to crawl your pages for SEO purposes.

`React.renderToStaticMarkup` – Similar to renderToString, except this doesn't create extra DOM attributes such as data-react-id, that React uses internally. Can save some bytes on larger pages.

`React.isValidElement` – Verifies the object is a ReactElement.

`React.PropTypes` – includes types that can be used with a component's propTypes object to validate props being passed to your components.

`React.initializeTouchEvents` – Configure React's event system to handle touch events on mobile devices.

`React.Children` – React.Children provides utilities for dealing with the `this.props.children`.

`React.Children.map` – Invoke `fn` on every immediate child contained within children with this set to context.

`React.Children.forEach` – Like `React.Children.map()` but does not return an object.

`React.Children.count` – Return the total number of components in `children`.

`React.Children.only` – Return the only child in `children`. Throws otherwise.


## Component API

`setState` – Merges nextState with the current state. This is the primary method you use to trigger UI updates from event handlers and server request callbacks.

`replaceState` – Like `setState()` but deletes any pre-existing state keys that are not in nextState.

`forceUpdate` – If your `render()` method reads from something other than `this.props` or `this.state`, you'll need to tell React when it needs to re-run `render()` by calling `forceUpdate()`.

`getDOMNode` – Returns the corresponding native browser DOM element if this component has been mounted into the DOM.

`isMounted` –  returns true if the component is rendered into the DOM, false otherwise. You can use this method to guard asynchronous calls to `setState()` or `forceUpdate()`. 

`setProps` – Though calling `React.render()` again on the same node is the preferred way to update a root-level component, you can also call `setProps()` to change its properties and trigger a re-render.

`replaceProps` - Like `setProps()` but deletes any pre-existing props instead of merging the two objects.



## Component Lifecycle Methods

`getInitialState` – Invoked once before the component is mounted. The return value will be used as the initial value of `this.state`.

`getDefaultProps` – Invoked once and cached when the class is created. Values in the mapping will be set on `this.props` if that prop is not specified by the parent component.

`propTypes` – The propTypes object allows you to validate props being passed to your components.

`mixins`– The mixins array allows you to use mixins to share behavior among multiple components. 

`statics` – The statics object allows you to define static methods that can be called on the component class.

`displayName` – The displayName string is used in debugging messages.

`componentWillMount` – Invoked once, both on the client and server, immediately before the initial rendering occurs. 

`componentDidMount` – Invoked once, only on the client (not on the server), immediately after the initial rendering occurs.

`componentWillReceiveProps` – Invoked when a component is receiving new props. This method is not called for the initial render.

`shouldComponentUpdate` – Invoked before rendering when new props or state are being received. This method is not called for the initial render or when forceUpdate is used.

`componentWillUpdate` – Invoked immediately before rendering when new props or state are being received. This method is not called for the initial render. Use this as an opportunity to perform preparation before an update occurs.

`componentDidUpdate` – Invoked immediately after the component's updates are flushed to the DOM. This method is not called for the initial render. Use this as an opportunity to operate on the DOM when the component has been updated.

`componentWillUnmount` – Invoked immediately before a component is unmounted from the DOM. Perform any necessary cleanup in this method, such as invalidating timers or cleaning up any DOM elements that were created in componentDidMount.

