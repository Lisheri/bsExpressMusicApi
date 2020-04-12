const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/expressMusicApi', {
    useNewUrlParser: true
});

const Schema = mongoose.Schema;

const mvArtistSchema = new Schema({
    id: {
        type: Number,
        require: true,
        unique: true
    },
    artist: {
        type: Object,
        require: true
    },
    hotSongs: {
        type: Array,
        require: true
    },
    more: {
        type: Boolean,
        require: true
    },
    code: {
        type: Number,
        require: true
    }
}, {
    collection: "mvArtists"
});

module.exports = mongoose.model("MvArtist", mvArtistSchema);