const express = require("express");
const res = require("express/lib/response");
const app = express();

const addTwoNumber = (n1, n2) => {
    return n1+n2;
}

app.get("/addTwoNumber", (req, res) => {
    const n1 = parseInt(req.query.n1);
    const n2 = parseInt(req.query.n2);
    const result = addTwoNumber(n1, n2);
    res.json({statuscode:200, data: result});
});

app.get('/', function (req, res){
    res.send('hello world');
});

console.log(addTwoNumber(9, 22));
const port = 3000;

app.listen(port, () => {
    console.log("Hello! I'm now listening on port: " + port);
});

