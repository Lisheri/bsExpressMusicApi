const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/expressMusicApi', {
    useNewUrlParser: true
});

const Schema = mongoose.Schema;

const simiSongSchema = new Schema({
    id: {
        type: Number,
        require: true
    },
    songs: {
        type: Array,
        require: true
    },
    code: {
        type: Number,
        require: true
    }
}, {
    collection: "simiSongs"
});

module.exports = mongoose.model("SimiSong", simiSongSchema);