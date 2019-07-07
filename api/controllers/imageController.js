var cloudinary = require('cloudinary').v2;

exports.uploadImage = function (req, res) {
    console.log(req.body);
    /*const file = req.files.photo;
    cloudinary.uploader.upload(file.tempFilePath, function(err, result){
        res.send({
            success:true,
            result
        });
    });*/
};