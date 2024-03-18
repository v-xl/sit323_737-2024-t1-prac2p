//We require the 'express' library, which is the webserver
const express = require("express");
const res = require("express/lib/response");
const app = express();

//Adds two numbers together and returns the result
const addTwoNumber = (n1, n2) => {
    return n1+n2;
}

//serving data on the page /addTwoNumber
//This will also run the addTwoNumber function, and return the result (if any)
app.get("/addTwoNumber", (req, res) => {
    const n1 = parseInt(req.query.n1);
    const n2 = parseInt(req.query.n2);
    const result = addTwoNumber(n1, n2);
    res.json({statuscode:200, data: result});
});

//Serving data at root of the website
app.get('/', function (req, res){
    res.send('hello world');
});

//Do a test of the addTwoNumber function
console.log(addTwoNumber(9, 22));
const port = 3000;

//Start listening on the specified port.
app.listen(port, () => {
    console.log("Hello! I'm now listening on port: " + port);
});

