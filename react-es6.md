# React with ES6

## JSX Elements

In a JSX element, you can give a value to a property by using a string or an object. E.g.

    <h1 id="main-title" style={{background: 'blue', color: 'white'}}>Text</h1>

## Using Babel

You can use the in-browser transpiler, or you can use it from the CLI or from a module loader like Webpack.

### Babel CLI

*.babelrc*

    { presets: ['latest', 'react', 'stage-0'] }

*CLI Command*

    babel ./src/index/js --out-file ./dist/bundle.js

## Using Webpack

Webpack config describes everything we want to do to our files so that 
they're ready for production. 

## Stateless Functional Components

We can create Components using functions. Stateless functional components are functions that take in property information and return JSX elements. Stateless components cannot access `this` so properties are passed directly into the function. Also, local methods need to be removed, and put into their own functions.

It's typically a good idea to use stateless components, whenever possible. Stateless components offer a functional way to work with components, and, also, the React team has hinted that there may be some performance benefits of using these functions, rather than using createClass, or ES6 classes.

When and why to use Stateless Functional Components:

https://hackernoon.com/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc#.sywh6s2za

In my opinion, if you want to use React LifeCycle methods (e.g. componentWillMount) or other specific React functionality, then you should use React classes, otherwise use Stateless Functional Components.

## Default Props

An optional but very useful feature that use in React is default properties. When we setup defaults, we can use the default values if another value is not provided.

### Default Props with React.CreateClass

    export const SomeModule = React.CreateClass({
        getDefaultProps() {
            return {
                name: 'Ben',
                age: 36
            }
        }
    })

### Default Props with ES6 Classes

    export class SomeModule extends React.Component{
        render() {
            return (
                <div>{name}, {age}</div>
            )
        }
    }
    SomeModule.defaultProps = {name: 'Ben', age: 36}

### Default Props with Stateless Functional Components

    export const SomeModule = ({name="Ben", age=36}) => {
        return (
            <div>{name}, {age}</div>
        )
    }

## Proptypes

PropTypes allow us to supply a property type for all of our different properties, so that it will validate to make sure that we're supplying the right type.

This is kind of like strong typing in Java (e.g. int, char, string, obj, etc).

    export const SomeModule = React.CreateClass({
        propTypes: {
            name: React.PropTypes.string
        }
    })

### Proptype IsRequired

    export const SomeModule = React.CreateClass({
        propTypes: {
            name: React.PropTypes.string.isRequired
        }
    })


### Proptype warnings, not errors

If you use an incorrect type, or the value is required but you don't have it, React will issue a warning, but won't crash your app.

### Checking for Dates or Custom Types
  
    todaysDate: React.PropTypes.instanceOf(Date),

## State with ES6 Classes

When workin with ES6 Classes, we no longer use `getInitialState`, but rather the following:

    export class App extends Component {
        constructor(props) {
            super(props)
            this.state = {
                name: ben,
                age: 36        
            }
        }
    }

## React Router

Install with: `npm install react-router --save`

### Usage

    import { Router, Route, hashHistory } from 'react-router'

    import { DaysList } from './days_list'
    import { SomeModule } from './module1'

    render(
      <Router history={hashHistory}>
        <Route path='/' component={DaysList} />
        <Route path='*' component={SomeModule} />
      </Router>,
      document.getElementById('main')
    )

`path='/'` is for home directory, while `path='*'` is a wildcard.

### Get Current URL Pathname

If you are in a component that gets called by the above code - you can check what the current URL path name is in the Browser address bar:

    this.props.location.pathname

You can test with an if statement:

    if (this.props.location.pathname === '/') {
        <RenderComponent1 />
    } else {
        <RenderComponent2 />
    }

### The Link Component from React Router

Usage:

    import { Link } from 'react-router'
    
    export const Menu = () => 
        <nav className="menu col-xs-5">
            <Link to="/" activeClassName="selected">Home</Link>
            <Link to="other" activeClassName="selected">Other</Link>
        </nav>

## Forms

### htmlFor

In React, `for` is a reserved work, so we can use `htmlFor` inside of a label.

    <label htmlFor="date">Date</label>

### defaultValue

We can specify a default value for react for fields with `defaultValue`

    <input id="date" type="date" defaultValue={this.props.date} />
    SomeModule.defaultProps = {date: '6/7/2016'}

### refs

We use refs to grab the data directly from the form. This indicates that we are using an uncontrolled component. It's usually best to use controlled components.

    export class myForm extends Component {
        logMe = () => console.log('Date:', this.refs.date.value)
        render() {
            return (<input id="date" type="date" ref="date" />)
        }    
    } 
    

### refs in a stateless functional component

In a stateless functional component, we don't have access to `this`, so we need to use callbacks to be able to grab the form values.

    export const DaysRow = ({today}) => {
        let _firstName
    
        const showInput = () => {
          console.log('hello', _firstName.value)
        }
      
        return (
           <input type="text" name="firstName" ref={input => _firstName = input}/> 
        )
    }

## Controlled vs Uncontrolled Components

In a controlled component, form data is handled by a React component. The alternative is uncontrolled components, where form data is handled by the DOM itself.

## Making `this` accessible

If you are using ES6 classes and you want to use a function by calling `this.sayHi()`, then you'll need to make `this` accessible in the constructor.

    constructor(props) {
        super(props)
        this.sayHi = this.sayHi.bind(this)
    }

## Calling a parent function in a stateless functional component

In the parent

    logData = (data) => console.log('From child', data)
    <SomeModule logDataFromParent={logData}

In the child

    export const DaysRow = ({logDataFromParent}) => {
        const sendToParent = (data) => {
          logDataFromParent(data)
        }
        sendToParent('Hello from child')
    }
