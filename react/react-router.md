# React Router

Import router functionality with:

    import { BrowserRouter as Router, Route, Link } from "react-router-dom"

In your app, you must enclose the area you want routes in with `<Router>`.

    <Router>
      <div>
        <h1>Hello World</h1>
    
        <Link to='/'>Home</Link>
        <br />
        <Link to='/message'>Message</Link>
        
        <Route path='/message' component={Message} />
      </div>
    </Router>

Links generate `a` tags. Routes display components.

There are three types of components in React Router: `router` components, `route matching` components, and `navigation` components.

## Routers

Use `BrowserRouter` if you have a server that responds to requests and a `HashRouter` if you are using a static file server.

## Route Matching

There are two route matching components: `Route` and `Switch`.

You can include a `Route` anywhere that you want to render content based on the location.

The `Switch` component is used to group `Routes` together. `Switch` will iterate over all of its children <Route> elements and only render the first one that matches the current location. This helps when multiple route’s paths match the same pathname.

### Route Rendering Props

When using `Route`, use `component={}` to render a component. Using `render` instead of `component` when you want to pass in-scope variables to the component you want to reneder.

## Navigation

React Router provides a <Link> component to create links in your application. Wherever you render a <Link>, an anchor (<a>) will be rendered

The <NavLink> is a special type of <Link> that can style itself as “active” when its to prop matches the current location.

Any time that you want to force navigation, you can render a <Redirect>. When a <Redirect> renders, it will navigate using its to prop.

## Scroll To Top



## Testing

Because React Router uses React Context, you will need to use a `StaticRouter` or `MemoryRouter` to avoid errors in tests.



## API

### BrowserRouter

A <Router> that uses the HTML5 history API.

### MemoryRouter

A <Router> that keeps the history of your “URL” in memory (does not read or write to the address bar). Useful in tests and non-browser environments like React Native.

### HashRouter

A <Router> that uses the hash portion of the URL (i.e. window.location.hash)

### StaticRouter

A <Router> that never changes location. This can be useful in server-side rendering scenarios when the user isn’t actually clicking around, so the location never actually changes.

### Link

You can also pass props you’d like to be on the <a> such as a title, id, className, etc.

### NavLink

A special version of the <Link> that will add styling attributes to the rendered element when it matches the current URL.

    activeClassName: string

The class to give the element when it is active. The default given class is active.

    exact: bool

When true, the active class/style will only be applied if the location is matched exactly.

### Switch

Renders the first child <Route> or <Redirect> that matches the location.

### Redirect

Rendering a <Redirect> will navigate to a new location.

### Route

exact - When true, will only match if the path matches the location.pathname exactly.

strict - When true, a path that has a trailing slash will only match a location.pathname with a trailing slash.

sensitive - When true, will match if the path is case sensitive.



### withRouter

`withRouter` is a higher-order component that gives you access to the browser's `history` object and the closes `Route`s match. 