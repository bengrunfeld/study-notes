# Cross Origin Resource Sharing (CORS)

### The Same-Origin Policy

The same-origin policy controls interactions between two different origins, such as when you use XMLHttpRequest or an <img> element. These interactions are typically placed in three categories:

Cross-origin writes are typically allowed. Examples are links, redirects and form sumissions. Certain rarely used HTTP requests require preflight.
Cross-origin embedding is typically allowed. Examples are listed below.
Cross-origin reads are typically not allowed, but read access is often leaked by embedding. For example you can read the width and height of an embedded image, the actions of an embedded script, or the availability of an embedded resource.

##### How to block cross-origin access

To prevent cross-origin writes, check for an unguessable token in the request, known as a Cross-Site Request Forgery (CSRF) token. You must prevent cross-origin reads of pages that know this token.

To prevent cross-origin reads of a resource, ensure that it is not embeddable. It is often necessary to prevent embedding, because embedding a resource always leaks some information about it.

