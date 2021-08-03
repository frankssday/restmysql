# restmysql

## Instructions
This exercise demonstrates
- The use of Docker compose to build microservices
- The use of REST API (GET/POST) through a programming language (Javascrip)

## Prerequisites
- Docker installed   (can be downloaded from [https://docs.docker.com/get-docker/](https://docs.docker.com/get-docker/))
- Docker compose installed [https://docs.docker.com/compose/install/](https://docs.docker.com/compose/install/)

```

## Run the example
```
$ git clone https://github.com/frankssday/restmysql.git
$ cd restmysq/
$ docker-compose up -d
```

Launch a brower and copy paste the URL http://localhost:4000 to visit the home page
Click "click to see the books"

Launch a terminal/command prompt and copy and paste the following POST curl request
```
$ curl -X POST -H "Content-Type: application/json" -d '{"title":"Albert Einstein"}' http://localhost:4000/docs
```
Refresh the browser to the effect of POST request

## Cleanup
```
$ docker-compose down
$ docker volume rm restmysql_mysql
$ docker volume rm restmysql_mysql_config
```
