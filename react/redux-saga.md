# Redux Saga

Sagas are implemented as Generator functions that `yield` objects to the redux-saga middleware. The yielded objects are a kind of instruction to be interpreted by the middleware. When a Promise is yielded to the middleware, the middleware will suspend the Saga until the Promise completes.

Once the Promise is resolved, the middleware will resume the Saga, executing code until the next yield. 

## TakeEvery

`takeEvery` - listens for dispatched actions and runs a function each time it hears one.

## Effects

Effects are simple JavaScript objects which contain instructions to be fulfilled by the middleware. When a middleware retrieves an Effect yielded by a Saga, the Saga is paused until the Effect is fulfilled.

The middleware examines the type of each yielded Effect then decides how to fulfill that Effect. 

* If the Effect type is a `PUT` then it will dispatch an action to the Store. 
* If the Effect is a `CALL` then it will call the given function.
* If the Effect is `take` it'll suspend the Generator until a matching action is dispatched

This separation between **Effect creation** and **Effect execution** makes it possible to test our Generator in a surprisingly easy way.

## Call

Call returns an Effect which instructs the middleware to call a given function with the given arguments. Neither `put` nor `call` performs any dispatch or asynchronous call by themselves, they simply return plain JavaScript objects.

Evaluates the expression inside, so the thing that is calling it gets a Promise 

     yield call(delay, 1000)

## Take 

Take allows you to invert control, so instead of using `takeEvery` to wait for some action to be called, you determine when the action is called by using 

    yield take('ACTION')
    // ... perform logic here

## Fork

`fork` starts a task in the background so the caller can continue its flow without waiting for the forked task to terminate. This creates a concurrent flow.

## Cancel

`cancel` is an Effect that cancels a forked task.

## Finally and Cancelled

A cancelled task can handle any cancellation logic (as well as any other type of completion) in its `finally` block - finally is part of the regular try/catch logic.

Since a finally block execute on any type of completion (normal return, error, or forced cancellation), there is an Effect `cancelled` which you can use if you want handle cancellation in a special way:

    try {..code}
    catch(error) {...code}
    finally{ if (yield cancelled()) {...cleanup code}}

## All

`yield` is great for making async calls look linear (or even synchronous), but sometimes we need to do things in parallel.

    // wrong, effects will be executed in sequence
    const users  = yield call(fetch, '/users'),
          repos = yield call(fetch, '/repos')

Because the 2nd effect will not get executed until the first call resolves. Instead we have to write:

    import { all, call } from 'redux-saga/effects'
    
    // correct, effects will get executed in parallel
    const [users, repos]  = yield all([
      call(fetch, '/users'),
      call(fetch, '/repos')
    ])

When we yield an array of effects, the generator is blocked until all the effects are resolved or as soon as one is rejected (just like how Promise.all behaves).

## Race

`race` is an Effect that offers a way of triggering a race between multiple Effects. The following constrains the response within a 1 second timeout.

    const {posts, timeout} = yield race({
        posts: call(fetchApi, '/posts'),
        timeout: call(delay, 1000)
    })

`race` also automatically cancels the loser Effects, and will throw a cancellation error inside of the losing task.

## Yield*

The `yield*` expression is used to delegate to another generator or iterable object.

`yield*` can compose multiple Sagas in a sequential way. This allows you to sequence your macro-tasks in a simple procedural style.

## Saga Composition

Check docs for a clearer picture.

I'm not exactly sure what the difference is, but you could alternatively use `yield call(yourGenerator)` instead of `yield*`.

Or you can `yield` to an array of nested generators:

    const results = yield all([call(task1), call(task2), ...])

Yielding Sagas is no different than yielding other effects (future actions, timeouts, etc). This means you can combine those Sagas with all the other types using the effect combinators.

## Cancellation Composition

