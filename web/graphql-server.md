# GraphQL Essential Training

To be able to make graph QL queries you need to define a schema which defines the query type and resolver for each api input.

The type definition defines what type of data we expect and the resolver gets the data for us.

## Schemas

If you use an exclamation mark `!` in your schema, it means that this value must not be empty - it must have a value.

    const schema = buildSchema(`
        type Person {
            id: ID
            firstName: String!
        }
    `)

## Resolvers vs Schemas

Resolvers define the name that will appear in the GraphQL documentation that you can use to query the data you want.

The schema defines that shape the data should be when it returns from the database. If the returned data is not of that shape and type, GraphQL will throw an error.

## Mutations

When you create input types, you need to call them input, like so, and not type, and this is how we define inputs for our mutations.

The for a mutation takes in the schema is:

    input FriendInput {
        id: ID
        name: String
        email: String
    }

    type Mutation {
      createFriend(input: FriendInput): Friend
    }

`createFriend` is the name of a resolver, `input` is the name of the input being taken, and we expect that `createFriend` will return a `Friend` object.

Notice that we define an input (in this case `FriendInput`) with the keyword `input`.

Then in Graphiql, you'd use the following:

    mutation {
        createFriend(input {
            name: "Ben"
            email: "ben@me.com"
        }) {
            id
            name
        }
    }

When you're doing a mutation, you need to return at least one item. This code will return the Friend object with its `id` and `name`.

## Resolvers

Resolvers are the functions that respond to Queries and Mutations. They are the function that gives us the result of the query.

Because the standard approach is to leave the schema for only type definition, we create those functions seperate from the schema.

## Scalar Types

Scalar types are the basic types that come with GraphQL. They are:

-   String
-   Int
-   Float
-   ID - a unique ID
-   Boolean

## Enum Types

Enumeration type, or commonly called enums, is a special scalar type that allows you to define a specific set of data the field takes, and restrict the input to what you list in the enum type. E.g.

    enum Gender {
        MALE
        FEMALE
    }

    type Friend {
        id: ID
        name: String
        gender: Gender
    }

## Updating Your Schema

Whenever you update your Schema, always remember to update your resolvers as well. They go hand in hand. 

