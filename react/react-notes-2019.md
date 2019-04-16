# React Notes 2019

JSX is safe - it escapes all values so that XSS attacks are not possible. 

Specify list keys on the JSX component e.g. `<ListItem key={id}>` , not on the `<li>` tag contained within that component.

A good rule of thumb is that elements inside the map() call need keys.

Keys only need to be unique among their siblings

A `controlled component` is a form element that uses React `state` as its single source of truth.

`Lifting state up` means lifting up state to the closest ancestor of two or more components so that when that state is updated, both components will update and re-render. 

## Forms

Use [formik](https://www.npmjs.com/package/formik)


## Props vs State

1. Is it passed in from a parent via props? If so, it probably isn’t state.

2. Does it remain unchanged over time? If so, it probably isn’t state.

3. Can you compute it based on any other state or props in your component? If so, it isn’t state.


## Context

Context allows you to set global values for a component tree. It still gets passed down the tree though - i.e. from parent to child/grandchild etc.

    const contextValue = React.createContext('someValue');

Arguments against context: 

* When you import a setting from a constants file, you know exactly where it comes from. The same it true for props. With context, you have to run a keyword search through files to find the ancestor with the Provider. 

* It feels like inheritance.

* The react docs themselves spend quite a bit of time arguing against using context.

# Error Boundaries

Error boundaries are React components that catch JavaScript errors **anywhere in their child component tree**, log those errors, and display a fallback UI instead of the component tree that crashed.

Only class components can be error boundaries.

A class component becomes an Error Boundary if it defines either:

* `static getDerivedStateFromError()` - renders a fallback UI after an error has been thrown. 
* `componentDidCatch()` - logs error information.

If an error boundary fails trying to render the error message, the error will propagate to the closest error boundary above it.

## Refs

The value of the ref differs depending on the type of the node:

* When the ref attribute is used on an HTML element, the ref created in the constructor with `React.createRef()` receives the underlying DOM element as its current property.

* When the ref attribute is used on a custom class component, the ref object receives the mounted instance of the component as its current property.

We CANNOT use the ref attribute **on** functional components because they don’t have instances, but we CAN use the ref attribute **inside** a functional component as long as you refer to a DOM element or a class component.

When to use refs: 

* Managing focus, text selection, or media playback.
* Triggering imperative animations.
* Integrating with third-party DOM libraries.

## Ref forwarding 

Ref forwarding is a technique for automatically passing a ref through a component to one of its children.

Need to study this more. I don't like it.

## Fragments

Fragments allow you to return multiple elements without an enclosing `<div>` tag or other parent tag. Especially useful for returning `<td>`'s inside of a `<tr>`.

    <React.fragment>
        <A />
        <B />
        <C />
    </React.fragment>

You can also use the following syntax:

    <>
        <A />
        <B />
        <C />
    </>

## HOC's

A higher-order component is a function that takes a component as a parameter and returns a new component.

The returned component receives all the props of the container, along with a new prop, data, which it uses to render its output. The HOC isn’t concerned with how or why the data is used, and the returned component isn’t concerned with where the data came from.

Don’t Mutate the Original Component or its prototype. Use Composition.

HOCs add features to a component. They shouldn’t drastically alter its contract. It’s expected that the component returned from a HOC has a similar interface to the wrapped component.

HOCs should pass through props that are unrelated to its specific concern.

Convention: Wrap the Display Name for Easy Debugging

Don’t Use HOCs Inside the render Method

Static Methods Must Be Copied Over

Refs Aren’t Passed Through - While the convention for higher-order components is to pass through all props to the wrapped component, this does not work for refs. The solution for this problem is to use the `React.forwardRef` API (introduced with React 16.3)

# Portals

Portals are a way to render child components into different locations in the DOM that are NOT part of the DOM heirachy of the parent.

# Strict Mode

* Identifying components with unsafe lifecycles
* Warning about legacy string ref API usage
* Warning about deprecated findDOMNode usage
* Detecting unexpected side effects
* Detecting legacy context API

## Hooks

Classes are shit. Hooks let you use many of React’s features without Classes.

Hooks allow you to reuse stateful logic without changing your component hierarchy.

### useEffect - The Effect Hook

When you call `useEffect`, you’re telling React to run your “effect” function after flushing changes to the DOM.

Effects are declared inside the component so they have access to its props and state.

By default, React runs the effects after every render — including the first render.

### Rules of Hooks

Hooks are JavaScript functions, but they impose two additional rules:

* Only call Hooks at the top level. Don’t call Hooks inside loops, conditions, or nested functions.

* Only call Hooks from React functional components. Don’t call Hooks from regular JavaScript functions. (There is just one other valid place to call Hooks — your own custom Hooks. We’ll learn about them in a moment.)

Linter for React Hooks: https://www.npmjs.com/package/eslint-plugin-react-hooks

### Custom Hooks

A custom Hook is a JavaScript function whose name starts with "use" and that may call other Hooks.

Make sure to only call other Hooks unconditionally at the top level of your custom Hook.

Custom Hooks are a convention that naturally follows from the design of Hooks. It is not a specific feature of React.

Do two components using the same Hook share state? No. Custom Hooks are a mechanism to reuse stateful logic. Every time you use a custom Hook, all state and effects inside of it are fully isolated.























