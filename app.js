const express = require('express');
const app = express();
app.use(express.json());


var mysql = require('mysql');

var con = mysql.createConnection({
  //host: "127.0.0.1",
  host: "mysqldb",
  user: "rhino",
  password: "rhino123",
  database: "bookstore"
});

//GET request for home page
app.get('/', (req, res) => {
res.send('<b>This is a sample test from Rhinogram implemented with Node.JS Express module.</b> <br><br><a href="/docs"> click to see the books </a>');
});

 //GET request for /docs end point
app.get('/docs', (req,res)=> {
   con.query("SELECT * FROM books", function (err, result, fields) {
     if (err) throw err;
     //con.end();
     console.log(JSON.stringify(result));
     res.status(200).send(JSON.stringify(result));
   })
});

//POST request
app.post('/docs', (req,res) => {
    //var sql = "INSERT INTO books (title) VALUES (" + req.body.title + ")";
    var sql = "INSERT INTO books (title) VALUES ('Albert Einstein')";
    //console.log(req.body.title);
    console.log(sql);
    con.query(sql, function (err, result, fields) {
     if (err) throw err;
     console.log("one record inserted");
  })
  res.status(204).send();
})
     


//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}..`));
