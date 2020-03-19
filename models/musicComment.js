const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/expressMusicApi', {
    useNewUrlParser: true
});

const Schema = mongoose.Schema;

const musicCommentSchema = new Schema({
    id: {
        type: Number,
        require: true
    },
    isMusician: {
        type: Boolean,
        require: true
    },
    userId: {
        type: Number,
        require: true
    },
    topComments: {
        type: Array,
        require: true
    },
    moreHot: {
        type: Boolean,
        require: false
    },
    hotComments: {
        type: Array,
        require: false
    },
    code: {
        type: Number,
        require: true
    },
    comments: {
        type: Array,
        require: true
    },
    total: {
        type: Number,
        require: true
    },
    more: {
        type: Boolean,
        require: false
    }
}, {
    collection: "musicComments"
});

module.exports = mongoose.model("MusicComment", musicCommentSchema);