# Redux Workflow

## In Redux

**1.** Define your Actions, typically inside of Action Creators. 

Anything you need to populate or influence those payloads (e.g. data you receive from an AJAX call), can be requested and mutated inside of the Action Creator.

REMINDER: Actions are simply the payloads of information you wish to supply to your Reducers. 

**2.** Define your Reducers. 

Reducers take the existing state and an action, then perform mutations on that state, and return it as a new state. The current global state is not mutated in this process. 

**3.** Combine your reducers into a single root reducer with `combineReducers`

**4.** Create an instance of a store, which takes the single root reducer as an arguement, and optionally an initial state. REMINDER: There is only a single store in a Redux app.

**5.** Kick off the whole process by dispatching an action with `store.dispatch(action)`. This can take an Action Creator as an argument instead of just an Action.

## Integrate Redux with React

**6.** Use the `Provider` component from `react-redux` to make the `store` available to our React *Container* components.

**7.** In our *Container* components, we have access to `state` from the `store` since the `Provider` made it available to us. We use `connect`'s `mapStateToProps` function to supply React's *Presentational* components with data from the Redux store. `mapStateToProps` should be an object that mirrors the props we want to supply to our React *Presentational* components.

**8.** In our *Container* components, we have access to the `store` since  the `Provider` made it available to us. We use `connect`'s `mapDispatchToProps` function to make Redux's `store.dispatch(action)` available to React's *Presentational* components via `props`. So *Presentational* components can now call `store.dispatch(action)` via props.

**9.** Finally, we use `let Container = connect(mapStateToProps, mapDispatchToProps)(PresenationalComponent)` to return a copy of `PresentationalComponent` that has been hydrated with data from `mapStateToProps` and also has access to the Redux `store.dispatch` method. We export `Container` and import it where we need to create this hydrated React component.