# MongoDB

All data in MongoDB is stored as JSON, so everything you interact with is JSON.

## General

Mongo stores data in databases which are separated into collections of documents.

## Documents in Queries

To search MongoDB, use `find`. Find relies on a document model, just like storing data.

    db.users.find( {firstName: 'Ben'} )
    db.users.remove( {firstName: 'Ben'} )
    db.users.update( {firstName: 'Ben'}, {$set {lastName: 'Grunfeld'}} )

Updates can replace the entire collection, or just a subset of the data.

Queries match against the documents

When Mongo can't find something, it doesn't return an error. It simply returns nothing.

Mongo supports nesting, up to 100 levels.

## Mongo Shell Commands

* `db` - shows which DB we're currently on
* `show dbs` - shows all the different DB's available
* `use posts` - switches current DB to `posts` db if it exists, otherwise it goes and creates `posts` db. It will only be created when the first document is inserted.

## Collections

Collections are a sub category of the database/document.

To create a new collection, we simply need to insert a document and the collection will be created as a side effect. 

* `db.pages.insert({postName: 'My first post', author: 'Ben'})`
* `show collections` - shows all collections in the current DB.

## No Schema

Mongo doesn't require a schema, so no setup work is needed in order to start working with data.

## Javascript Expressions

Mongo shell uses a JavaScript interpreter. You can interact with the database using JavaScript Expressions.

    print('hello world')       // works
    var | let | const myName = 'Ben'
    const numbers = [1, 2, 'three', '4']


We can also use loops and pretty much any other Javascript function.

* `db.pages.count()` - Counts the number of records in a collection
* `db.pages.find({name: 'Ben'})` - Runs a seach for name = Ben
* `db.pages.find({name: 'Ben'}).explain()` - Tells us a LOT of info about the search
* `db.pages.find({name: 'Ben'})`.explain("executionStats") - gives even more info
* `db.pages.createIndex({postId: 1})` - creates an index

## Import Data into Mongo

From the command line (not inside the mongo shell)

    mongoimport --help          // shows help

You need to give the database and collection information so that Mongo knows where to put your data.

## Updating

To add a new entry to the document, we need to use a new different operator to add a new tag without removing the other ones. Use `$addToSet`

## Deleting

To delete a record or a set of records:

    db.pages.remove({"name": "some page name"})

To delete an entire Collection (and it's associated indexes):

    db.pages.drop()

To delete **everything** in a collection:

    db.pages.remove({})

## Create Unique Indexes

    db.pages.createIndex({"pageName":1}, {unique:true})

## Mongo Queries in Depth

To get just one field, but without the attached id:

    db.pages.find({pageName:1, _id:0})

To get several fields:

    db.pages.find({pageName:1, author:1, comments:1, _id:0})

To format the JSON response so that it's indented:

    db.pages.find({pageName:1, author:1, comments:1, _id:0}).pretty()

To sort by **descending** price, meaning the lowest price first:

    db.products.find({price:1, comments:1 _id:0}).pretty().sort({price:-1})

To sort by **ascending** price, meaning the lowest price first:

    db.products.find({price:1, comments:1, _id:0})
        .pretty().sort({price:1})

To only return the top result:

    db.products.find({price:1, comments:1, _id:0})
        .pretty().sort({price:1}).limit(1)

To add pagination to your query, add the `skip(n)` function to skip the first `n` results:

    db.products.find({price:1, comments:1, _id:0})
        .pretty().sort({price:1}).limit(1).skip(20)

To find by the contents of an array of one of the fields:

If you have the following data structure:

    {
        pageName: "These pretzels are making me thirsty",
        pageTags: ["pretzels", "thirsty"]
    }

Use to find all instances where one of the tags is `pretzels`:

    db.pages.find({"pageTags": "pretzels"})

To find record whose fields match a range of values:

    db.products.find({productPrice:{$lte: 500, $gte: 300}})

* `$lte` - less than or equal to
* `$gte` - greater than or equal to

## Text Indexes

A collection can have at most 1 text index to help with speeding up searching in text fields using REGEX's. You can apply it to more than one field, though.

    db.pages.createIndex({pageName: "text", pageDescription: "text"})

And then search with:

    db.pages.find({$text: {$search: "pretzels"}}).pretty()

### Sorting Text Results by Relevance

Each document returned by a text search is given a relevance score for use by the Mongo engine. We can run a sort on the results to get the most relevant results.

To get the meta score:

    db.pages.find({$text: {$search: "pretzels"}}, {score:{$meta:"textScore"}})

To sort by the meta text score:

    db.pages.find({$text: {$search: "pretzels"}}, {score:{$meta:"textScore"}}).sort({score:{$meta:"textScore"}})

To get specific results only (`pageName`, no `_id`) off of this query:

    db.pages.find({$text: {$search: "pretzels"}}, {score:{$meta:"textScore"}, pageName:1, _id:0}).sort({score:{$meta:"textScore"}})

To search index by using a REGEX:

    db.pages.find({pageName: {$regex: /regexGoesHere/}})

We can also run the exact same command using a shortcut syntax:

    db.pages.find({pageName: /regexGoesHere/})

## Left Outer Join in Mongo

MongoDB 3.2 introduces $lookup pipeline stage to perform a left outer join to an unsharded collection in the same database. For more information and examples, see $lookup.

Starting in MongoDB 3.4, you can also use $graphLookup pipeline stage to join an unsharded collection to perform recursive search. For more information and examples, see $graphLookup.



