# GraphQL

When we build a query, we'll ask for the values of fields on objects.

## Passing Arguments

By querying fields, we've already been able to gather a ton of useful data. With arguments, we can drill down into specific fields to select specific data. In GraphQL, every field and every nested object can have its own set of arguments. E.g.

    {
        repositoryOwner(login: "bengrunfeld") {
            id
            path
            url
        }
    }

You need to use double quotes `"` in a query. Single quotes don't work.

## Schemas

The schema provides all of the different object types that are used in our data. It also specifies the types for all of these values.

Possible types you can use in a schema:

-   Integer
-   Float
-   String
-   Boolean
-   Null
-   Enum
-   List
-   Object

An exclamation point `!` means that the field is required.

GraphQL is self documenting. When we define the schema, the documentation is created.

### Querying the Schema

In addition to the built-in documentation in the graphical interface, you can query the schema directly. This is particularly useful when we're working outside of the graphical interface. E.g.

    {
        __schema {
            queryType {
                name
                description
                fields {
                    name
                    description
                    isDeprecated
                    deprecationReason
                }
            }
        }
    }

`queryType` is going to help us drill down into all the different queries that are part of the schema.

This will show us all the fields in the schema and if they are deprecated or not.

    {
        __type(name: "Repository") {
            kind
            name
            description
        }
    }

This will give us all of the details about the repository type, including name, kind and description .

So, we can look at the values that are part of the schema, inside of the graphical interface or we can query the `__schema` or `__type` fields to check out the architecture and the values.

## Aliases

This code will generate an error, since we're requesting the same field twice, even though we're using different arguments. The solution is to use an alias.

    {
        repository(name: "graphql", owner: "facebook") {
            id
            description
        }
        repository(name: "react", owner: "facebook") {
            id
            description
        }
    }

Aliases allow us to give the field a customized name and to request data from the same fields with different arguments.

Aliases use a name followed by a colon `:`

    {
        graphqlProject: repository(name: "graphql", owner: "facebook") {
            id
            description
        }
        reactProject: repository(name: "react", owner: "facebook") {
            id
            description
        }
    }

## Fragments

If you are querying the same sets of fields in different queries, you may want to use fragments.

Fragments are reusable sets of fields that can be included in queries as needed.

Essentially they're a list of the fields that you want to query, and you can use the reference to them like a variable in your queries.

E.g. here we are requesting the same fields again and again:

    {
        graphqlProject: repository(name: "graphql", owner: "facebook") {
            id
            description
            homepageURL
        }
        reactProject: repository(name: "react", owner: "facebook") {
            id
            description
            homepageURL
        }
    }

We can use fragments instead:

    {
        graphqlProject: repository(name: "graphql", owner: "facebook") {
            ...repoFields
        }
        reactProject: repository(name: "react", owner: "facebook") {
            ...repoFields
        }
    }

    fragment repoFields on Repository {
        id
        description
        homepageURL
    }

## Connections

Facebook coined the term “connection” in the GraphQL context, but it’s really nothing more than a new name for the cursor-based pagination model that has been in use for a long time. [Source](https://blog.apollographql.com/explaining-graphql-connections-c48b7c3d6976)

A connection is a way to get all of the nodes that are connected to another node in a specific way.

An edge is a connection to another piece of data.

> I recommend naming your edge type: `${Origin Type}${Relationship Type}Edge`. Likewise with your connections: `${Origin Type}${Relationship Type}Connection`.

> In graph theory, an edge can have properties of its own which act effectively as metadata. For example if we have a “liked” edge between a user and a post we might want to include the time at which the user liked that post.

> It is worth pointing out, however, that using cursor-based pagination is not always necessary, or that it is perfect. If items can be moved or added in the middle, cursor-based pagination suffers from the same potential flaws as limit/offset pagination.

Connections implement cursor-based pagination (CBP), but this is only slightly more secure re data-integrity than limit-offset based pagination (LOBP), since you can still have inconsistencies if things are added/removed in the middle of the list with CBP. LOBP is less secure, because if things are added before or after the list, you have inconsistencies as well. CBP removes this issue, at least.

### Filter arguments

    {
        repository(name: "graphql", owner: "facebook") {
            id
            issues (last: 5, states: CLOSED) {
                edges {
                    node {
                        id
                        number
                        title
                    }
                }
            }
        }
    }

When looking for the connection `issues`, we describe the pagination we want with `last: 5`, but we can ALSO filter based on `states`, as well as `labels`. This filtering will be set out in the documentation.

## Named Queries - aka Operation Names

Until now, we've used anonymous queries, but these can get lost in the sea of queries that we write. We can choose to name these queries, so that they are distinguishable and reusable. E.g.

    query FacebookOrgData {
      organization(login: "facebook") {
        id
        name
      }
    }

## Using Variables in your Queries

We can use variables inside our queries to make them more dynamic. E.g. to make `login` a variable:

    query FacebookOrgData($login: String!) {
      organization(login: $login) {
        id
        name
      }
    }

Now we can pass in any string as a login value. In GraphiQL, this is done in the bottom left window which is titled `QUERY VARIABLES`.

## Mutations

In GraphQL, data modifications are made with mutations. Think of this like a PUT or a DELETE request in REST, but instead of sending new data to a route, we're going to send data as a payload in the mutation. GraphQL assumes a mutation has side effects, and changes the dataset behind the schema.

The API defines which mutations are allowed, and they, like queries, are in a specific shape.

    mutation updateAccountDetails ($input: AccountDetails!) {
        account (input: $input) {
            name
            postalAddress
        }
    }

