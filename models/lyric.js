const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/expressMusicApi', {
    useNewUrlParser: true
});

const Schema = mongoose.Schema;

const lyricSchema = new Schema({
    id: {
        type: Number,
        require: true
    },
    sgc: {
        type: Boolean,
        require: true
    },
    sfy: {
        type: Boolean,
        require: true
    },
    qfy: {
        type: Boolean,
        require: true
    },
    lrc: {
        type: Object,
        require: true
    },
    klyric: {
        type: Object,
        require: true
    },
    tlyric: {
        type: Object,
        require: true
    },
    code: {
        type: Number,
        require: true
    }
}, {
    collection: "lyrics"
});

module.exports = mongoose.model("Lyric", lyricSchema);