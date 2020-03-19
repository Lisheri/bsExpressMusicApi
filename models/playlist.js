const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/expressMusicApi', {
    useNewUrlParser: true
});

const Schema = mongoose.Schema;

const playlistSchema = new Schema({
    playlists: {
        type: Array,
        require: true
    },
    total: {
        type: Number,
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
    cat: {
        type: String,
        require: true
    }
}, {
    collection: "playlists"
});

module.exports = mongoose.model("Playlist", playlistSchema);