const express = require('express');
const bodyParser = require('body-parser');
const painter = require('./routes/painterRoute'); // Imports routes for the products
const app = express();
app.use(express.static('C:/Users/luisf/Desktop/artGalery/public'));
    app.use(bodyParser.urlencoded({ extended: false }));
// Set up mongoose connection
const mongoose = require('mongoose');
//var Schema = mongoose.Schema;

let mongoDB = 'mongodb://localhost:27017/galery';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/painters', painter);

let port = 8080;
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});

