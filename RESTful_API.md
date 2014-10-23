# Writing a RESTful API


##### 1. Decide what the root URL will be to access the service

It could be something like 

	http://[hostname]/todos/api/v1.0/

Because of the `todos/api/v1.0/`, you can run it on the same system as other services.

##### 2. Services offered and HTTP methods they accept

Decide what the services will be and how they'll be affected by HTTP methods.

|HTTP METHOD|URI|SERVICE DESCRIPTION|
|-----------|---|-------------------|
|GET|http://hostname/todos/api/v1.0/tasks|Retrieve all todos|
|GET|http://hostname/todos/api/v1.0/tasks/[task_id]|Retrieve a specific todo|
|POST|http://hostname/todos/api/v1.0/tasks/|Createa a new todo|
|PUT|http://hostname/todos/api/v1.0/tasks/|Update a todo|
|DELETE|https://hostname/todos/api/v1.0/tasks/[task_id]|Delete a todo|

##### 3. 

