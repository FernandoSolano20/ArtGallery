const User = require('../models/userModel');

exports.userCreate = function (req, res) {
    /*let user = new User(
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

    User.create(
        {
            name: req.body.name,
            firstLastName: req.body.firstLastName,
            secondLastName: req.body.secondLastName,
            email: req.body.email,
            password: req.body.password,
            description: req.body.description,
            stageName: req.body.stageName,
            gender: req.body.gender
        },
        function (err, user) {
            if (err)
                res.send(err);
            //Obtiene y devuelve todas las personas tras crear una de ellas
            User.find(function (err, user) {
                if (err)
                    res.send(err)
                res.json(user);
            });
        });

    /*user.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('User Created successfully')
    })*/
};

exports.userDetails = function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) return next(err);
        res.send(user);
    })
};

exports.userUpdate = function (req, res) {
    User.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, user) {
        if (err) return res.status(500).send(err);
        const response = {
            message: "User update successfully",
            id: todo._id
        };
        return res.status(200).send(response);
    });
};

exports.userDelete = function (req, res) {
    User.findByIdAndRemove(req.params.id, function (err) {
        if (err) return res.status(500).send(err);
        const response = {
            message: "User delete successfully",
            id: todo._id
        };
        return res.status(200).send(response);
    })
};

exports.getAllUsers = function (req, res) {
    User.find(
        function (err, user) {
            if (err)
                res.send(err)
            res.json(user);
        }
    );
}