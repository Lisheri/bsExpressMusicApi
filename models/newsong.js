const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/expressMusicApi', {
    useNewUrlParser: true
});

const Schema = mongoose.Schema;

const newsongSchema = new Schema({
    id: {
        type: Number,
        require: true
    },
    type: {
        type: Number,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    copywriter: {
        type: String,
        require: false
    },
    picUrl: {
        type: String,
        require: true
    },
    canDislike: {
        type: Boolean,
        require: true
    },
    trackNumberUpdateTime: {
        type: Number,
        require: false
    },
    alg: {
        type: String,
        require: true
    },
    song: {
        type: Object,
        require: true
    }
}, {
    collection: "newsongs"
});

module.exports = mongoose.model("Newsong", newsongSchema);