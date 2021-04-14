const express = require('express')
const mysql = require('mysql')
const app = express()
const port = 3001

//connection info for the 
var connection = mysql.createConnection({
    host: 'localhost', 
    user : 'root', 
    password: '@51124Loco',
    database: 'thomasweb'
})

// method that runs when the back-end connects to the database
connection.connect((err)=> {
    if(err){
        console.log('Error');
        throw err;
    }
    console.log('Connected to the DB!')

    connection.query("SELECT * FROM publishers", function (err, result, fields){
        if(err) throw err;// if anything goes wrong
        console.log("Here are all the publishers");
        console.log(result);
    });
})

app.get('/', (req, res) => {

    connection.query("SELECT * FROM publishers", function (err, result, fields){
        if(err) throw err; // if anything goes wrong
        res.send(result);
    });
    console.log("Ping!!!");
})// end get '/'



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})