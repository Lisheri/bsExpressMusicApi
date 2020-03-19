const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/expressMusicApi', {
    useNewUrlParser: true
});

const Schema = mongoose.Schema;

const simiPlaylistSchema = new Schema({
    id: {
        type: Number,
        require: true
    },
    playlists: {
        type: Array,
        require: true
    },
    code: {
        type: Number,
        require: true
    }
}, {
    collection: "simiPlaylists"
});

module.exports = mongoose.model('SimiPlaylist', simiPlaylistSchema);