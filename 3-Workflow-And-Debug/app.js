const express = require("express");
const bodyParser = require("body-parser");
const adminRouters= require("./routes/admin");
const shopRouters = require("./routes/shop");
const path = require("path");
const app = express();
const errorControllers = require("./controllers/error")


// const expressHbs = require('express-handlebars');
// app.engine(
//     'hbs',
//     expressHbs.engine({
//         layoutsDir: 'views/layouts/',
//         defaultLayout: 'main-layout',
//         extname: 'hbs'
//     })
// );
// app.set('view engine', 'hbs');

app.set('view engine', 'ejs');
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/admin', adminRouters.routes);
app.use(shopRouters);
app.use(errorControllers.get404Page);

app.listen(3000);


