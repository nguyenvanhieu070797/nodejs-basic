const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize = require('./util/database');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const Product = require('./models/product')
const User = require('./models/user')


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
   User.findByPk(1).then(user => {
        req.user = user;
        next();
   }).catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

Product.belongsTo(User, {
    constants: true,
    onDelete: 'CASCADE',
});
User.hasMany(Product);

sequelize
    // .sync({
    //     force: true,
    // })
    .sync()
    .then(() => {
        return User.findByPk(1)
        console.log("connect success !!!");
        app.listen(3000);
    }).then (user => {
        if (!user) {
            User.create({name: 'n-hieu', email: 'n-hieu@cyllenge.comgg'})
        }
        return Promise.resolve(user);
    }).then(user => {
        console.log({user});
        app.listen(3000);
    }).catch(err => {
        console.log(err);
    })
