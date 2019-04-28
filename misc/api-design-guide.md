# API Design Guide

The core principle of REST is to define named resources that can be manipulated using a small number of methods.

The resources and methods are known as nouns and verbs of APIs. With the HTTP protocol, the **resource names** naturally map to **URLs**, and **methods** naturally map to **HTTP methods**: `POST`, `GET`, `PUT`, `PATCH`, and `DELETE`.

## What is a REST API?

A REST API is modeled as collections of individually-addressable resources (the nouns of the API). Resources are referenced with their resource names and manipulated via a small set of methods (also known as verbs or operations).

Standard methods for REST Google APIs (also known as REST methods) are `List`, `Get`, `Create`, `Update`, and `Delete`.

Custom methods, such as database transactions, are also available.

## Design Flow

Take the following steps when designing an API:

* Determine what types of resources an API provides.
* Determine the relationships between resources.
* Decide the resource name schemes based on types and relationships.
* Decide the resource schemas.
* Attach minimum set of methods to resources.

## Resources

In a resource-oriented API, each node is either a simple resource or a collection resource, hence they are often called a `resource` or a `collection`.

* `Collection`: A `collection` contains a list of `resources` of the same type. For example, a user has a `collection` of contacts.

* `Resource`: A `resource` has some state and zero or more sub-resources. Each sub-resource can be either a simple `resource` or a `collection` resource.

### Resource-Oriented API

The key characteristic of a resource-oriented API is that it emphasizes resources (data model) over the methods performed on the resources (functionality)

## Example

Here is an example of Gmail's API:

* API service: gmail.googleapis.com
    - A collection of users: `users/*`. Each user has the following resources.
    - A collection of messages: `users/*/messages/*`.
    - A resource representing the user profile: `users/*/profile`.
    - A resource representing user settings: `users/*/settings`.

---

## Naming

### Resource Names:

In resource-oriented APIs, `resources` are named entities, and resource names are their identifiers. Each resource (or `collection`) must have its own unique resource name. The resource name is made up of the ID of the resource itself, the IDs of any parent resources, and its API service name.

The resource name is organized hierarchically using collection IDs and resource IDs, separated by forward slashes. Example:

    api-service-name/collection-id/resource-id/collection-id/resource-id
    api-service-name/collection-id/resource-id/resource-id

### Full Resource Name vs Relative Resource Name

Full resource name includes the API Service Name, whereas Relative only identifies the resource within the API service but does not have the service name. E.g.
    
    http://service-name/collection-id/resource-id   # full
    collection-id/resource-id                       # relative

### Collection ID's

Use plural form with lowerCamel case. If the term doesn't have suitable plural form, such as "evidence" and "weather", the singular form should be used.

### Resource Name vs URL

    // This is a calendar event resource name.
    "//calendar.googleapis.com/users/john smith/events/123"

    // This is the corresponding HTTP URL.
    "https://calendar.googleapis.com/v3/users/john%20smith/events/123"

---

## Standard Methods

Standard | Method HTTP Mapping | HTTP Request Body | HTTP Response Body
-----------------------------------------------------------------------
List    | GET <collection URL>        | N/A      | Resource* list
Get     | GET <resource URL>          | N/A      | Resource*
Create  | POST <collection URL>       | Resource | Resource*
Update  | PUT or PATCH <resource URL> | Resource | Resource*
Delete  | DELETE <resource URL>       | N/A      | google.protobuf.Empty**

A standard method may also return a long running operation for requests that do not complete within the time-span of the single API call.

The response returned from a `Delete` method that doesn't immediately remove the resource (such as updating a flag or creating a long-running delete operation) should contain either the long-running operation or the modified resource.

### Todo

Fill out with info about each Standard Method. Link: 

https://cloud.google.com/apis/design/standard_methods#list

## Standard Fields

When creating named fields like `create_time` and `title`, and `time_zone`, please refer to the Design Guide's naming conventions:

https://cloud.google.com/apis/design/standard_fields

## Errors

We use an Error Model to ensure a consistent response in the case of an error, which contains information which would help the developer and the app respond and take next steps:

    message Status {
      // A simple error code that can be easily handled by the client. The
      // actual error code is defined by `google.rpc.Code`.
      int32 code = 1;
    
      // A developer-facing human-readable error message in English. It should
      // both explain the error and offer an actionable resolution to it.
      string message = 2;
    
      // Additional error information that the client code can use to handle
      // the error, such as retry delay or a help link.
      repeated google.protobuf.Any details = 3;
    }

### Error Codes

Set up canonical error codes and define them as properties of the `Error` object. E.g. `Error.resourceNotFound`. Individual APIs should avoid defining additional error codes, since developers are very unlikely to write logic to handle a large number of error codes. 

### Error Messages

The error message should help users understand and resolve the API error easily and quickly. In general, consider the following guidelines when writing error messages:

* Do not assume the user is an expert user of your API. Users could be client developers, operations people, IT staff, or end-users of apps.
* Do not assume the user knows anything about your service implementation or is familiar with the context of the errors (such as log analysis).
* When possible, error messages should be constructed such that a technical user (but not necessarily a developer of your API) can respond to the error and correct it.
* Keep the error message brief. If needed, provide a link where a confused reader can ask questions, give feedback, or get more information that doesn't cleanly fit in an error message. Otherwise, use the details field to expand.

### Error Details

Google APIs define a set of standard error payloads for error details, which you can find in `google/rpc/error_details.proto`. These cover the most common needs for API errors, such as quota failure and invalid parameters. Like error codes, error details should use these standard payloads whenever possible.

Additional error detail types should only be introduced if they can assist application code to handle the errors. If the error information can only be handled by humans, rely on the error message content and let developers handle it manually rather than introducing new error detail types.

Here are some example error_details payloads:

* RetryInfo Describes when clients can retry a failed request, may be returned on Code.UNAVAILABLE or Code.ABORTED
* QuotaFailure Describes how a quota check failed, may be returned on Code.RESOURCE_EXHAUSTED

### Response Codes & Error Response Codes

Please see the Design Guide's table:

https://cloud.google.com/apis/design/errors#handling_errors

### Security re Error Message

As a server and API developer, you must be aware of the security and privacy of the user data, and avoid disclosing sensitive information in the error message and error details, since errors are often logged and may be accessible by others.

NOTE: Since the client cannot fix the server error, it is not useful to generate additional error details. To avoid leaking sensitive information under error conditions, it is recommended not to generate any error message and only generate google.rpc.DebugInfo error details. The DebugInfo is specially designed only for server-side logging, and must not be sent to client.

