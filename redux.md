# Redux

Redux is an implementation of the Flux architectural pattern.

A big difference between Redux and Flux is that Redux only has one store. You cannot use multiple stores. 

Because there's only one store, there's no need for a dispatcher. The store will dispatch the actions directly.

Having one store means that all of your state will be located in one place - aka Single Source of Truth.

All the data for one client can be stored in a single object. Everything we need to know about the application is in this object. 

Storing everything in one place makes it much easier to work with the data in our application and track bugs. 

Some people might say that you lose modularity by storing everything in one object. In Redux, modularity is achieved by using functions.

## Functional Programming

The idea of using functions for modularity comes from the functional programming paradigm, which was used to develop Redux. 

### Pure Functions 

Pure functions are functions that don't cause side effects. Everything the function needs to operate are sent as arguments and a new result is returned.

Pure functions do not change any of their arguments or any global variables - they simply use the information to produce a new result.

### Immutability

To mutate is to change so to be immutable is to be unchangeable. We do not want to change the variables and objects in a functional application. Instead, we want to produce new ones. 

### Composition

Composition refers to the ability to put functions together so that one function's output becomes another function's input. This means that the values returned from one function become the arguments of the next functions until the last function returns the value we were looking for.

### Application of Functional Programming in Redux

In Redux, Composition is used in the store. The reducer functions that we create to manage parts of the state tree are composed, and the action and state is sent to and piped through each of these reducers until state is eventually mutated. 

## Application Planning

When wireframing, remember that you are using functional programming with Redux, so instead of listing the Objects needed (nouns e.g. View, Model, Collection, StudentModel, StudentsCollection), you should list the Actions (verbs e.g. add_user, remove_user).

### Planning Constants

List all of your action types as an object in `constants.js`.

    export const constants = {
        ADD_USER: "ADD_USER",
        REMOVE_USER: "REMOVE_USER",
        GRANT_ADMIN_PRIVS: "GRANT_ADMIN_PRIVS",
        REVOKE_ADMIN_PRIVS: "REVOKE_ADMIN_PRIVS"
    }

One of the reasons we use this paradigm is because if we just use the string value in our app, Javascript won't throw an error, but if we make a typo with the variable name, then Javascript **will** thrown an error.

### Planning State

Now that we've identified the actions, we want to identify the variables that those actions impact - our State. List the variables that will exist in your State.

### Initial State

You can create an initial State with a json file (initialState.json). It's designed to be a snapshot of our State at any given time.

    {
        'users': [
            {
                'name': 'Ben Grunfeld',
                'age': 36
            },
            {
                'name': 'John Malkovich',
                'age': 65
            }
        ],
        'workDays': 100,
        fetching: false,
        errors: []
    }


## Actions

Actions at bare minimum have a `type` field, but also usually a `payload`. The action should also contain any information to make the change.

    const action = {
        type: Constants.SET_GOAL,
        payload: 20
    }

## Reducers 

Reducers are pure functions that are designed to manage specific parts of your state object. You need to create a reducer to manage every key in your state object. The reducer function **MUST BE** named with exactly the same name as the key of the state that they reducer is targeting.

Remember, we're not going to change the state, we're going to create a new state value, given the current state.

So a `reducer` is a function that will take `state` and an `action` to produce a new `state`. 

	export const spinner = (state=false, action) => 
		(action.type === C.ADD)?
		action.payload:
		state

We usually save the reducer files to the `store` directory. E.g. `reducers.js`.

You should always have a default for state, just in case it isn't added elsewhere. Also, Redux will throw you a warning if it isn't there.

## Composing Reducers

**Composing** means using the return value of one function as the argument for another function, which itself returns a value.

So if you have a reducer that adds a spinner boolean to indicate if the spinner should be turned on, and another reducer that *indicates* that a url fetch is in process from the server, the fetching reducer could also turn on the spinner but simply calling the spinner reducer. E.g.

	action = {
		type: C.ADD,
		payload: true
	}
	
	export const fetcher = (state=false, action) {
		(action.type === C.ADD)?
			spinner(true, action):
			state
	}

## Combining Reducers

