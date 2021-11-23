# **Ventnurenox** Associate Backend Engineer Hiring Test

## Overview:
The aim of this assessment is to evaluate your backend skills using NodeJS and by adopting a microservice architecture. The assessment will primarily be a web app where you'll be exposing API endpoints, interacting with Database via ORM, producing and consuming event via Kafka.


## Suggested Techstack:
- ### NodeJS
- ### ExpressJS (web server)
- ### Objection JS (ORM)
- ### KnexJS (Query Builder)
- ### KafkaJS
*Note: you may use whichever ORM or Qerybuilder you arer comfortable with.*

## Assissting Technology (provided in the starter code)
- ### Docker Compose file for orchestrating multiple services
- ### Postgres
- ### Adminer
- ### Kafka


## **Assessment**:

For this assessment you will be using the following ERD. The following have 2 major tables having a single one to many relationship between them.

<img src="test_erd.png" width=75%>

## **Task 0**: Running the repo
The repo has been created in a microservice fashion using docker and docker compose. In order to run the whole repo use the following command to run all the services/containers:

```docker-compose up -d --build```

To stop all containers use the following command:

```docker-compose down```

To run a specific microservice:

```docker-compose up -d --build <servicename>```

*Note: For every change that you make in the code, in order to rerflect those you need to re-run the container using the first command given in this section.*

If you dont have docker and docker-compose setup in your system consult the following:

**For Debain based linux distros:**

Install docker and docker-compose using the following command in terminal:

```sudo apt install docker docker-compose```

**For windows systems:**

Install docker desktop.

**For other OS:**

Consult the installation guide relevant to your system on the Docker offical website.

## **```NOTE:``` A service named ```social``` has already been setup with kafka for you to work in. Start working in *```./backend/social/```***


## **Task 1**: Checking the Sample web server code
Study the starter code for the web service provided. In which a sample web server has been created for you with a sample router/endpoint in it. You are to run the endpoint successfully via browser or Postman to check if you able to run the web app successfully.


## **Task 2**: Creating the database using ORM/Query builder
Using the ERD provided above create the database using an ORM/Query builder. Throughout this assessment you are required to use only the ORM/Query builder to interact with the database and the tables inside of it. Add this code to the web server started code provided.

## **Task 3**: Adding routes/endpoints
For the tables in the database you are to create separate API group(s). In each API group you will have the following category of endpoint with the described funcitonality:
- POST - add data to the corresponding database table, data has to be passed as a raw request in JSON.
- GET - get all data from the corresponding database table
- GET - get specific record based on the ID of the record, this ID has to be passed as a path parameter when requesting the route/endpoint.
- DELETE - delete specific rercord for the correspinding database table, this ID has to be passed as a path parameter when requestion the route/endpoint.
- PATCH - alter a specific record specified by ID in the corresponding database table, this ID has to be passed as a path parameter when requesting the route/endpoint.

## **Task 4:** Implementing Kafka consumer
```Social service contains a file StreamManager.js file. This file outputs the consumed data.```

For this task a Kafka server has already been setup and utility classes have been provided in order to seamlessly connect and communicate with the topics. You are to use this provided code of a consumer in order to consume messages from the a specific topic (specified in Kafka utility code), parse them and insert the consumed messaged in appropriate database tables.
