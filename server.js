var express = require('express');
// var apiRoute = require('./app/routing/apiRoutes');
var htmlRoute = require('./app/routing/htmlRoutes');
var bodyParser = require('body-parser');
var axios = require('axios');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static("app"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", htmlRoute);
// app.use("/api", apiRoute);

app.listen(PORT, function(){
    console.log("running " + PORT);
});