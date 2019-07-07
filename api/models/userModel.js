const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    identification:{type: String, required: true, max: 9},
    name: {type: String, required: true, max: 100},
    firstLastName: {type: String, required: true, max: 100},
    secondLastName: {type: String, required: false, max: 100},
    //img: { type: String, required: true, max: 10 },
    gender: {type: String, required: true, max: 10},
    email: {type: String, required: true, max: 100},
    password: {type: String, required: true, max: 100},
    userType: {type: String, required: true, max: 100},
    description: {type: String, required: false, max: 100},
    stageName: {type: String, required: false, max: 100}
});


// Export the model
module.exports = mongoose.model('User', UserSchema);