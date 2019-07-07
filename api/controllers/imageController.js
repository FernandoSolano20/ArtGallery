var cloudinary = require('cloudinary').v2;

exports.uploadImage = function (req, res) {
    const file = req.files.photo;
    cloudinary.uploader.upload(file.tempFilePath, function(err, result){
            res.json(result)
    });
};