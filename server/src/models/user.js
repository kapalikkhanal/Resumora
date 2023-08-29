const mongoose = require('mongoose')
const { Schema } = mongoose;

const SignupSchema = new Schema({
    firstName: String,
    lastName: String,
    countryName: String,
    email: String,
    //phoneNumber: { type: Number, unique: true },
    password: String
});



const User = mongoose.model('User', SignupSchema);

module.exports = User