const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/expressMusicApi', {
    useNewUrlParser: true
});

const Schema = mongoose.Schema;

const highqualitySchema = new Schema({
    limit: {
        type: Number,
        require: true
    },
    cat: {
        type: String,
        require: true
    },
    playlists: {
        type: Array,
        require: true
    },
    code: {
        type: Number,
        require: true
    },
    more: {
        type: Boolean,
        require: true
    },
    lasttime: {
        type: Number,
        require: true
    },
    total: {
        type: Number,
        require: true
    }
}, {
    collection: "highqualitys"
});

module.exports = mongoose.model("Highquality", highqualitySchema);