After installing Redux with `npm install --save redux`, we can use the `combinedReducers` method, which combines all of our reducers into a single function.

    import { combineReducers } from 'redux'
    
    export const target = (state=0, action) =>
        (action.type == Constants.SET_TARGET) ?
            parseInt(action.payload):
            state
	
    export const goal = (state=0, action) =>
        (action.type == Constants.SET_GOAL) ?
            parseInt(action.payload):
            state
    
    const appReducers = combineReducers({
        target,
        goal
    })
    
    export default appReducers


## Create Store

With redux, we don't need to use our `appReducers` (above) to mutate the `state` because the store will manage the state for us. 

The `createStore` method is used to create instances of stores. 

At minimum, the `createStore` function takes as a param the reducer function used by the store.

The store holds state, and the store manages your state.

The store also takes `initialState` as a second argument. 

In Redux, the store is only there to manage state data. You can read state or mutate state, but the store should not contain any application logic. 

This means that your store and your reducers should not be involved in any of the following tasks:
	
	* generating unique ID's
	* reading or writing data to a persistence layer
	* mutating global state
	* changing global variables
	* fetching data from a rest endpoint or socket server via an AJAX request. 

Your application should **USE** the store. The store should not **BE** your application. The store simply contains the data. Your logic should go into Action Creators (below).

	const combinedReducers = combineReducers({
	  goal,
	  target
	})
	
	const initialState = {'goal': 10, 'target': 10}
	
	const store = createStore(combinedReducers, initialState)

## Get State

We can always looks at the state of the store by using the `getState()` method. 

	store.getState()

By using the `singleReducer` (combinerReducers), our default state will be set from all the default values we set in our reducers. So store will use the `singleReducer` (combinedReduers) to calculate the initial state.

## The Dispatcher

The store also has a `dispatcher` that dispatches actions that mutate the `state`. The dispatch method expects an action object. An action object is just a regular object that has a `type` field, and optionally a `payload`.

## The Subscribe Method

The store has a subscribe method that allows you to assign callback handlers that are invoked every time state changes. 

The subscribe method can be used to invoke callback handlers every time actions are dispatched.

	store.subscribe( () => console.log(store.getState()) )

The subscribe method will invoke the function once for every action that we dispatch. 

You can subscribe as many callback handlers as you like.

## The Unsubscribe Method

The store also has an `unsubscribe` method that allows you to turn off store subscriptions. 

`store.subscribe()` returns a function that can be used to unsubscribe that particular method.

	const unsubscribeMethod = store.subscribe(() => {console.log(store.getState())})

## Middleware

Middleware allows us to add functionality directly to the store's dispatch pipeline. 

By comparison, `subscribe` allows us to subscribe listeners to the store, and these listeners are invoked *after* the dispatch occurs.

Middleware is far more powerful. Middleware gives us power over **how** actions are dispatched. We can add functionality *before* the action is dispatched, or *after* the action is dispatched. We can delay the dispatching of actions. We can even skip dispatching an action altogether. 

We're going to have to create a function that returns a function that returns a function.

Typically, this would be heavily nested, as follows, but with arrow functions, we can make this code look a lot nicer. We will be using the function with `next` as a parameter to invoke or dispatch the action. The function that the `next` function retuns contains the action that will be dispatched.

	const consoleMessages = function(store) {
		return function(next) {
			return function(action) {
				// old way of doing things ;)
			}
		}
	}

New way using arrow functions.

	const consoleMessages = (store) => (next) => (action) {
				// new way of doing things
	}

Because each of these take in only one argument, we don't even need the parens.

	const consoleMessages = store => next => action {
				// clean way of doing things
	}

This function gives us the action that is currently being dispatched, along with a mechanism to dispatch the action and change the state. We need to record the result.

	const consoleMessages = store => next => action => {
		let result
		result = next(action)
		return result
	}

The code `result = next(action)` is where the action is dispatched and where the state can be expected to change.

To make sure the state change gets registered, we must retun the result.

So now we have a function that doesn't do much besides dispatching the action, and this makes sure we do not break the store's current dispatch pipeline. But inside of this function, we can add functionality before or after we dispatch the action. 

This middleware is reusable across stores across different applications. 

In order to apply this middleware with our store, we'll need to use the `applyMiddleware` 

Here is what it would lool like:

	applyMiddleware(consoleMessages)(createStore)(combinedReducers, initialState)

This will create stores with our consoleMessages middleware. It returns a store that's created with our middleware, and it also applies our combineReducers and any initial state that is passed to this function.


## Action Creators

