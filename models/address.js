const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/expressMusicApi', {
    useNewUrlParser: true
});

const Schema = mongoose.Schema;

const addressSchema = new Schema({
    userId: {
        type: Number,
        require: true,
        unique: true
    },
    phone: {
        type: String,
        require: true,
    },
    name: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true,
    }
}, {
    collection: "addresses"
});

module.exports = mongoose.model('Address', addressSchema);