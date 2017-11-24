var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    List = require('./api/models/ListModel'), //created model loading here
    Card = require('./api/models/CardModel'), //created model loading here
    bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/tailor-db');


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Allow-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/routes'); //importing route
routes(app); //register the route


app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
});


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);
