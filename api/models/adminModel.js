const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let PainterSchema = new Schema({
    name: {type: String, required: true, max: 100},
    firstLastName: {type: String, required: true, max: 100},
    secondLastName: {type: String, required: false, max: 100},
    //img: { data: Buffer, contentType: String },
    email: {type: String, required: true, max: 100},
    password: {type: String, required: true, max: 100},
    description: {type: String, required: true, max: 100},
    stageName: {type: String, required: true, max: 100},
    gender: {type: Number, required: true, max: 1},
});


// Export the model
module.exports = mongoose.model('Painter', PainterSchema);