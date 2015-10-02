# Chef Fundamentals - Notes

## Terminology

**Resource** – A RESOURCE is an element of an operating system that can be manipulated by code to achieve a certain task. 

## How Chef Works

Each of our items of manipulation are modelled as a resource within Chef. Using Chef’s DSL (Domain Specific Language), you define the state that each of these resources should be in, but not how to get them there. The Chef client will pull the policy from the Chef server, and enforce the policy for all the Resources on that individual Node.

Modelling everything in your infrastructure as a collection of Resources will quickly become untenable. We need many layers of abstraction in order to better conceptualize and organize our infrastructure.

Chef gives us a number of items to help manage this complexity.

* Resources
* Recipes
* Nodes
* Search