`yield cancel(task)` triggers a cancellation on `subtask`, which in turn triggers a cancellation on `subtask2`.

    function* main() {
      const task = yield fork(subtask)
      yield cancel(task)
    }
    
    function* subtask() { yield call(subtask2) // currently blocked on this call}
    
    function* subtask2() {
      yield call(someApi) // currently blocked on this call
    }

Cancellation propagates downward, while returned values and uncaught errors propagates upward. You can see it as a contract between the caller (which invokes the async operation) and the callee (the invoked operation).

The callee is responsible for performing the operation. If it has completed (either success or error) the outcome propagates up to its caller and eventually to the caller of the caller and so on. That is, callees are responsible for completing the flow.

Those blocked on a `yield join(task))` will also be cancelled if the joined task is cancelled.

It's important to remember that yield cancel(task) doesn't wait for the cancelled task to finish (i.e. to perform its finally block). The cancel effect behaves like fork. It returns as soon as the cancel was initiated. Once cancelled, a task should normally return as soon as it finishes its cleanup logic.

Besides manual cancellation there are cases where cancellation is triggered automatically: 

1. `race` Effect
2. In a parallel effect `(yield all([...]))`. The parallel effect is rejected as soon as one of the sub-effects is rejected

## Mocking

You can mock a fork:

    import { createMockTask } from 'redux-saga/utils'
    const mockTask = createMockTask()

You can also use mock task's functions setRunning, setResult and setError to set mock task's state. For example mockTask.setRunning(false).


## Fork vs Spawn

You can dynamically fork tasks that execute in the background using 2 Effects:

* `fork` is used to create attached forks
* `spawn` is used to create detached forks

Attached forks remains attached to their parent by the following rules:

1. A Saga terminates only after

* It terminates its own body of instructions
* All attached forks are themselves terminated

2. Handing errors

This Effect will fail as soon as any one of the 3 child Effects fails.

    yield all([
      call(fetchResource, 'users'),
      call(fetchResource, 'comments'),
      call(delay, 1000)
    ])

Furthermore, the uncaught error will cause the parallel Effect to cancel all the other pending Effects.

If `call(fetchResource, 'users')` raises an uncaught error, the parallel Effect will cancel the 2 other tasks (if they are still pending) then aborts itself with the same error from the failed call.

Similarly for attached forks, a Saga aborts as soon as

* Its main body of instructions throws an error
* An uncaught error was raised by one of its attached forks

### Errors in Attached Forks

Note we're able to catch the error from `call(fetchAll)` inside main only because we're using a blocking call. And that we can't catch the error directly from `fetchAll`. **This is a rule of thumb, you can't catch errors from forked tasks.**


Cancelling a Saga causes the cancellation of:

* The main task this means cancelling the current Effect where the Saga is blocked
* All attached forks that are still executing

## Spawn

Detached forks live in their own execution context. A parent doesn't wait for detached forks to terminate. Uncaught errors from spawned tasks are not bubbled up to the parent. And cancelling a parent doesn't automatically cancel detached forks (you need to cancel them explicitly).

In short, detached forks behave like root Sagas started directly using the `middleware.run` API.

## Channels

* queue tasks
* communicate between Sagas

Channels generalize `take`/`put` Effects to communicate with external event sources or between Sagas themselves. They can also be used to queue specific actions from the Store.

`yield actionChannel` - (Effect) buffers specific actions from the Store.

`eventChannel` - (factory function) connects `take` Effects to external event sources.


`channel` - (factory function) used in `take`/`put` Effects to communicate between two Sagas.

### Example Code

    function* watchRequests() {
      // 1- Create a channel for request actions
      const requestChan = yield actionChannel('REQUEST')
      while (true) {
        // 2- take from the channel
        const {payload} = yield take(requestChan)
        // 3- Note that we're using a blocking call
        yield call(handleRequest, payload)
      }
    }
    function* handleRequest(payload) { ... }

## ActionChannel

`actionChannel` can buffer incoming messages (without limit - though you can impose some) if the Saga is not yet ready to take them (e.g. blocked on an API call).

`take` can also be used with channels (above we created a channel object from specific Redux actions). The `take` will block the Saga until a message is available on the channel. The take may also resume immediately if there is a message stored in the underlying buffer.

The Saga will remain blocked until `call(handleRequest)` returns. But meanwhile, if other `REQUEST` actions are dispatched while the Saga is still blocked, they will queued internally by `requestChan`

When the Saga resumes from `call(handleRequest)` and executes the next `yield take(requestChan)`, the take will resolve with the queued message.


## EventChannel

Like `actionChannel` (Effect), `eventChannel` (a factory function, not an Effect) creates a Channel for events but from event sources other than the Redux Store.

So if you want to use events in your Sagas, think of using EventChannel and look up the docs.

## Communicating between Sagas

We can use `channel` to communicate between Sagas - let's say that our requirement is to have a maximum of three tasks executing at the same time. When we get a request and there are less than three tasks executing, we process the request immediately, otherwise we queue the task and wait for one of the three slots to become free. 

Read the docs for more info.

