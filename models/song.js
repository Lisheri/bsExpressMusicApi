const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/expressMusicApi', {
    useNewUrlParser: true
});

const Schema = mongoose.Schema;

const songSchema = new Schema({
    type: {
        type: Number,
        require: true
    },
    data: {
        type: Array,
        require: true
    },
    code: {
        type: Number,
        require: true
    }
}, {
    collection: "songs0"
});

module.exports = mongoose.model("Song", songSchema);