# GraphQL

    let { graphql, buildSchema } = require('graphql')

Two functions are necessary for any GraphQL query to work:

* buildSchema()
* graphql()

## BuildSchema

`buildSchema` creates a `GraphQLSchema` object from the GraphQL schema language. The types mapped out in the schema will map to functions that exist in `root`.

`root` is an object literal that contains a list of functions called `resolvers`. These resolvers provide a function to handle each API endpoint.

## Basic Types

To specify the types for your API, you pass them as an argument to the `buildSchema` function. This argument is written in the GraphQL Schema Language.

The GraphQL schema language supports the scalar types of `String`, `Int`, `Float`, `Boolean`, and `ID`.

All types are nullable, unless you use `!`, which declares that they cannot be nullable. E.g `String!`.

To use a list type, surround the type in square brackets, so `[Int]` is a list of integers.

Each of these types maps straightforwardly to JavaScript, so you can just return plain old JavaScript objects in APIs that return these types. 

E.g. list = array

## Passing Arguments

You can access arguments that were passed from a query in the resolver function. E.g.

`server.js`

    // Construct a schema, using GraphQL schema language
    var schema = buildSchema(`
      type Query {
        rollDice(numDice: Int!, numSides: Int): [Int]
      }
    `);
    // The root provides a resolver function for each API endpoint
    var root = {
      rollDice: (args) => {
        let result = []
        for (let i = 0; i < args.numDice; i++) {
          result.push(1 + Math.floor(Math.random() * (args.numSides || 6)))
        }
        return result
      },
    };

`query`

    { rollDice(numDice: 4) }

When you're passing arguments in code, it's generally better to avoid constructing the whole query string yourself. Instead, you can use `$` syntax to define variables in your query, and pass the variables as a separate map.

    let dice = 3
    let sides = 6
    var query = `query RollDice($dice: Int!, $sides: Int) {
      rollDice(numDice: $dice, numSides: $sides)
    }`;
    xhr.send(JSON.stringify({
      query: query,
      variables: { dice: dice, sides: sides },
    }));

## Returning Object Types

In many cases, you don't want to return a number or a string from an API. You want to return an object that has its own complex behavior.

## Input types

Input types can't have fields that are other objects, only basic scalar types, list types, and other input types.

    input MessageInput {
      content: String
      author: String
    }

    type Message {
      id: ID!
      content: String
      author: String
    }

    type Query {
      getMessage(id: ID!): Message
    }

    type Mutation {
      createMessage(input: MessageInput): Message
      updateMessage(id: ID!, input: MessageInput): Message
    }

