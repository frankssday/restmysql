# restmysql

## Instructions
This exercise demonstrates
- The use of Docker compose to build microservices
- The use of REST API (GET/POST) through a programming language (Javascript/Node.js)

## Prerequisites
- Docker installed   (can be downloaded from [https://docs.docker.com/get-docker/](https://docs.docker.com/get-docker/))
- Docker compose installed [https://docs.docker.com/compose/install/](https://docs.docker.com/compose/install/)


## Run the example
```
$ git clone https://github.com/frankssday/restmysql.git
$ cd restmysq/
$ docker-compose up -d
```

Launch a brower and copy paste the URL http://localhost:4000 to visit the home page.
Then click "click to see the books"

Launch a terminal/command prompt. Then copy/paste and execute the following two POST requests one by one. 
```
$ curl -X POST -H "Content-Type: application/json" -d '{"title":"Albert Einstein"}' http://localhost:4000/docs
$ curl -X POST -H "Content-Type: application/json" -d '{"title":"George Washington"}' http://localhost:4000/docs
```
Refresh the browser (the URL should be http://localhost:4000/docs) to the effect of POST requests

## Cleanup
```
$ docker-compose down
$ docker volume rm restmysql_mysql
$ docker volume rm restmysql_mysql_config
```