Action creators are where all the logic of your applications goes. E.g. 

	* generating unique ID's
	* reading or writing data to a persistence layer
	* mutating global state
	* changing global variables
	* fetching data from a rest endpoint or socket server via an AJAX request. 

Action creators are just regular functions that create and return actions. They allow us to encapsulate the logic of our application using functions, not objects.

	export myAction = (arg1 = 5, arg2 = 10, arg3 = false) {
		// application logic here
		// play with your application variable values here
        
		return {
			type: 'ADD',
			payload: {arg1, arg2, arg3}
		}
	}


## Redux Thunk

Action creators are an ideal place to write your application logic, including requests to web servers. But our action creators often need to wait for a response from the web server before dispatching an action. 

Redux Thunk is middleware that we can add to our store. It allows us to build powerful action creators called thunks. Thunks are higher order functions that give you control over when and how often the actions are dispatched.

Thunks don't return the action object directly (like action creators) - they return a function. This function gets the store's `dispatch` method, AND the store's `getState` method as arguments. 

	export const randomGoals = () => (dispatch, getState) => { 
		dispatch({
			type: 'ADD',
			payload: 'something'
		})
	}

So from within this thunk I can dispatch actions. Additionally, I can call `dispatch` as often as I like from within a thunk, but I can also delay the dispatch.

So because thunks get the dispatch function, we have control over when and how often we are going to dispatch actions. Additionally, thunks get the `getState` method, so we could check the existing state before dispatching actions.

E.g. you could say check the app state to see if it is currently fetching something. If it is, do nothing, but if it isn't, then you can start dispatching actions to fetch data from the server.

You dispatch this `thunk` the same way you dispatch any other action creator. 

	store.dispatch(
		randomGoals()
	)


## Fetching from the Server with Isomorphic-Fetch

Isomorphic fetch is an implementation of the whatwg fetch specification that works both in Node JS and in the browser. We use this method to fetch URL's.

	npm install --save isomorphic-fetch es6-promise

then

	import fetch from isomorphic-fetch

The isomorphic `fetch` library returns a promise. That means that we can wait for an asynchronous response. Using a `then` function, we can wire up a handler that will handle the response when it occurs. So when we get a response, that response will be passed back to us in a call back function sent to the `then` function.

	export const queryUserData = value => dispatch => {
		
		dispatch({
			type: C.FETCH_USER_DATA
		})	
	
		fetch('http://getuserdata.com/user' + user_id)
			.then(response => response.json())
			.then(resultAsJson => {
	
				dispatch({
					type: C.DISPLAY_USER,
					payload: resultAsJson
				})
			})
			.catch(error => {
				
				dispatch(
					addError(error.message)
				)
	
				dispatch({
					type: C.CANCEL_FETCHING
				})
			})
	}

The above `then` functions pass themselves return the result and pass it as an argument to the next `then` function.

## React-Redux Library

### The Provider

`react-redux` is a library that you can import through NPM. It makes a component called the `Provider` available, which can be wrapped around any component tree, and it will place the `store` in context. That way, any child react component will be able to interact with the `store`.

	ReactDOM.render(
		<Provider store={store}>
			<div></div>
		</Provider>,
		document.getElementById('main')
	)

### Connect

`connect` is a function from the `react-redux` library. 

Connect creates a component that grabs the `state` out of `store` and can map it to properties in a child component.

We can then take data from `state` and map it to the properties of our React component. We need to return an object with the names of the properties that we want to map to as keys and the data as their values.

**Mapping props to React components**

	import { connect } from 'react-redux'
	
	const mapStateToProps = (state, props) => {
		return {
			goal: state.goal.value
			target: state.target.value
		}
	}
	
	const Container = connect(mapStateToProps)(UIComponent)

This will take our `mapStateToProps` function and actually map the values that we've saved under `goal` and `target` to the properties of the UIComponent, `goal` and `target`. The second argument, `props` are any props that were passed to the component by the Parent.

**Mapping dispatch to React components**

    import { connect } from 'react-redux'
    
    const mapDispatchToProps = (dispatch) => {
        return {
            onClearError(index){
                clearError(index)
            }
        }
    }
    
    const Container = connect(mapStateToProps, mapDispatchToProps)(UIComponent)

Inside your React code, you can then call it with the following:

    const handleError = error => {
        store.dispatch(
            addError(error.message)
        )
    }
    
    <Component onClick={handleError} />

