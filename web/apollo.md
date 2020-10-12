# Apollo

## React-Apollo - CLIENT

-   ApolloClient
-   ApolloProvider
-   gql
-   graphql
-   createNetworkInterface

## GraphQL-Tools - SERVER

-   makeExecutableSchema
-   addMockFunctionsToSchema
-

## Naming Convention

Name of your component followed by "Query" or "Mutation".

## Schemas

A schema is like a blueprint that describes all of your data's types and their relationships.

## Schema First Development

Agree on the schema inside your team before you touch any of the API

A scalar type is a primitive type like ID, String, Boolean, or Int. You can think of scalars as the leaves of your graph that all fields resolve to. GraphQL has many scalars built in, and you can also define custom scalars like Date.

## Query Type

The Query type is the entry point into our schema that describes what data we can fetch.

## Mutation Type

The Mutation type is the entry point into our graph for modifying data. Just like the Query type, the Mutation type is a special object type.

## Data Sources

An Apollo data source is a class that encapsulates all of the data fetching logic, as well as caching and deduplication, for a particular service.
