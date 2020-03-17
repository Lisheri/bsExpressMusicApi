const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/expressMusicApi', {
    useNewUrlParser: true
});

const Schema = mongoose.Schema;

const mvSchema = new Schema({
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
        require: true
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
        require: true
    },
    duration: {
        type: Number,
        require: true
    },
    playCount: {
        type: Number,
        require: true
    },
    subed: {
        type: Boolean,
        require: true,
    },
    artists: {
        type: Array,
        require: true
    },
    artistName: {
        type: String,
        require: true
    },
    artistId: {
        type: Number,
        require: true
    },
    alg: {
        type: String,
        require: true
    }
}, {
    collection: 'mvs1'
});

module.exports = mongoose.model('Mv', mvSchema);