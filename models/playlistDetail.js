const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/expressMusicApi', {
    useNewUrlParser: true
});

const Schema = mongoose.Schema;

const playlistDetailSchema = new Schema({
    id: {
        type: Number,
        require: true
    },
    relatedVideos: {
        type: String,
        require: false
    },
    urls: {
        type: String,
        require: false
    },
    playlist: {
        type: Object,
        require: true
    },
    privileges: {
        type: Array,
        require: true
    },
    code: {
        type: Number,
        require: true
    }
}, {
    collection: "playlistDetails"
});

module.exports = mongoose.model('PlaylistDetail', playlistDetailSchema);