# Chef Fundamentals - Notes



**Resource** – A RESOURCE is an element of an operating system that can be manipulated by code to achieve a certain task. 

## How Chef Works

Each of our items of manipulation are modeled as a **Resource** within Chef. Using Chef’s DSL (Domain Specific Language), you define the state that each of these **Resources** should be in, but not how to get them there. The `chef-client` will pull the policy from the Chef server, and enforce the policy for all the **Resources** on that individual Node.

Modeling everything in your infrastructure as a collection of **Resources** will quickly become untenable. We need many layers of abstraction in order to better conceptualize and organize our infrastructure.

Chef gives us a number of items to help manage this complexity.

* Resources
* Recipes
* Nodes
* Search

Several **Resources** can be defined within a recipe. 

When we execute the Chef client on our **Node**, it will inspect our **Policy**, and it will look at each **Resource** within our **Recipe**. For each **Resource** that the Chef Client encounters, it will test to check that that **Resource** is in the desired state.

If that **Resource** is NOT in the desired state, the `chef-client` will take the action to put that **Resource** into the desired state. 

The next time you run `chef-client`, it will check to make sure that the current **Node** is still in line with **Policy**

The `chef-client` runs in *test and repair* mode. 

## Terminology

### Resources

A **Resource** represents a piece of the system **AND** it's desired state.

e.g. a package to be installed, a service to be running, a file to be generated, a cron job that should be configured, a user to be managed, etc.

* *Resources* are the fundamental building blocks of Chef configuration
* *Resources* are gathered into **Recipes**
* *Recipes* ensure that the system is in it's desired state

### Recipies

**Recipes** are configuration files that describe **Resources** and their desired state.

**Recipes** can:

* Install and configure software components
* Manage files
* Deploy applications
* Execute other **Recipes**

**Recipes** are segments of code that instruct or define the policy of how your system should be configured.


## About Recipes

A **Resource** has the ability to notify other **Resources** than an action has occurred. 

## Nodes

The **Recipes** we write will be applied to **Nodes** within our infrastructure. A **Node** represents a server within your infrastructure. These **Nodes** can be

* physical servers
* virtual servers
* cloud instances
* hardware that you own
* compute instances
* network hardware (switches/routers)

The `chef-client` runs on each **Node** on a regular basis.

## How the Chef Client Works

The `chef-client` application runs on each **Node**. Usually, you'll set up the `chef-client` so that it runs on a regular basis, like every 30 minutes. 

The `chef-client` does the following:

* Gathers the current System Configuration of the **Node**
* Downloads the desired System Configuration policies from the Chef server for that **Node**
* Configures the **Node** such that it adheres to those policies

So, the **Node** will execute `chef-client`. The `chef-client` will ask the Chef server what **Policy** it should follow. The Chef server stores a list of all of the various **Policies** that help define my infrastructure. 

We don't want to apply every **Policy** on the Chef server to every **Node** in our environment, we only need a subset of our **Policies**, and we specify this subset through the **Node's** **Run List**.

This **Run List** (collection of policies) is downloaded by the **Node** and then the `chef-client` on the **Node** will execute through each one of these policies in turn, validating that the **Resources** in the **Recipes** are in the desired state.

If they aren't, `chef-client` takes the appropriate action to ensure that the **Resources** ARE in the desired state.

### Run List

The **Run List** is an ordered collection of **Policies** that the **Node** should follow.

The `chef-client` obtains that **Run List** from the Chef Server and then the `chef-client` ensures that the **Node** complies with the **Policy** in the **Run List**. 

### Chef Search

Allows you to:

* search for Nodes with Roles
* find topology of your infrastructure


## Setting up the Workstation

Go to [https://downloads.chef.io/chef-dk](https://downloads.chef.io/chef-dk)

Choose your Operating System (OS) type and download the appropriate file. 

Once the DK has been downloaded to your computer, upload it to the instance you want to use as your workstation with the following command:

	scp -i  mykey.pem somefile.txt user-name@public-dns:destination

The website will have given you the installation command. It will look something like this. Use it on the workstation you uploaded the DK to:

	sudo dpkg -i chefdk_0.8.1-1_amd64.deb


## Chef Server, Knife and Starter Kit

**Chef server** acts as a central repository for your cookbooks as well as for information about every node it manages.

The `knife` command enables you to communicate with the **Chef server** from your workstation. 

The **Starter Kit** provides the certificates that enables `knife` to securely communicate with the **Chef server**.















