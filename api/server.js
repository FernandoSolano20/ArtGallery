const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
var path = require('path');
require('dotenv').config();

const user = require('./routes/userRoute');

const app = express();

var cloudinary = require('cloudinary').v2;
cloudinary.config({ 
    cloud_name: 'fernandocloud', 
    api_key: '928379123642394', 
    api_secret: 'BV_--LbSDhTLW-TNPM4BiNQ1B4s' 
  });
  

app.use(cors());
app.use(express.static(__dirname + "./../public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');//verbos
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);//para los credenciales
    next();
});

/*mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));*/

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true }, function(err, database) {
    if (err) {
        console.log(err);
        process.exit(1);
    }

    db = database;
    

    // Se inicia la aplicacion.
    const server = app.listen(process.env.PORT || 8000, function() {
        let port = server.address().port;
        console.log('Server is up and running on port numner ' + port);
    });
});

function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({ "error": message });
}

app.use('/users', user);