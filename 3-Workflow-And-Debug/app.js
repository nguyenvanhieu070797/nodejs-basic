const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/add-product', (req, res, next) => {
    console.log("add-product");
    res.send(`<form action="/product" method="POST">
        <input type="text" name="title"/>
        <button type="submit">
            Ok!
        </button>
    </form>`);
});

app.post('/product', (req, res, next) => {
    console.log({body: req.body});
    res.redirect("/");
});

app.use('/', (req, res, next) => {
    console.log("middleware");
    res.send("<h1>Hellow from Express</h1>");
});



app.listen(3000);


