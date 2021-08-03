# restmysql

## Instructions
This exercise demonstrates
- The use of Docker compose to build microservices
- The use of a REST API through a programming language (Javascrip)

## Prerequisites
- Docker installed   (can be downloaded from [https://www.terraform.io/downloads.html](https://www.terraform.io/downloads.html))
- Docker compose installed [https://boto3.amazonaws.com/v1/documentation/api/latest/guide/quickstart.html](https://boto3.amazonaws.com/v1/documentation/api/latest/guide/quickstart.html)

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
Refresh the browser
