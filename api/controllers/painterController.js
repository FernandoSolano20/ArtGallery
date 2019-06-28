const Painter = require('../models/painterModel');

exports.painter_create = function (req, res) {
    /*let painter = new Painter(
        {
            name: req.body.name,
            firstLastName: req.body.firstLastName,
            secondLastName: req.body.secondLastName,
            email: req.body.email,
            password: req.body.password,
            description: req.body.description,
            stageName: req.body.stageName,
            gender: req.body.gender
        }
    );*/

    Painter.create( 
        {name: req.body.name,
            firstLastName: req.body.firstLastName,
            secondLastName: req.body.secondLastName,
            email: req.body.email,
            password: req.body.password,
            description: req.body.description,
            stageName: req.body.stageName,
            gender: req.body.gender},
        function(err, painter){
            if (err)
                res.send(err);
            //Obtiene y devuelve todas las personas tras crear una de ellas
            Painter.find(function(err, painter){
                if(err)
                    res.send(err)
                res.json(painter);
            });
        });
        /*
    painter.save(function (err) {
        if (err) {
            return next(err +"hola");
        }
        res.send('Painter Created successfully')
    })*/
};

exports.painter_details = function (req, res) {
    Painter.findById(req.params.id, function (err, painter) {
        if (err) return next(err);
        res.send(painter);
    })
};

exports.painter_update = function (req, res) {
    Painter.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, painter) {
        if (err) return next(err);
        res.send('Painter udpated.');
    });
};

exports.painter_delete = function (req, res) {
    Painter.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};