const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/expressMusicApi', {
    useNewUrlParser: true
});

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true
    },
    userId: {
        type: Number,
        require: true,
        unique: true
    },
    pic: {
        type: String,
        require: false,
        default: null
    }
}, {
    collection: "users"
});

module.exports = mongoose.model('User', userSchema);