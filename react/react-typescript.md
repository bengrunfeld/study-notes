# TypeScript with React

In React, the main two things that we use TypeScript with are Components and Props.

Components can be functional or class-based. I'm not going to go into class-based components, because I'm generally against OOP.

## Stateless Functional Components

Setting a return type on a functional component is easy enough:

    const OtherHeading: React.FC = () => <h1>Component Title</h1>

## Props

You can define your props using either an Interface or a Type.

You can read up on the differences between Interfaces and Types here:

https://github.com/typescript-cheatsheets/react-typescript-cheatsheet#types-or-interfaces

As per their guidance:

> Always use interface for public API's definition when authoring a library or 3rd party ambient type definitions.

> Consider using type for your React Component Props and State, because it is more constrained.

```
children: React.ReactNode; // best, accepts everything
functionChildren: (name: string) => React.ReactNode; // recommended function as a child render prop type
style?: React.CSSProperties; // to pass through style props
onChange?: React.FormEventHandler<HTMLInputElement>; // form events! the generic parameter is the type of event.target
props: Props & React.PropsWithoutRef<JSX.IntrinsicElements["button"]>; // to impersonate all the props of a button element without its ref
```

So for example

    type AppProps = {
        name: string,
        count: number
    }

    const Message: React.FC = ({name, count}: AppProps) =>
        <p>{name} has {count} apples.</p>
