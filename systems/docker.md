# Docker

## Container

A container is where your application and resources are located

## Image

An image is a blueprint for a container, like a class is for an object.

## Volumes

A volume holds the data for your containers. So if your containers are static and unchanging, the data that changes is on the volumes.

## Networking

Hooks together all the pieces of the architecture above.

## Commands

    docker build -t <NEW_IMAGE_NAME> .

Build a docker image from the instructions in your `Dockerfile` and give it a name with the `-t` flag.

    docker images

See all the images you've created or used.

    docker rm <IMAGE_ID>

Removes a docker image

    docker run -p 4000:4000 <IMAGE_NAME_TO_BUILD_FROM>

Run the container.

    docker ps

Lists what we have running right now

    docker stop <CONTAINER_ID>
    docker start <CONTAINER_ID>

Stops and starts a particular container

    docker push <IMAGE_NAME>
    docker pull <IMAGE_NAME>

Pushes and pulls docker images from your Docker hub.

## Docker Compose

Docker compose is a tool that allows you to manage multiple containers and set up your entire back end with a single file.

The `docker-compose.yml` file will let Docker know exactly what services we want to compose and what application we want to start.

All the options that you would normally put in a `docker run` command, you can put in the `docker-compose.yml` file, and then compose multiple services that will be started at once with that file.

    app:
        container_name: app
        restart: always
        build: .
        ports:
            - "4000:4000"
        links:
            - mongo
    mongo:
        container_name: mongo
        image: mongo
        export:
            - "27017"
        volumes:
            - ./data:/data/db
        ports:
            - "27017:27017"

The `link` means that mongo must start first before the app can run.

Mongo needs to have a dynamic file system to do the database transactions, so we need to create a `volume`. We need to have a volume to have dynamic data.

`docker-compose build`

Builds an image from the `docker-compose.yml` file.

`docker-compose up`

Runs all the containers that you specified in the `docker-compose.yml` file. It will run a `docker-compose build` command if you haven't already.

If you want to start the mongo container first (or any other container), use the `-d` flag

`docker-compse up -d mongo`

To check that it's up and running, use `docker ps`

To see the logs, use `docker logs <CONTAINER_ID>`

The `-d` flag runs one container at a time, so now you'd have to run `docker-compose up -d app`

This gives you much more granular control about which contanier is run first.

To stop all of your containers, run

    docker-compose stop

What is the difference between depends_on and links??
